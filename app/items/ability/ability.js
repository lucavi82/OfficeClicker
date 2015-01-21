/**
 * Created by awijaya on 1/9/2015.
 */
var abilityModule = angular.module('abilityModule', []);

abilityModule.factory('abilityFactory', [function() {
  var abilityFactory = {};

  abilityFactory.createWorkerMultiple = function(name, cost, workerMultiply) {
    return {
      name: name,
      cost: cost,
      selected: false,
      workerMultiply: workerMultiply
    };
  }

  abilityFactory.createOverallMultiple = function(name, cost, overallMultiply) {
    return {
      name: name,
      cost: cost,
      selected: false,
      overallMultiply: overallMultiply
    };
  }

  return abilityFactory;
}])
