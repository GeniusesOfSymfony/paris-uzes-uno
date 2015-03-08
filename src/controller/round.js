app.controller('roundCtrl', function($scope, roundFactory, rankFactory, rulesFactory){
    $scope.addRound = function(){
        roundFactory.addRound(roundFactory.createRound());
        $scope.rounds = roundFactory.getRounds();
        $scope.ranks = rankFactory.update();
        $scope.lolMap = roundFactory.getLolMap();
        $scope.rulesMap = roundFactory.getRulesMap();
        $scope.customRule = false;
    };

    $scope.pickCustomRule = function () {
        $scope.customRule = rulesFactory.pickCustomRule();
        if (false === $scope.customRule) {
            alert('No more custom rules !');
        }
    }
});
