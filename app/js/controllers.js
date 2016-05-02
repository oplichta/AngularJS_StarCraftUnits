'use strict';

/* Controllers */

var starcraftControllers = angular.module('starcraftControllers', []);

starcraftControllers.controller('UnitListCtrl', ['$scope', 'Units', 'socket',
  function($scope, Units, socket) {
    $scope.units = [];
    socket.emit('init');
    socket.on('init', function ( dataUnits ) {
      $scope.units = dataUnits;
    });
    $scope.orderProp = 'age';
  }]);

starcraftControllers.controller('UnitDetailCtrl', ['$scope', '$routeParams', 'UnitsZerg', '$location',
  function($scope, $routeParams, UnitsZerg) {
    $scope.unit = UnitsZerg.get({unitId: $routeParams.unitId}, function(unit) {
      $scope.mainImageUrl = unit.images[0];
    });

    $scope.setImage = function(imageUrl) {
      $scope.mainImageUrl = imageUrl;
    }

    $scope.updateUnit = function () {
        Units.update($scope.unit);
        // $location.path('/user-list');
    };

    $scope.cancel = function () {
        $location.path('/unit-list');
    };
  }]);
