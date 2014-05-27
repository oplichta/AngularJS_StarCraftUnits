'use strict';

/* Services */

var starcraftServices = angular.module('starcraftServices', ['ngResource']);

starcraftServices.factory('Units', ['$resource',
  function($resource){
    return $resource('units/:unitId.json', {}, {
      query: {method:'GET', params:{unitId:'units'}, isArray:true}
    });
  }]);
