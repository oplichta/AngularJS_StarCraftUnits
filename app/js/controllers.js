'use strict';

/* Controllers */

var starcraftControllers = angular.module('starcraftControllers', []);

starcraftControllers.controller('UnitListCtrl', ['$scope', 'Unit',
  function($scope, Unit) {
    $scope.Unit= Unit.query();
    $scope.orderProp = 'age';
  }]);

starcraftControllers.controller('UnitDetailCtrl', ['$scope', '$routeParams', 'Phone',
  function($scope, $routeParams, Phone) {
    $scope.unit = Unit.get({unitId: $routeParams.unitId}, function(unit) {
      $scope.mainImageUrl = Unit.images[0];
    });

    $scope.setImage = function(imageUrl) {
      $scope.mainImageUrl = imageUrl;
    }
  }]);
