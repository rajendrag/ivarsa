angular.module('unitService', [])

	// super simple service
	// each function returns a promise object
	.factory('Units', ['$http',function($http) {
		return {
			get : function() {
				return $http.get('/units');
			},
			create : function(todoData) {
				return $http.post('/api/todos', todoData);
			},
			delete : function(id) {
				return $http.delete('/api/todos/' + id);
			}
		}
	}]);