app.factory('playerFactory', function(){
    var factory = {};

    factory.players = [
        {
            name: 'Johann',
            totalScore: 100,
            lastLolRound: -1,
            isLol: false
        },
        {
            name: 'Sebastien',
            totalScore: 260,
            lastLolRound: -1,
            isLol: false
        },
        {
            name: 'Yannick',
            totalScore: 700,
            lastLolRound: -1,
            isLol: false
        }
    ];

    factory.lastLolRound = null;

    factory.getLastLolRound = function(){
        return this.lastLolRound;
    };

    factory.setLastLolRound = function(roundPosition, player){
        if(roundPosition > this.lastLolRound){
            player.lastLolRound = roundPosition + 1;
            this.update([player]);
        }
    };

    factory.isValid = function(player){
        if(!player){
            return false;
        }

        return (
            angular.isDefined(player.name) &&
            player.name != '' &&
            player.name != null
            ) && angular.isNumber(player.totalScore)
    };

    factory.getPlayers = function(){
        return this.players;
    };

    factory.setPlayer = function(key, player){
        this.players[key] = player;
    };

    factory.setPlayers = function(players){
        this.players = players;
    };

    factory.average = function(){
        var sum = 0;
        angular.forEach(this.getPlayers(), function(value){
            sum +=value.totalScore;
        });

        return Math.ceil(sum / this.getPlayers().length);
    };

    factory.createPlayer = function(player){
        player.score = 0;
        var newPlayer = angular.copy(player);

        player.name = null;
        player.score = null;
        player.totalScore = 0;
        player.isLol = false;
        player.lastLolRound = -1;

        return newPlayer;
    };

    factory.addPlayer = function(newPlayer){
        this.players.push(newPlayer);
    };

    factory.getPlayer = function(playerId){
        return this.players[playerId];
    };

    factory.update = function(players){
        var _this = this;
        angular.forEach(this.getPlayers(), function(playerSystem, idPlayerSystem){
            angular.forEach(players,  function(inputPlayer){
                if(inputPlayer.name == playerSystem.name){
                    _this.setPlayer(idPlayerSystem, inputPlayer);
                }
            });
        });
    };

    factory.getNamedPlayer = function(playerName){
        var player = null;

        angular.forEach(this.getPlayers(), function(value){
            if(value.name == playerName){
                player = value;
            }
        });

        return player;
    };

    factory.reset = function(){
        this.players = [];
    };

    return factory;
});

app.controller('playerCtrl', function($scope, playerFactory){
    $scope.init = function(){
        $scope.players = playerFactory.getPlayers();
    };

    $scope.addPlayer = function(player){
        playerFactory.addPlayer(playerFactory.createPlayer(player));
        $scope.players = playerFactory.getPlayers();
    };

    $scope.isPlayerValid = function(player){
        return playerFactory.isValid(player);
    };

    $scope.getAveragePlayers = function(player){
        if(angular.isDefined(player)){
            player.totalScore = playerFactory.average();
        } else {
            alert('Renseignez le nom du pelo, merci !');
        }
    }
});