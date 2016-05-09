(function () {

  'use strict';

  angular.module('myApp')
    .service('crudService', crudService);

  crudService.$inject = ['$http'];

  var URL = '/api/';

  function crudService($http) {

    return {
      getDecksByUser: function (user_id) {
        return $http.get(URL+'decksbyuser/' + user_id)
          .then(function(res){
            return res;
          })
          .catch(function(err){
            return err;
          });
      },
      getCardsByDeck: function (deck_id) {
        return $http.get(URL+'cardsbydeck/' + deck_id)
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