/**
 * Created by awijaya on 1/15/2015.
 */

var workLevelModule = angular.module('workLevelModule', []);

workLevelModule.factory('workLevelFactory',[ function() {
  var workLevelFactory = {};

  var workLevels = [
    {name: 'work 1', maxLevel: 10, finishInterval: 10, finishMultiplier: 1.2, creditInterval: 10, creditMultiplier: 1.1},
    {name: 'work 2', maxLevel: 10, finishInterval: 20, finishMultiplier: 1.8, creditInterval: 15, creditMultiplier: 1.2}
  ]

  var findIndex = function(name) {
    for(var i = 0, len = workLevels.length; i < len; i++) {
      if (workLevels[i].name === name) {
        return i;
      }
    }
    return -1;
  }

  workLevelFactory.getClickToFinish = function(name, level) {
    var finishInterval;
    var finishMultiplier;
    var result = -1
    workLevels.forEach(function(workLevel) {
      if(workLevel.name === name) {
        result = level * workLevel.finishInterval * workLevel.finishMultiplier;
      }
    });
    return result;
  }

  workLevelFactory.getWorkCredit = function(name, level) {
    var creditInterval;
    var creditMultiplier;
    var result;
    workLevels.forEach(function(workLevel) {
      if(workLevel.name === name) {
        result = level * workLevel.creditInterval * workLevel.creditMultiplier;
      }
    });
    return result;
  }

  workLevelFactory.createInitialWorkLevel = function() {
    var result = {
      name: workLevels[0].name,
      level: 1,
      clickToFinish: workLevelFactory.getClickToFinish(workLevels[0].name, 1),
      workCredit: workLevelFactory.getWorkCredit(workLevels[0].name, 1)
    }
    return result;
  }

  workLevelFactory.getNextWork = function(name) {
    var index = findIndex(name) + 1;

    if (index > 0) {
      return {
        name: workLevels[index].name,
        level: 1,
        clickToFinish: workLevelFactory.getClickToFinish(workLevels[index].name, 1),
        workCredit: workLevelFactory.getWorkCredit(workLevels[index].name, 1)
      }
    }
  }

  return workLevelFactory;
}]);
