angular.module('bluemix-angular')

.controller('NotMainCtrl', ['$scope', 'api', function ($scope, api) {

  // instantiate the 'myData' variable with empty results;
  $scope.myData = [];

  api.get().then(function(data) {
    $scope.myData = data;
  });
}]);
