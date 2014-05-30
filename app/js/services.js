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

starcraftServices.service('ContactService', function () {
    var i;
    var uid = 1;
    var contacts = [{
        id: 0,
        'name': 'Viral',
        'email': 'hello@gmail.com',
        'phone': '123-2343-44'
    }];
    this.save = function (contact) {
        if (contact.id == null) {
            contact.id = uid++;
            contacts.push(contact);
        } else {
            for (i in contacts) {
                if (contacts[i].id == contact.id) {
                    contacts[i] = contact;
                }
            }
        }
    }
    this.get = function (id) {
        for (i in contacts) {
            if (contacts[i].id == id) {
                return contacts[i];
            }
        }
    }
    this.delete = function (id) {
        for (i in contacts) {
            if (contacts[i].id == id) {
                contacts.splice(i, 1);
            }
        }
    }
    this.list = function () {
        return contacts;
    }
});
