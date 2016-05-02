'use strict';

var starcraftApp = angular.module('starcraftApp', [
  'ngRoute',
  'starcraftAnimations',
  'starcraftControllers',
  'starcraftFilters',
  'starcraftServices',
  'starcraftDirectives'
]);

starcraftApp.config(function($routeProvider) {
    $routeProvider.
      when('/units', {
        templateUrl: 'partials/unit-list.html',
        controller: 'UnitListCtrl'
      }).
      when('/units/:id', {
        templateUrl: 'partials/unit-detail.html',
        controller: 'UnitDetailCtrl'
      }).
      when('/add', {
        templateUrl: 'partials/add-unit.html',
        controller: 'UnitListCtrl'
      })
      .otherwise({
        redirectTo: '/units'
      });
  });
