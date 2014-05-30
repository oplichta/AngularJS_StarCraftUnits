'use strict';

/* Controllers */

var starcraftControllers = angular.module('starcraftControllers', []);

starcraftControllers.controller('UnitListCtrl', ['$scope', 'Units',
  function($scope, Units) {
    $scope.units= Units.query();
    $scope.orderProp = 'age';
  }]);
starcraftControllers.controller('UnitListCtrlZerg', ['$scope', 'UnitsZerg',
    function($scope, UnitsZerg) {
      $scope.unitsZerg= UnitsZerg.query();
      $scope.orderProp = 'age';
  }]);
starcraftControllers.controller('UnitListCtrlProtoss', ['$scope', 'UnitsProtoss',
    function($scope, UnitsProtoss) {
      $scope.unitsPro= UnitsProtoss.query();
      $scope.orderProp = 'age';
  }]);
starcraftControllers.controller('UnitListCtrlTerran', ['$scope', 'UnitsTerran',
    function($scope, UnitsTerran) {
      $scope.unitsTer= UnitsTerran.query();
      $scope.orderProp = 'age';
  }]);
  starcraftControllers.controller('AddUnitCtrl', ['$scope', 'Units',
      function($scope, Units) {
        $scope.unitsT= Units.query();

    }]);


starcraftControllers.controller('ContactController', function ($scope, ContactService) {
    $scope.contacts = ContactService.list();
    $scope.saveContact = function () {
        ContactService.save($scope.newcontact);
        $scope.newcontact = {};
    }
    $scope.delete = function (id) {
        ContactService.delete(id);
        if ($scope.newcontact.id == id) $scope.newcontact = {};
    }
    $scope.edit = function (id) {
        $scope.newcontact = angular.copy(ContactService.get(id));
    }
});

starcraftControllers.controller('UnitDetailCtrl', ['$scope', '$routeParams', 'Units',
  function($scope, $routeParams, Units) {
    $scope.unit = Units.get({unitId: $routeParams.unitId}, function(unit) {
      $scope.mainImageUrl = unit.images[0];
    });
    $scope.setImage = function(imageUrl) {
      $scope.mainImageUrl = imageUrl;
    }
  }]);
