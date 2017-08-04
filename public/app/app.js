var app = angular.module('bluemix-angular', [
    'ui.router'
]);

app.config(function($urlRouterProvider, $stateProvider, $locationProvider) {
    $locationProvider.html5Mode({
        enabled: true
    });

    $urlRouterProvider
        .otherwise('');

    $stateProvider
        .state('main', {
            url: '/',
            templateUrl: 'app/routes/main/main.html',
            controller: 'MainCtrl'
        });

    $stateProvider
        .state('anotherstate', {
            url: '/otherroute',
            templateUrl: 'app/routes/notmain/notmain.html',
            controller: 'NotMainCtrl'
        });
});
