/**
 * Created by awijaya on 1/6/2015.
 */
var cafetariaLadyModule = angular.module('cafetariaLadyModule', []);

cafetariaLadyModule.factory('cafetariaLadyItem', function() {

  var cafetariaLady = {
    count: 0,
    cps: 1,
    cost: 5
  };

  return cafetariaLady;
});
