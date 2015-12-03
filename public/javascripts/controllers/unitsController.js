angular.module('unitController', [])

	// inject the Unit service factory into our controller
	.controller('unitMainController', ['$scope','$http','Units', function($scope, $http, Units) {
		$scope.formData = {};
		$scope.loading = true;

		// GET =====================================================================
		// when landing on the page, get all todos and show them
		// use the service to get all the todos
		Units.get()
			.success(function(data) {
				$scope.units = data;
				$scope.loading = false;
			});


	}]);