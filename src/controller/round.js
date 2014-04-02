

app.controller('roundCtrl', function($scope, roundFactory, rankFactory){
    $scope.addRound = function(){
        roundFactory.addRound(roundFactory.createRound());
        $scope.rounds = roundFactory.getRounds();
        $scope.ranks = rankFactory.update();
        $scope.lolMap = roundFactory.getLolMap();
        $scope.rulesMap = roundFactory.getRulesMap();
    };
});