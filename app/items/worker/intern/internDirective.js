/**
 * Created by awijaya on 1/8/2015.
 */

var internDirective = angular.module('internDirective', ['workerModule']);

internDirective.directive('internSelection', [function() {
  return {
    priority: 0,
    restrict: 'E',
    transclude: false,
    replace: true,
    scope: {
      intern: '=',
      numberClick: '='
    },
      controller: ['$scope', 'workerFactory', function($scope, workerFactory) {
        $scope.addWorker = function() {
          $scope.numberClick = $scope.numberClick - $scope.intern.cost;
          workerFactory.addWorker($scope.intern);
        }
      }],
      templateUrl: 'items/worker/intern/intern.html'
  }
}])
