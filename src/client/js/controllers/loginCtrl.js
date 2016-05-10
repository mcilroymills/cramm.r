(function () {

  'use strict';

  angular.module('myApp')
    .controller('loginCtrl', loginCtrl);

  loginCtrl.$inject = ['$rootScope', '$scope', '$location', 'authService'];

  function loginCtrl($rootScope, $scope, $location, authService) {
    $scope.user = {};
    $scope.login = function() {
      console.log("user in loginCtrl:", $scope.user)
      authService.login($scope.user)
        .then(function(user) {
          console.log("user info in loginctrl", user);
          authService.setUserInfo(user);
          //Then redirect user to dashboard after succesful login
          $location.path('/dashboard');
          $rootScope.currentUser = {
            name: authService.getUserName(),
            id: authService.getUserID()
          }
        })
        .catch(function(err) {
          // check status code, send appropriate message
          console.log(err);
        });
    };
  }

})();