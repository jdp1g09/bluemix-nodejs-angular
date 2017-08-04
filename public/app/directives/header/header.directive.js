angular.module('bluemix-angular')

.directive('myHeader', [function () {
  return {
    restrict: 'E',
    templateUrl: 'app/directives/header/header.html'
  };
}]);
