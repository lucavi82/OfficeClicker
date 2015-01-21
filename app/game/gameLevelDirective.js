/**
 * Created by awijaya on 1/16/2015.
 */

var gameLevelDirective = angular.module('gameLevelDirective', ['gameLevelModule']);

gameLevelDirective.directive('gameLevel', ['gameLevelFactory', function(gameLevelFactory) {
  return {
    priority: 0,
    restrict: 'E',
    transclude: false,
    replace: true,
    scope: {
      gameLevel: '=',
      playerStat: '='
    },
    controller: ['$scope', function($scope) {
      $scope.clickMe = function() {
        $scope.gameLevel.clickToFinish--;
        if ($scope.gameLevel.clickToFinish === 0) {
          $scope.playerStat.gameCredit = $scope.playerStat.gameCredit + $scope.gameLevel.gameCredit;
          $scope.gameLevel.clickToFinish = gameLevelFactory.getClickToFinish($scope.gameLevel.name, $scope.gameLevel.level);
        }
      }
    }],
    templateUrl: 'game/gameLevel.html'
  }
}])
