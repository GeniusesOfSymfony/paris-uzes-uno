app.controller('rankCtrl', function($scope, rankFactory){
    $scope.ranks = rankFactory.getRanks();
});