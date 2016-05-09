(function () {

  'use strict';

  angular.module('myApp')
    .controller('dashboardCtrl', dashboardCtrl);

  dashboardCtrl.$inject = ['$rootScope', '$scope', 'dataService'];

  function dashboardCtrl($rootScope, $scope, dataService) {

    var memberId = 3;

    dataService.getDecksByUser(memberId).then(function(decks){

      $scope.decks = [];

      var found = false;

      //This loop populates $scope.decks w/unique decks
      for (var i = 0; i < decks.data.length; i++) {
        for (var j = 0; j < $scope.decks.length; j++) {
          if (decks.data[i].deck_id === $scope.decks[j].deck_id) {
            found = true;
          }
        }
        if (!found) {
          $scope.decks.push(decks.data[i])
        }
        found = false;
      }
    })

    };

})();