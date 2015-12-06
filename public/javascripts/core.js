var ivarsaApp = angular.module('ivarsa', ['ngRoute', 'unitControllers', 'unitService']);
ivarsaApp.config(['$routeProvider',
                   function($routeProvider) {
                     $routeProvider.
                       when('/units', {
                         templateUrl: 'angviews/unit-list.html',
                         controller: 'unitListCtrl'
                       }).
                       when('/units/:unitId', {
                         templateUrl: 'angviews/unit-details.html',
                         controller: 'unitDetailCtrl'
                       }).
                       otherwise({
                         redirectTo: '/units'
                       });
                   }]);