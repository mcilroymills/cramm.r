(function (){

  'use strict';

  angular.module('myApp')
    .config(appConfig)
    .run(routeChange);

  appConfig.$inject = ['$routeProvider', '$httpProvider'];
  routeChange.$inject = ['$rootScope', '$location', '$window', 'authService'];

  function appConfig($routeProvider, $httpProvider) {
    $routeProvider
    .when('/register', {
      templateUrl: '../partials/register.html',
      controller: 'registerCtrl',
      restricted: false,
      preventLoggedIn: true
    })
    .when('/login', {
      templateUrl: '../partials/login.html',
      controller: 'loginCtrl',
      restricted: false,
      preventLoggedIn: true
    })
    .when('/dashboard', {
      templateUrl: '../partials/dashboard.html',
      controller: 'dashboardCtrl',
      restricted: true,
      preventLoggedIn: false
    })
    .when('/show/:id', {
      templateUrl: '../partials/show.html',
      controller: 'showCtrl',
      restricted: true,
      preventLoggedIn: false
    })
    .when('/play/:deckid/:cardid', {
      templateUrl: '../partials/play.html',
      controller: 'playCtrl',
      restricted: true,
      preventLoggedIn: false
    })
    .when('/logout', {
      restricted: false,
      preventLoggedIn: false,
      resolve: {
        test: function(authService, $rootScope, $location) {
          authService.logout();
          $rootScope.currentUser = authService.getUserName();
          $location.path('/login');
        }
      }
    })
    .otherwise({redirectTo: '/register'});
    $httpProvider.interceptors.push('authInterceptor');
  }

  //Changes the current route if necessary
  function routeChange($rootScope, $location, $window, authService) {
    $rootScope.$on('$routeChangeStart', function(event, next, current) {
      // if route is restricted and no token is present
      if(next.restricted && !$window.localStorage.getItem('token')) {
        $location.path('/login');
      }
      // if token and preventLoggingIn is true
      if(next.preventLoggedIn && $window.localStorage.getItem('token')) {
        $location.path('/dashboard');
      }
    });
  }

})();