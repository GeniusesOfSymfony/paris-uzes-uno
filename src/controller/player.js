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