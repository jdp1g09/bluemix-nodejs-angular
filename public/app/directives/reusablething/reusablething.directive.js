angular.module('bluemix-angular')

.directive('reusableThing', [function () {
  return {
    restrict: 'E',
    scope: {
      myVariable: '='
    },
    link: function (scope, element, attrs) {

    }
  };
}]);
