angular.module('unitController', [])

	// inject the Unit service factory into our controller
	.controller('unitController', ['$scope', 'unitService', function($scope, unitService) {
		$scope.formData = {};
		$scope.loading = true;

		// GET =====================================================================
		// when landing on the page, get all todos and show them
		// use the service to get all the todos
		unitService.get()
			.success(function(data) {
				$scope.units = data;
				$scope.loading = false;
			});


	}]);