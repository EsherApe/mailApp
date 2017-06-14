/**
 * Created by PhpStorm.
 * User: Andrew Bazilskiy
 * Email: esher5580@gmail.com
 * Date: 14.06.2017
 */

mailApp.controller('usersController', function ($scope, mailboxService) {
    $scope.loader = mailboxService.users.query(function (response) {
        $scope.users = response;
    })
});