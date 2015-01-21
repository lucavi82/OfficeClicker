/**
 * Created by awijaya on 1/8/2015.
 */

var mouseDirective = angular.module('mouseDirective', ['workerModule']);

mouseDirective.directive('mouseSelection', [function() {
  return {
    priority: 0,
    restrict: 'E',
    transclude: false,
    replace: true,
    scope: {
      gameStat: '='
    },
      controller: ['$scope', 'workerFactory', function($scope, workerFactory) {
        $scope.addWorker = function() {
          $scope.gameStat.numberClick = $scope.gameStat.numberClick - $scope.gameStat.mouse.cost;
          workerFactory.addWorker($scope.gameStat.mouse);
        }
      }],
      templateUrl: 'items/mouse/mouse.html'
  }
}])
