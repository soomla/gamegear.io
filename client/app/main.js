'use strict';

// Declare app level module which depends on views, and components
angular.module('Indiekit', [
  'ngRoute'
])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/'});
}]);

console.log('Welcome to Yeogurt!');
