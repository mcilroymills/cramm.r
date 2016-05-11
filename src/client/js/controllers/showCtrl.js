(function () {

  'use strict';

  angular.module('myApp')
    .controller('showCtrl', showCtrl);

  showCtrl.$inject = ['$rootScope', '$scope', '$location', '$routeParams', 'dataService', 'authService'];

  function showCtrl($rootScope, $scope, $location, $routeParams, dataService, authService) {

    $rootScope.user = {};
    $rootScope.loggedIn = true;
    $rootScope.user.username = JSON.parse(authService.getUserName());

    var memberId = authService.getUserID();
    var token = authService.getUserToken();

    dataService.getCardsByDeck($routeParams.id, token).then(function(cards){
      console.log(cards);
      $rootScope.current_deck = cards.data.data;
    });

    $scope.startStudying = function () {
      $location.path('/play/'+ $routeParams.id + '/1/');
    }


    };

})();