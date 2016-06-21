(function () {

  'use strict';

  angular.module('myApp')
    .controller('loginCtrl', loginCtrl);

  loginCtrl.$inject = ['$rootScope', '$scope', '$location', 'authService'];

  function loginCtrl($rootScope, $scope, $location, authService) {
    $scope.user = {};
    $scope.login = function() {
      authService.login($scope.user)
        .then(function(user) {
          authService.setUserInfo(user);
          //Then redirect user to dashboard after succesful login
          $location.path('/dashboard');
          /*$rootScope.currentUser = {
            name: authService.getUserName(),
            id: authService.getUserID()
          };*/
        })
        .catch(function(err) {
          // check status code, send appropriate message
          console.log(err);
        });
    };
    $scope.loginAsGuest = function() {
      var guestUser = {
        email: "tester1@test.com",
        password: "test"
      };

      authService.login(guestUser)
        .then(function(user) {
          authService.setUserInfo(user);
          //Then redirect user to dashboard after succesful login
          $location.path('/dashboard');
          /*$rootScope.currentUser = {
            name: authService.getUserName(),
            id: authService.getUserID()
          }*/
        })
        .catch(function(err) {
          // check status code, send appropriate message
          console.log(err);
        });
    };
  }

})();
