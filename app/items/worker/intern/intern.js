/**
 * Created by awijaya on 1/6/2015.
 */
var internModule = angular.module('internModule', ['abilityModule']);

internModule.factory('internItem', ['abilityFactory', function(abilityFactory) {

  var intern = {
    count: 0,
    cps: 1,
    cost: 5,
    abilities: [
      abilityFactory.createWorkerMultiple('double tap', 10, 20),
      abilityFactory.createWorkerMultiple('arm and leg', 20, 20)
    ]
  };

  return intern;
}]);
