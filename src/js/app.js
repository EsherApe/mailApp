/**
 * Created by PhpStorm.
 * User: Andrew Bazilskiy
 * Email: esher5580@gmail.com
 * Date: 05.06.2017
 */

var mailApp = angular.module('mailApp', [
    'ngResource',
    'ui.router',
    'ui.bootstrap',
    'cgBusy',
    'ngStorage'
]);

mailApp.config(function ($locationProvider, $stateProvider, $urlRouterProvider) {
    $locationProvider.html5Mode(true);

    $stateProvider
        .state('mails', {
            url: '/',
            templateUrl: '/views/mails/index.html',
            controller: 'mailsController',
            title: 'mails'
        })
        .state('mail', {
            url: '/mail/:id',
            templateUrl: '/views/mail/index.html',
            controller: 'mailController',
            title: 'mail'
        })
        .state('users', {
            url: '/users',
            templateUrl: '/views/users/index.html',
            controller: 'usersController',
            title: 'users'
        })
        .state('user', {
            url: '/users/:id',
            templateUrl: '/views/user/index.html',
            controller: 'userController',
            title: 'user'
        })
    ;

    $urlRouterProvider.otherwise('/error');
});