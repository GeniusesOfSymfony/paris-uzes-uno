
app.controller('gameCtrl', function($scope, roundFactory, gameFactory, playerFactory, rankFactory){
    $scope.init = function(){
        $scope.game = gameFactory.getGame();
        $scope.rounds = roundFactory.getRounds();
        $scope.players = playerFactory.getPlayers();
        $scope.ranks = rankFactory.getRanks();
        $scope.lolMap = roundFactory.getLolMap();
    };

    $scope.startGame = function(){
        if($scope.game == false){
            gameFactory.setGame(true);
        }

        $scope.game = gameFactory.getGame();
    };

    $scope.resetGame = function(){
        gameFactory.reset();
        $scope.players = playerFactory.getPlayers();
        $scope.rounds = roundFactory.getRounds();
        $scope.ranks = rankFactory.getRanks();
    };

    $scope.assignLol = function(lol){
        var targetPlayer = playerFactory.getNamedPlayer(lol.target),
            ownerPlayer = playerFactory.getNamedPlayer(lol.owner),
            backupPlayers = { targetPlayer: angular.copy(targetPlayer), ownerPlayer: angular.copy(ownerPlayer) };

        if(ownerPlayer == targetPlayer){
            alert('Alert aux gogoles les enfants !');
            return;
        }

        ownerPlayer.score = backupPlayers.targetPlayer.totalScore + lol.handPoint;
        ownerPlayer.isLol = true;
        targetPlayer.score = backupPlayers.ownerPlayer.totalScore;
        targetPlayer.isLol = true;

        playerFactory.update([ownerPlayer, targetPlayer]);

        lol.target = null;
        lol.owner = null;
        lol.handPoint = null;

        $scope.players = playerFactory.getPlayers();
    };
});