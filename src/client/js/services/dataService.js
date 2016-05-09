(function () {

  'use strict';

  angular.module('myApp')
    .service('dataService', dataService);

  dataService.$inject = ['$rootScope', 'crudService'];

  function dataService($rootScope, crudService) {

    return {
      getDecksByUser: function(user_id) {
        return crudService.getDecksByUser(user_id)
          .then(function(decks) {
            return decks;
          });
      },
      getCardsByDeck: function(deck_id) {
        return crudService.getCardsByDeck(deck_id)
          .then(function(cards) {
            return cards;
          });
      }
    };
  }

})();