/**
 * Created by PhpStorm.
 * User: Andrew Bazilskiy
 * Email: esher5580@gmail.com
 * Date: 05.06.2017
 */

const mailApp = angular.module('mailApp', [
    'ngResource',
    'ui.router',
    'ui.bootstrap',
    'cgBusy',
    'ngStorage',
    //'ngMockE2E'
]);

mailApp.service('authRejector', function ($q, $injector) {
   this.responseError = (rejection) => {
        if(rejection.status === 401) {
            $injector.get('$state').go('login');
        }
        return $q.reject(rejection);
    }
});

mailApp.config(function ($httpProvider, $locationProvider, $stateProvider, $urlRouterProvider) {

    $httpProvider.interceptors.push(('authRejector'));

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
        });

    $urlRouterProvider.otherwise('/');
});

mailApp.run(function ($http) {
    // let template = /\/(views)\/\w+\/\w+(.html)/g;
    //
    // $httpBackend.whenGET(template).passThrough();
    // $httpBackend.whenGET('/views/mails/index.html').passThrough();
    // $httpBackend.whenGET('/views/widgets/sidebar.html').passThrough();
    // let userObj = [{name: 'John'}];
    // let mailsObj = [{title: 'Hello'}];
    //
    // $httpBackend.whenGET('/mails').respond(function () {
    //     console.log('asdasdasdasda');
    //     return [200, userObj];
    // })
    //
    // $httpBackend.whenGET('/users').respond(function () {
    //     console.log('asdasdasdasda');
    //     return [200, userObj];
    // })

});