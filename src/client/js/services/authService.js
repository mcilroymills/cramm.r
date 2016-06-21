(function () {

  'use strict';

  /**
  1. login
  2. logout
  3. register
  4. set user info into localstorage
  5. get user info from localstorage
  **/

  angular.module('myApp')
    .service('authService', authService);

  authService.$inject = ['$http', '$window'];

  var URL = '/users/';

  function authService($http, $window) {
    var user = {};
    return {
      login: function(user) {
        return $http.post(URL + 'login', user);
      },
      logout: function(user) {
        user = null;
        //Should we clear all of local storage???
        $window.localStorage.clear();
      },
      register: function(user) {
        return $http.post(URL + 'register', user);
      },
      setUserInfo: function(userData) {
        $window.localStorage.setItem('user', JSON.stringify(userData.data.username));
        $window.localStorage.setItem('token', JSON.stringify(userData.data.token));
        $window.localStorage.setItem('user_id', JSON.stringify(userData.data.user_id));
      },
      getUserName: function() {
        return $window.localStorage.getItem('user');
      },
      getUserToken: function() {
        var token = $window.localStorage.getItem('token');
        return token;
      },
      getUserID: function() {
        return $window.localStorage.getItem('user_id');
      }
    };
  }

})();