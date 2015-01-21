/**
 * Created by awijaya on 1/15/2015.
 */
var gameLevelModule = angular.module('gameLevelModule', []);

gameLevelModule.factory('gameLevelFactory',[ function() {
  var gameLevelFactory = {};

  var gameLevels = [
    {name: 'Muffin Clicker', maxLevel: 10, finishInterval: 10, finishMultiplier: 1.2, creditInterval: 10, creditMultiplier: 1.1},
    {name: 'Empire Clicker', maxLevel: 10, finishInterval: 20, finishMultiplier: 1.8, creditInterval: 15, creditMultiplier: 1.2}
  ]

  var findIndex = function(name) {
    for(var i = 0, len = gameLevels.length; i < len; i++) {
      if (gameLevels[i].name === name) {
        return i;
      }
    }
    return -1;
  }

  gameLevelFactory.getClickToFinish = function(name, level) {
    var finishInterval;
    var finishMultiplier;
    var result = -1
    gameLevels.forEach(function(gameLevel) {
      if(gameLevel.name === name) {
        result = level * gameLevel.finishInterval * gameLevel.finishMultiplier;
      }
    });
    return result;
  }

  gameLevelFactory.getGameCredit = function(name, level) {
    var creditInterval;
    var creditMultiplier;
    var result;
    gameLevels.forEach(function(gameLevel) {
      if(gameLevel.name === name) {
        result = level * gameLevel.creditInterval * gameLevel.creditMultiplier;
      }
    });
    return result;
  }

  gameLevelFactory.createInitialGameLevel = function() {
    var result = {
      name: gameLevels[0].name,
      level: 1,
      clickToFinish: gameLevelFactory.getClickToFinish(gameLevels[0].name, 1),
      gameCredit: gameLevelFactory.getGameCredit(gameLevels[0].name, 1)
    }
    return result;
  }

  gameLevelFactory.getNextGame = function(name) {
    var index = findIndex(name) + 1;

    if (index > 0) {
      return {
        name: gameLevels[index].name,
        level: 1,
        clickToFinish: gameLevelFactory.getClickToFinish(gameLevels[index].name, 1),
        gameCredit: gameLevelFactory.getGameCredit(gameLevels[index].name, 1)
      }
    }
  }

  return gameLevelFactory;
}]);
