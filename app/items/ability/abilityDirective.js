/**
 * Created by awijaya on 1/8/2015.
 */

var abilityDirective = angular.module('abilityDirective', []);

abilityDirective.directive('abilitySelection', [function() {
  return {
    priority: 0,
    restrict: 'E',
    transclude: false,
    replace: true,
    scope: {
      numberClick: '=',
      ability: '=',
      first: '@'
    },
      controller: ['$scope', function($scope) {
        $scope.addAbility = function() {
          $scope.numberClick = $scope.numberClick - $scope.ability.cost;
          $scope.ability.selected = true;
        }
      }],
      templateUrl: 'items/ability/ability.html'
  }
}])
