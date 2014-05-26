'use strict';

/* App Module */

var bestgameApp = angular.module('bestgameApp', [
  'ngRoute'
]);

bestgameApp = angular.module('bestgameApp', [
  'ngRoute'
]);

bestgameApp.factory('zmienna', function() {
	return {wartosc:"poczatkowa"};
});


bestgameApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/witaj', {
        templateUrl: 'partials/powitanie.html',
        controller: 'WitajCtrl'
      }).
      when('/ludzie', {
        templateUrl: 'partials/ludzie.html',
        controller: 'LudzieCtrl'
      }).
      when('/protosi', {
        templateUrl: 'partials/protosi.html',
        controller: 'ProtosiCtrl'
      }).
      when('/zergi', {
        templateUrl: 'partials/zergi.html',
        controller: 'ZergiCtrl'
      }).
      otherwise({
        redirectTo: '/witaj'
      });
  }]);
