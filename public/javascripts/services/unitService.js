angular.module('unitService', [])

	// super simple service
	// each function returns a promise object
	.factory('unitService', ['$http',function($http) {
		return {
		    /**
		    * Fetches either one unit or all the units in case unitId is not passed or undefined
		    */
			get : function(unitId) {
				if(unitId) {
					return $http.get('/units/'+unitId);	
				} else {
					return $http.get('/units');
				}
				
			},
			create : function(unitData) {
				return $http.post('/units', todoData);
			},
			delete : function(unitId) {
				return $http.delete('/units/' + unitId);
			}
		}
	}]);