var unitControllers = angular.module('unitControllers', []);
	// inject the Unit service factory into our controller
	unitControllers.controller('unitListCtrl', ['$scope', '$location', '$timeout', 'unitService', '$routeParams', function($scope, $location, $timeout, unitService, $routeParams) {
		$scope.formData = {};
		$scope.loading = true;

		unitService.get()
			.success(function(data) {
				$scope.units = data;
				$scope.loading = false;
			});

		$scope.viewDetails = function(unit) {
		   $location.path("/units/"+unit.iq_unit_mstr_id);
		   if(!$scope.$$phase) {
		   	$scope.$apply();
		   }
		}

	}]);

	unitControllers.controller('unitDetailCtrl', ['$scope', '$location', '$routeParams', 'unitService', function($scope,$location, $routeParams, unitService){
	    $scope.unitId = $routeParams.unitId;
	    unitService.get($routeParams.unitId).success(function(data){
	    	if(data && data[0]) {
	    		$scope.unit = data[0];	
	    	} else {
	    		$scope.errorMessage = "Unit not found";
	    	}
	        
	    });

	}]);

