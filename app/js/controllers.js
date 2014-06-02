'use strict';

/* Controllers */

var starcraftControllers = angular.module('starcraftControllers', []);

starcraftControllers.controller('UnitListCtrl', ['$scope', 'Units', 'socket',
  function($scope, Units, socket) {
    // $scope.a=Units.query();
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
    // // Units.query();

    $scope.units = [];
    socket.emit('init');
    socket.on('init', function ( data ) {
      $scope.units = data;
      $scope.units=$scope.units.concat($scope.a);
      $scope.deleteUnit=$scope.units.pop($scope.a.age===0);
    })
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

starcraftControllers.controller('UnitDetailCtrl', ['$scope', '$routeParams', 'Units',
  function($scope, $routeParams, Units) {
    $scope.unit = Units.get({unitId: $routeParams.unitId}, function(unit) {
      $scope.mainImageUrl = unit.images[0];
    });
    $scope.setImage = function(imageUrl) {
      $scope.mainImageUrl = imageUrl;
    }
  }]);

  starcraftControllers.controller('UserDetailCtrl', ['$scope', '$routeParams', 'UserFactory', '$location',
      function ($scope, $routeParams, UserFactory, $location) {

          // callback for ng-click 'updateUser':
          $scope.updateUser = function () {
              UserFactory.update($scope.user);
              $location.path('/user-list');
          };

          // callback for ng-click 'cancel':
          $scope.cancel = function () {
              $location.path('/user-list');
          };
          $scope.user = UserFactory.show({id: $routeParams.unitId});
      }]);

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
