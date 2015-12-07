angular.module('unitService', [])

	// super simple service
	// each function returns a promise object
	.factory('unitService', ['$http',function($http) {
		return {
			get : function() {
				return $http.get('/units');
			},
			getUnit : function(unitId) {
				return $http.get('/units/'+unitId);
			},
			create : function(unitData) {
				return $http.post('/units', todoData);
			},
			delete : function(unitId) {
				return $http.delete('/units/' + unitId);
			}
		}
	}]);