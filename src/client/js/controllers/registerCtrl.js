(function () {

  'use strict';

  angular.module('myApp')
    .controller('registerCtrl', registerCtrl);

  registerCtrl.$inject = ['$rootScope', '$scope', '$location', 'authService'];

  function registerCtrl($rootScope, $scope, $location, authService) {
    $scope.user = {};
    $scope.register = function() {
      authService.register($scope.user)
        .then(function(user) {
          authService.setUserInfo(user);
          $location.path('/');
          $rootScope.currentUser = authService.getUserInfo();
        })
        .catch(function(err) {
          // check status code, send appropriate message
          console.log(err);
        });
    };
  }

})();