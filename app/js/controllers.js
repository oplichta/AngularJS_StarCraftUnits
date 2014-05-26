'use strict';

/* Controllers */


bestgameApp.controller('WitajCtrl', function ($scope) {
});

bestgameApp.controller('LudzieCtrl', ['$scope','zmienna',function ($scope,zmienna) {
	$scope.liczba = zmienna.wartosc;
	console.log("byla liczba: " + $scope.liczba);
    $scope.$watch('liczba', function(newValue, oldValue) {
     console.log("Zmiana " + oldValue + " na " + newValue);
     zmienna.wartosc = newValue;
  });	
	
}]);


bestgameApp.controller('ProtosiCtrl', function ($scope,$http) {
	$scope.pobrana = "czekam";
	$http.get('populacja').success(function(data) {
	  console.log(data);
	  $scope.pobrana = data.wartosc;
	});
});

bestgameApp.controller('ZergiCtrl', function ($scope) {
});


