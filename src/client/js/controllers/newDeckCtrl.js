(function () {

  'use strict';

  angular.module('myApp')
    .controller('newDeckCtrl', newDeckCtrl);

  newDeckCtrl.$inject = ['$rootScope', '$scope', '$location', '$routeParams', 'dataService', 'authService', 'crudService'];

  function newDeckCtrl($rootScope, $scope, $location, $routeParams, dataService, authService, crudService) {

    $rootScope.user = {};
    $rootScope.loggedIn = true;
    $rootScope.user.username = JSON.parse(authService.getUserName());

    //current card initializes to first in cards array
    $scope.currentCard = 0;
    $scope.card = {};

    $scope.deck = {};
    $scope.cards = [];

    var memberId = authService.getUserID();
    var token = authService.getUserToken();


    $scope.newCard = function () {
      var new_card = new Card($scope.card.question, $scope.card.answer, $scope.card.points);
      $scope.cards.push(new_card);
      //Reset scope card
      $scope.card = {};
      $scope.currentCard++;
    };

    $scope.submitDeck = function () {
      var new_card = new Card($scope.card.question, $scope.card.answer, $scope.card.points);
      //Push final card into cards array
      $scope.cards.push(new_card);
      $scope.deck.user_id = memberId;

      crudService.createNewDeck($scope.deck, $scope.cards, token)
      .then(function(ids) {
        $location.path('/dashboard');
      })
      .catch(function(err) {
        // check status code, send appropriate message
        console.log(err);
      });
    };
  }

})();

function Card (question, answer, points) {
  this.question = question;
  this.answer = answer;
  this.points = points;
}