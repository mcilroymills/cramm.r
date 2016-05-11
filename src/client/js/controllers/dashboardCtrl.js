(function () {

  'use strict';

  angular.module('myApp')
    .controller('dashboardCtrl', dashboardCtrl);

  dashboardCtrl.$inject = ['$rootScope', '$scope', '$location', 'dataService', 'authService'];

  function dashboardCtrl($rootScope, $scope, $location, dataService, authService) {

    $rootScope.user = {};
    $rootScope.loggedIn = true;
    $rootScope.user.username = JSON.parse(authService.getUserName());

    var memberId = authService.getUserID();
    var token = authService.getUserToken();


    dataService.getDecksByUser(memberId, token).then(function(decks){

      $scope.decks = [];

      var found = false;

      //This loop populates $scope.decks w/unique decks
      for (var i = 0; i < decks.data.data.length; i++) {
        for (var j = 0; j < $scope.decks.length; j++) {
          if (decks.data.data[i].deck_id === $scope.decks[j].deck_id) {
            found = true;
          }
        }
        if (!found) {
          $scope.decks.push(decks.data.data[i])
        }
        found = false;
      }
      console.log($scope.decks);

      $scope.showDeck = function (deck_id) {
        $rootScope.current_deckID = deck_id;
        $location.path('/show/'+ deck_id);
      }
    })


    };

})();