(function () {
  'use strict';

var app = angular.module('thinkster', [ 'thinkster.authentication', 'ngRoute']);

  app.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider){

    //$locationProvider.html5Mode(true);
    //$locationProvider.hashPrefix('!');

    $routeProvider.when('/register', {
      controller: 'RegisterController',
      controllerAs: 'vm',
      templateUrl: '/static/templates/authentication/register.html'
    }).when('/login', {
      controller: 'LoginController',
      controllerAs: 'vm',
      templateUrl: '/static/templates/authentication/login.html'
    }).otherwise('/');

  }]);

  app.run(['$http', function($http){
      $http.defaults.xsrfHeaderName = 'X-CSRFToken';
      $http.defaults.xsrfCookieName = 'csrftoken';
    }]);


})();