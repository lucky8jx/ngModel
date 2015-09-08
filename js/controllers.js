'use strict';

var helloWorldControllers = 
	angular.module('helloWorldControllers', []);


	
helloWorldControllers.controller('MainCtrl',
	function MainCtrl($scope) {
		
		console.log($scope);
		// console.log();
		$scope.flag = {};
		var flag = $scope.flag;
		flag.show = false;
		flag.hide = true;

		$scope.show = function () {
			flag.show = !flag.show;
		};
		$scope.hide = function () {
			flag.hide = !flag.hide;
		};
		
	});

helloWorldControllers.controller('ShowCtrl',
	['$scope', '$location', '$http',
	function ShowCtrl($scope, $location, $http) {
		$scope.message = "Show The World";
	}]);