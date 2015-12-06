var unitControllers = angular.module('unitControllers', []);
	// inject the Unit service factory into our controller
	unitControllers.controller('unitListCtrl', ['$scope', '$location', 'unitService', '$routeParams', function($scope, $location, unitService, $routeParams) {
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

		$scope.viewDetails = function(unit) {
		   //$location.path = "#/units/"+unit.iq_unit_mstr_id;
		    window.location = "#/units/"+unit.iq_unit_mstr_id;
		}

	}]);

	unitControllers.controller('unitDetailCtrl', ['$scope', '$routeParams', function($scope, $routeParams){
	    $scope.unitId = $routeParams.unitId;
	}]);

