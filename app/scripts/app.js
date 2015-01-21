'use strict';
/**
 *
 * Created by awijaya on 1/15/2015.
 */
var mainModule = angular.module('mainModule', [
    'ngSanitize',
    'ngRoute',
    'controlModule',
    'mouseDirective',
    'internDirective',
    'cafetariaLadyDirective',
    'abilityDirective',
    'gameLevelDirective',
    'workLevelDirective'
  ]);

mainModule.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
