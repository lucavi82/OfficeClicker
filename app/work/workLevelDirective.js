/**
 * Created by awijaya on 1/16/2015.
 */
var workLevelDirective = angular.module('workLevelDirective', ['workLevelModule']);

workLevelDirective.directive('workLevel', ['workLevelFactory', function(workLevelFactory) {
  return {
    priority: 0,
    restrict: 'E',
    transclude: false,
    replace: true,
    scope: {
      workLevel: '=',
      playerStat: '='
    },
    controller: ['$scope', function($scope) {
      $scope.clickMe = function() {
        $scope.workLevel.clickToFinish--;
        if ($scope.workLevel.clickToFinish === 0) {
          $scope.playerStat.workCredit = $scope.playerStat.workCredit + $scope.workLevel.workCredit;
          $scope.workLevel.clickToFinish = workLevelFactory.getClickToFinish($scope.workLevel.name, $scope.workLevel.level);
        }
      }
    }],
    templateUrl: 'work/workLevel.html'
  }
}])
