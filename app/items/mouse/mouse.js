/**
 * Created by awijaya on 1/6/2015.
 */
var mouseModule = angular.module('mouseModule', []);

mouseModule.factory('mouseItem', function() {

  var mouse = {
    count: 0,
    value: 1,
    cps: 0,
    cost: 10
  };

  return mouse;
});
