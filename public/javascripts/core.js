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