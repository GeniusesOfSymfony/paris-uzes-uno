app.factory('roundFactory', function(playerFactory, rulesFactory){
    var factory = {};

    factory.rounds = [];
    factory.lolMap = [];
    factory.rulesMap = {};

    factory.getRulesMap = function(){
        return this.rulesMap;
    };

    factory.registerRule = function(rule, roundPosition, scorePosition){
        if(!this.rulesMap[roundPosition]){
            this.rulesMap[roundPosition] = {};
        }

        this.rulesMap[roundPosition][scorePosition] = rule;
    };

    factory.getRounds = function(){
        return this.rounds;
    };

    factory.setRounds = function(rounds){
        this.rounds = rounds;
    };

    factory.registerLol = function(roundPosition, scorePosition, player){
        this.lolMap.push({ round: roundPosition, score: scorePosition });
        playerFactory.setLastLolRound(roundPosition, player);
    };

    factory.getLolMap = function(){
        return this.lolMap;
    };

    factory.createRound = function(){
        var round = [],
            _this = this;

        angular.forEach(playerFactory.getPlayers(), function(player, playerId){
            if(!angular.isNumber(player.score)){
                player.score = 0;
            }

            round.push(player.score);

            if(player.isLol == true){
                _this.registerLol(_this.rounds.length - 1, round.length - 1, player);
                player.totalScore = player.score;
            } else {
                player.totalScore += player.score;

                var rule = rulesFactory.walk(playerId, player, round);

                if(typeof rule == 'object'){
                    var data = rule.apply(playerId, player,  round);
                    switch(data.factorType){
                        case 'addition' :
                            player.totalScore += data.factorScore;
                        break;
                        case 'soustraction' :
                            player.totalScore -= data.factorScore;
                        break;
                        case 'definition' :
                            player.totalScore = data.factorScore;
                        break;
                    }

                    _this.registerRule({
                        name: rule.name,
                        factorSign: data.factorSign,
                        factorScore: data.factorScore
                    },
                    _this.rounds.length, round.length - 1);

                    alert(player.name + ' à subit la règle ' + rule.name);
                }
            }

            player.score = 0;
            player.isLol = false;

            playerFactory.update([player]);
        });

        return round;
    };

    factory.reset = function(){
        this.rounds = [];
    };

    factory.addRound = function(newRound){
        this.rounds.push(newRound);
    };

    return factory;
});

app.controller('roundCtrl', function($scope, roundFactory, rankFactory){
    $scope.addRound = function(){
        roundFactory.addRound(roundFactory.createRound());
        $scope.rounds = roundFactory.getRounds();
        $scope.ranks = rankFactory.update();
        $scope.lolMap = roundFactory.getLolMap();
        $scope.rulesMap = roundFactory.getRulesMap();
    };
});