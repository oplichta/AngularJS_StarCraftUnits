'use strict';

/* Controllers */

var starcraftControllers = angular.module('starcraftControllers', []);

starcraftControllers.controller('UnitListCtrl', ['$scope', 'Units',
  function($scope, Units) {
    $scope.units= Units.query();
    $scope.orderProp = 'age';
  }]);

starcraftControllers.controller('UnitDetailCtrl', ['$scope', '$routeParams', 'Unit',
  function($scope, $routeParams, Unit) {
    $scope.unit = Unit.get({unitId: $routeParams.unitId}, function(unit) {
      $scope.mainImageUrl = unit.images[0];
    });

    $scope.setImage = function(imageUrl) {
      $scope.mainImageUrl = imageUrl;
    }
  }]);
