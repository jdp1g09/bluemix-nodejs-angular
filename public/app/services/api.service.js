angular.module('bluemix-angular')

.factory('api', ['$q', '$http', function ($q, $http) {

  function getStuff() {
    // $q is an Angular Promise library - handles asynchronous (http) calls
    return $q(function (resolve, reject) {
      // go and get data from the server's API
      $http({
        method: 'GET',
        url: '/api/endpoint'
      }).then(function(response) {
        resolve(response.data);
      });
    });
  }

  return {
    get: getStuff
  };
}]);
