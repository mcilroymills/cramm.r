(function (){

  'use strict';

  angular.module('myApp')
    .config(appConfig);
    //.run(routeChange);

  appConfig.$inject = ['$routeProvider', '$httpProvider'];
  //routeChange.$inject = ['$rootScope', '$location', '$window'];

  function appConfig($routeProvider, $httpProvider) {
    $routeProvider
    .when('/dashboard', {
      templateUrl: '../partials/dashboard.html',
      controller: 'dashboardCtrl'
      //restricted: false,
      //preventLoggedIn: true
    })
    .otherwise({redirectTo: '/dashboard'});
    //$httpProvider.interceptors.push('authInterceptor');
  }
  /*
  //Changes the current route if necessary
  function routeChange($rootScope, $location, $window, authService) {
    $rootScope.$on('$routeChangeStart', function(event, next, current) {
      // if route is restricted and no token is present
      if(next.restricted && !$window.localStorage.getItem('token')) {
        $location.path('/login');
      }
      // if token and preventLoggingIn is true
      if(next.preventLoggedIn && $window.localStorage.getItem('token')) {
        $location.path('/members');
      }
    });
  }*/

})();