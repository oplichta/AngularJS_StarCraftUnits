'use strict';

/* Directives */
(function(){
    var app = angular.module('starcraftDirectives', []);

    app.directive("unitsTabs", function() {
      return {
        restrict: "E",
        templateUrl: "partials/unit-tabs.html",
        controller: function() {
          this.tab = 1;

          this.isSet = function(checkTab) {
            return this.tab === checkTab;
          };

          this.setTab = function(activeTab) {
            this.tab = activeTab;
          };
        },
        controllerAs: "tab"
      }
    });

    app.directive("unitListAll", function() {
      return {
        restrict: "E",
        templateUrl: "partials/unit-list-all.html"
      }
    });

    app.directive("unitListZerg", function() {
      return {
        restrict: "E",
        templateUrl: "partials/unit-list-zerg.html"
      }
    });

    app.directive("unitListProtoss", function() {
      return {
        restrict: "E",
        templateUrl: "partials/unit-list-protoss.html"
      }
    });

    app.directive("unitListTerran", function() {
      return {
        restrict: "E",
        templateUrl: "partials/unit-list-terran.html"
      }
    });

    app.directive("testDirective", function() {
      return {
        restrict: "E",
        templateUrl: "partials/test-directive.html"
      }
    });
})();
