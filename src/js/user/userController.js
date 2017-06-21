/**
 * Created by PhpStorm.
 * User: Andrew Bazilskiy
 * Email: esher5580@gmail.com
 * Date: 14.06.2017
 */

mailApp.controller('userController', function($scope, mailboxService, $stateParams, $localStorage, $http) {
    $scope.loader = mailboxService.users.get({id: $stateParams.id}, function (response) {
        $scope.user = response;
    });

    $scope.updateUser = function () {

    };

    $scope.cancelUpdate = function () {

    };
});