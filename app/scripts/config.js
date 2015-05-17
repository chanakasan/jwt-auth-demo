angular.module('jwtAppApp').config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider
    .otherwise('/');

    $stateProvider
    .state('home', {
        'url': '/',
        'templateUrl': '/views/main.html',
    })
    .state('register', {
        'url': '/register',
        'templateUrl': '/views/register.html',
    });
});
