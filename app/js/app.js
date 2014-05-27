'use strict';

/* App Module */

var starcraftApp = angular.module('starcraftApp', [
  'ngRoute',
  'starcraftAnimations',
  'starcraftControllers',
  'starcraftFilters',
  'starcraftServices'
]);

starcraftApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/units', {
        templateUrl: 'partials/unit-list.html',
        controller: 'UnitListCtrl'
      }).
      when('/units/:unitId', {
        templateUrl: 'partials/unit-detail.html',
        controller: 'UnitDetailCtrl'
      }).
      otherwise({
        redirectTo: '/units'
      });
  }]);
