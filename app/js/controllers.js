'use strict';

/* Controllers */

var starcraftControllers = angular.module('starcraftControllers', []);

starcraftControllers.controller('UnitListCtrl', ['$scope', 'Units',
  function($scope, Units) {
    $scope.units= Units.query();
    $scope.orderProp = 'age';
  }]);
starcraftControllers.controller('UnitListCtrlZerg', ['$scope', 'Units',
    function($scope, Units) {
      $scope.units= Units.query();
      $scope.orderProp = 'age';
  }]);
starcraftControllers.controller('UnitListCtrlProtoss', ['$scope', 'Units',
    function($scope, Units) {
      $scope.units= Units.query();
      $scope.orderProp = 'age';
  }]);
starcraftControllers.controller('UnitListCtrlTerran', ['$scope', 'Units',
    function($scope, Units) {
      $scope.units= Units.query();
      $scope.orderProp = 'age';
  }]);


starcraftControllers.controller('UnitDetailCtrl', ['$scope', '$routeParams', 'Units',
  function($scope, $routeParams, Units) {
    $scope.unit = Units.get({unitId: $routeParams.unitId}, function(unit) {
      $scope.mainImageUrl = unit.images[0];
    });
    $scope.setImage = function(imageUrl) {
      $scope.mainImageUrl = imageUrl;
    }
  }]);
