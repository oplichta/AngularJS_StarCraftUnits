'use strict';

/* Services */

var starcraftServices = angular.module('starcraftServices', ['ngResource']);

starcraftServices.factory('Units', ['$resource',
  function($resource){
    return $resource('units/:unitId.json', {}, {
      query: {method:'GET', params:{unitId:'units'}, isArray:true}
    });
  }]);

starcraftServices.factory('UnitsProtoss', ['$resource',
  function($resource){
    return $resource('units/:unitId.json', {}, {
      query: {method:'GET', params:{unitId:'units-protoss'}, isArray:true}
    });
  }]);

starcraftServices.factory('UnitsZerg', ['$resource',
  function($resource){
    return $resource('units/:unitId.json', {}, {
      query: {method:'GET', params:{unitId:'units-zerg'}, isArray:true}
    });
  }]);

  starcraftServices.factory('UnitsTerran', ['$resource',
    function($resource){
      return $resource('units/:unitId.json', {}, {
        query: {method:'GET', params:{unitId:'units-terran'}, isArray:true}
      });
    }]);
