app.factory('rankFactory', function(playerFactory){
    var factory = {};

    factory.ranks = [];

    factory.update = function(){
        var players = playerFactory.getPlayers();
        this.ranks = this.sort(angular.copy(players));

        return this.ranks;
    };

    factory.getRanks = function(){
        return this.ranks;
    };

    factory.setRanks = function(ranks){
        this.ranks = ranks;
    };

    factory.sort = function(players){
        return players.sort(function(a, b){
            if(a.totalScore == b.totalScore) {
                return 0;
            }

            return a.totalScore > b.totalScore ? 1 : -1
        });
    };

    factory.reset = function(){
        this.ranks = [];
    };

    return factory;
});

app.controller('rankCtrl', function($scope, rankFactory){
    $scope.ranks = rankFactory.getRanks();
});