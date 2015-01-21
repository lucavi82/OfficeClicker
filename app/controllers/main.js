'use strict';

var controleModule = angular.module('controlModule',[
  'ngCookies',
  'playerStatModule',
  'gameLevelModule',
  'workLevelModule'
]);

controleModule.controller('MainCtrl', ['$scope', '$cookieStore', '$interval', 'playerStatFactory', 'gameLevelFactory', 'workLevelFactory',
  function ($scope, $cookieStore, $interval, playerStatFactory, gameLevelFactory, workLevelFactory) {

    $scope.playerStat = playerStatFactory.createplayerStat();
    $scope.gameLevel = gameLevelFactory.createInitialGameLevel();
    $scope.workLevel = workLevelFactory.createInitialWorkLevel();

    var intervalPromise;

    $scope.gameLoad = function() {
      $scope.playerStat = $cookieStore.get('playerStatus');
      $scope.startInterval();
    }

    $scope.gameSave = function() {
      $cookieStore.put('playerStatus', $scope.playerStat);
    }

    $scope.startInterval = function() {
      intervalPromise = $interval($scope.refreshplayerStatus, 1000);
    }

    $scope.refreshplayerStatus = function() {
      //console.log("run");
      playerStatFactory.refreshplayerStat($scope.playerStat);
    }

    $scope.$on('$destroy', function() {
      $interval.cancel(intervalPromise);
    });

    $scope.startInterval();
}]);

