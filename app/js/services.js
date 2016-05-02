'use strict';
var starcraftServices = angular.module('starcraftServices', ['ngResource']);

starcraftServices.factory('socket',['$rootScope', function ($rootScope) {
  var socket = io.connect();
  return {
    on: function (eventName, callback) {
      socket.on(eventName, function () {
        var args = arguments;
        $rootScope.$apply(function () {
          callback.apply(socket, args);
        });
      });
    },
    emit: function (eventName, dataUnits,callback) {
      socket.emit(eventName, dataUnits, function () {
        var args = arguments;
        $rootScope.$apply(function () {
          if (callback) {
            callback.apply(socket, args);
          }
        });
      })
    }
  };
}]);

starcraftServices.factory('Units', ['$resource',
  function($resource){
    return $resource('units/units.json', {}, {
      // query: {method:'GET', params:{unitId:'units'}, isArray:true}
      query: { method: 'GET', isArray: true },
      create: { method: 'POST' }
    });
  }]);

// starcraftServices.factory('UnitsZerg', ['$resource',
//   function($resource){
//     return $resource('units/:unitId.json', {}, {
//       query: {method:'GET', params:{unitId:'units-zerg'}, isArray:true}
//     });
//   }]);
