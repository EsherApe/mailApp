/**
 * Created by PhpStorm.
 * User: Andrew Bazilskiy
 * Email: esher5580@gmail.com
 * Date: 05.06.2017
 */

var angularApp = angular.module('mailApp', [
    'ui.router',
    'ui.bootstrap'
]);

angularApp.config(function ($locationProvider, $stateProvider, $urlRouterProvider) {
    $locationProvider.html5Mode(true);

    $stateProvider
        .state('mailbox', {
            url: '/',
            templateUrl: '/views/mailbox/index.html',
            controller: 'mailboxController',
            title: 'mailbox'
        })
        .state('mail', {
            url: '/mail/{id:int}',
            templateUrl: '/views/mail/index.html',
            controller: 'mailController',
            title: 'mail'
        })
    ;

    $urlRouterProvider.otherwise('/error');
});