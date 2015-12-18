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
					return $http.get('/api/units/'+unitId);
				} else {
					return $http.get('/api/units');
				}
				
			},
			create : function(unitData) {
				return $http.post('/api/units', todoData);
			},
			delete : function(unitId) {
				return $http.delete('/api/units/' + unitId);
			}
		}
	}]);