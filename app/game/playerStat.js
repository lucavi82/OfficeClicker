/**
 * Created by awijaya on 1/7/2015.
 */

var playerStatModule = angular.module('playerStatModule',['workerModule', 'mouseModule', 'internModule', 'cafetariaLadyModule'] );

/**
 * mouse
 * intern
 * cafetaria lady
 * mail guy
 * security
 * receptionist
 * medical team
 * HR
 * legal
 * accountant
 * sales
 * marketing
 * testers
 * business analyst
 * programmer analyst
 */
playerStatModule.factory('playerStatFactory', ['workerFactory', 'mouseItem', 'internItem', 'cafetariaLadyItem', function(workerFactory, mouseItem, internItem, cafetariaLadyItem) {
  var playerStatFactory = {};

  playerStatFactory.createplayerStat = function() {
    return {
      gameCredit: 0,
      workCredit: 0,
      totalCPS: 0,
      mouse: mouseItem,
      intern: internItem,
      cafetariaLady: cafetariaLadyItem
    }
  };

  playerStatFactory.refreshplayerStat = function(playerStat) {
    playerStat.totalCPS = playerStatFactory.getCps(playerStat);
    playerStat.numberClick = playerStat.numberClick + playerStat.totalCPS;
  }

  playerStatFactory.getCps = function(playerStat) {
    return workerFactory.getValue(playerStat.intern) + workerFactory.getValue(playerStat.cafetariaLady);
  }

  return playerStatFactory;
}]);
