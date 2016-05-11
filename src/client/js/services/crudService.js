(function () {

  'use strict';

  angular.module('myApp')
    .service('crudService', crudService);

  crudService.$inject = ['$http'];

  var URL = '/api/';

  function crudService($http) {

    return {
      getDecksByUser: function (user_id, token) {
        return $http.get(URL + 'decksbyuser/' + user_id, {
            headers: {
              'x-access-token': token
            }
          })
          .then(function(res){
            return res;
          })
          .catch(function(err){
            return err;
          });
      },
      getCardsByDeck: function (deck_id, token) {
        return $http.get(URL+'cardsbydeck/' + deck_id, {
            headers: {
              'x-access-token': token
            }
          })
          .then(function(res){
            return res;
          })
          .catch(function(err){
            return err;
          });
      }
    };

  }

})();