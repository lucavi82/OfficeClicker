/**
 * Created by awijaya on 1/8/2015.
 */
var workerModule = angular.module('workerModule', []);

workerModule.factory('workerFactory', [function() {
  var workerFactory = {};

  workerFactory.getCost = function(worker) {
    return worker.cost;
  }

  workerFactory.getCps = function(worker) {
    return worker.getCps;
  }

  workerFactory.addWorker = function(worker) {
    worker.count = worker.count + 1;
  }

  workerFactory.getValue = function(worker) {
    return worker.count * worker.cps * getAbilitiesMultiplier(worker.abilities)/100;
  }

  var getAbilitiesMultiplier = function(abilities) {
    var multiplier = 100;
    angular.forEach(abilities, function(ability) {
      if(ability.workerMultiply != null) {
        if(ability.selected) {
          multiplier = multiplier + ability.workerMultiply;
        }
      }
    })
    return multiplier;
  }

  return workerFactory;
}])
