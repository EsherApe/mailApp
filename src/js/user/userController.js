/**
 * Created by PhpStorm.
 * User: Andrew Bazilskiy
 * Email: esher5580@gmail.com
 * Date: 14.06.2017
 */

mailApp.controller('userController', function($scope, mailboxService, $stateParams) {
    $scope.loader = mailboxService.users.get({id: $stateParams.id}, function (response) {
        $scope.user = response;
    });

    $scope.updateUser = function () {

        // mailboxService.users.update($scope.user, function () {
        //
        // });
    };

    $scope.cancelUpdate = function () {
        console.info('cancel');
    };
});