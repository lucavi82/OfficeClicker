/**
 * Created by awijaya on 1/8/2015.
 */

var cafetariaLadyDirective = angular.module('cafetariaLadyDirective', ['workerModule']);

cafetariaLadyDirective.directive('cafetariaLadySelection', [function() {
  return {
    priority: 0,
    restrict: 'E',
    transclude: false,
    replace: true,
    scope: {
      cafetariaLady: '=',
      numberClick: '='
    },
      controller: ['$scope', 'workerFactory', function($scope, workerFactory) {
        $scope.addWorker = function() {
          $scope.numberClick = $scope.numberClick - $scope.cafetariaLady.cost;
          workerFactory.addWorker($scope.cafetariaLady);
        }
      }],
      templateUrl: 'items/worker/cafetariaLady/cafetaria-lady.html'
  }
}])
