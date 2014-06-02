'use strict';

/* Controllers */

var starcraftControllers = angular.module('starcraftControllers', []);

starcraftControllers.controller('UnitListCtrl', ['$scope', 'Units', 'socket',
  function($scope, Units, socket) {
    $scope.a=[{
        "age": 0,
        "id": "zergling",
        "imageUrl": "img/starcraft/units/zerg/zergling.jpg",
        "name": "Zerddddgling",
        "snippet": "Its basic superfast unit from swarm."
    },
    {
        "age": 1,
        "id": "roach",
        "imageUrl": "img/starcraft/units/zerg/roach.jpg",
        "name": "Roach",
        "snippet": "Its superpowerful and awsame ;)"
    }];

    $scope.units = [];
    $scope.addUnit = function () {
        $scope.new=[{
            "age": 14,
            "id": "supermega",
            "imageUrl": "img/starcraft/units/zerg/roach.jpg",
            "name": "Supermega",
            "snippet": "Its superpowerful and awsame ;)"
        }];
        $scope.units=$scope.units.concat($scope.new);
        // socket.emit('init');
    };
    socket.emit('init');
    socket.on('init', function ( dataUnits ) {
      $scope.units = dataUnits;
      $scope.units=$scope.units.concat($scope.a);
      // $scope.deleteUnit=$scope.units.pop($scope.a.age===0);
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

      // // callback for ng-click 'editUser':
      // $scope.editUser = function (unitId) {
      //     $location.path('/user-detail/' + unitId);
      // };
      // // callback for ng-click 'deleteUser':
      // $scope.deleteUser = function (unitId) {
      //     UserFactory.delete({ id: unitId });
      //     $scope.users = UsersFactory.query();
      // };
      // callback for ng-click 'createUser':

      // $scope.users = UsersFactory.query();

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


starcraftControllers.controller('UnitDetailCtrl', ['$scope', '$routeParams', 'Units', '$location',
  function($scope, $routeParams, Units) {
    $scope.unit = Units.get({unitId: $routeParams.unitId}, function(unit) {
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

  // starcraftControllers.controller('UserDetailCtrl', ['$scope', '$routeParams', 'UserFactory', '$location',
  //     function ($scope, $routeParams, UserFactory, $location) {
  //
  //         // callback for ng-click 'updateUser':
  //         $scope.updateUser = function () {
  //             UserFactory.update($scope.user);
  //             $location.path('/user-list');
  //         };
  //
  //         // callback for ng-click 'cancel':
  //         $scope.cancel = function () {
  //             $location.path('/user-list');
  //         };
  //         $scope.user = UserFactory.show({id: $routeParams.unitId});
  //     }]);

starcraftControllers.controller('UserListCtrl', ['$scope', 'UsersFactory', 'UserFactory', '$location',
    function ($scope, UsersFactory, UserFactory, $location) {
        // callback for ng-click 'editUser':
        $scope.editUser = function (unitId) {
            $location.path('/user-detail/' + unitId);
        };
        // callback for ng-click 'deleteUser':
        $scope.deleteUser = function (unitId) {
            UserFactory.delete({ id: unitId });
            $scope.users = UsersFactory.query();
        };
        // callback for ng-click 'createUser':
        $scope.createNewUser = function () {
            $location.path('/user-creation');
        };
        $scope.users = UsersFactory.query();
    }]);

starcraftControllers.controller('UserCreationCtrl', ['$scope', 'UsersFactory', '$location',
    function ($scope, UsersFactory, $location) {
        // callback for ng-click 'createNewUser':
        $scope.createNewUser = function () {
            UsersFactory.create($scope.user);
            $location.path('/user-list');
        }
    }]);
