'use strict';

angular.module('Indiekit')
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/app/home/home.html',
        controller: 'HomeCtrl'
      });
  });
