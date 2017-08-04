angular.module('bluemix-angular')

.controller('MainCtrl', ['$scope', function ($scope) {

  // if using $scope. then it can be accessed in any HTML associated
  // with this controller (look in app.js to check the routes that are
  // defined that create the link)
  $scope.controllerVariable = 'Hello World;';

  // if using 'var' - this is only available inside this file
  var localVariable = '';
}]);
