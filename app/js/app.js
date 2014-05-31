'use strict';

var starcraftApp = angular.module('starcraftApp', [
  'ngRoute',
  'starcraftAnimations',
  'starcraftControllers',
  'starcraftFilters',
  'starcraftServices',
]);

starcraftApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/units', {
        templateUrl: 'partials/unit-list.html',
        controller: 'UnitListCtrl'
      }).
      when('/units/zerg', {
        templateUrl: 'partials/unit-list-zerg.html',
        controller: 'UnitListCtrlZerg'
      }).
      when('/units/protoss', {
        templateUrl: 'partials/unit-list-protoss.html',
        controller: 'UnitListCtrlProtoss'
      }).
      when('/units/terran', {
        templateUrl: 'partials/unit-list-terran.html',
        controller: 'UnitListCtrlTerran'
      }).
      when('/units/:unitId', {
        templateUrl: 'partials/unit-detail.html',
        controller: 'UnitDetailCtrl'
      }).
      when('/add', {
        templateUrl: 'partials/add-unit.html',
        controller: 'AddUnitCtrl'
      })
      .when('/user-list', {templateUrl: 'partials/user-list.html', controller: 'UserListCtrl'})
      .when('/user-detail/:id', {templateUrl: 'partials/user-detail.html', controller: 'UserDetailCtrl'})
      .when('/user-creation', {templateUrl: 'partials/user-creation.html', controller: 'UserCreationCtrl'})
      .otherwise({
        redirectTo: '/units'
      });
  }]);
