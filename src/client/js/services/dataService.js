(function () {

  'use strict';

  angular.module('myApp')
    .service('dataService', dataService);

  dataService.$inject = ['$rootScope', 'crudService'];

  function dataService($rootScope, crudService) {

    return {
      getDecksByUser: function(user_id, token) {
        return crudService.getDecksByUser(user_id, token)
          .then(function(decks) {
            return decks;
          });
      },
      getCardsByDeck: function(deck_id, token) {
        return crudService.getCardsByDeck(deck_id, token)
          .then(function(cards) {
            return cards;
          });
      }
    };
  }

})();