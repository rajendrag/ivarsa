var ivarsaApp = angular.module('ivarsa', ['ngRoute', 'unitControllers', 'unitService', 'angular.filter']);
ivarsaApp.config(['$routeProvider',
                   function($routeProvider) {
                     $routeProvider.
                       when('/api/units', {
                         templateUrl: 'angviews/unit-list.html',
                         controller: 'unitListCtrl'
                       }).
                       when('/api/units/:unitId', {
                         templateUrl: 'angviews/unit-details.html',
                         controller: 'unitDetailCtrl'
                       }).
                       otherwise({
                         redirectTo: '/api/units'
                       });
                   }]);

ivarsaApp.directive('showtab',
              function () {
                  return {
                      link: function (scope, element, attrs) {
                          element.click(function(e) {
                              e.preventDefault();
                              $(element).tab('show');
                          });
                      }
                  };
              });