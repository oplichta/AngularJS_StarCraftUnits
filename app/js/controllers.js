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

starcraftControllers.controller('UnitListCtrlZerg', ['$scope', 'UnitsZerg', 'socket',
    function($scope, UnitsZerg, socket) {
      $scope.unitsZerg = [];
      socket.emit('initz');
      socket.on('initz', function ( dataZerg ) {
        $scope.unitsZerg= dataZerg;
      });
      $scope.orderProp = 'age';
  }]);

starcraftControllers.controller('UnitListCtrlTerran', ['$scope', 'UnitsTerran','socket',
    function($scope, UnitsTerran, socket) {
    $scope.unitsTerran = [];
    socket.emit('initt');
    socket.on('initt', function ( dataTerran ) {
      $scope.unitsTerran= dataTerran;
    });
      $scope.orderProp = 'age';
  }]);

starcraftControllers.controller('UnitListCtrlProtoss', ['$scope', 'UnitsProtoss','socket',
    function($scope, UnitsProtoss, socket) {

      $scope.unitsProtoss = [];
      socket.emit('initp');
      socket.on('initp', function ( dataProtoss ) {
        $scope.unitsProtoss= dataProtoss;
      });
      // $scope.unitsPro= UnitsProtoss.query();
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
