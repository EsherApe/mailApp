/**
 * Created by PhpStorm.
 * User: Andrew Bazilskiy
 * Email: esher5580@gmail.com
 * Date: 05.06.2017
 */

mailApp.controller('mailController', function($scope, mailboxService, $state, $stateParams) {
    $scope.loader = mailboxService.mails.get({id: $stateParams.id}, (response) => {
        $scope.mail = response;
        $scope.user = mailboxService.users.get({id: $scope.mail.userId});
    });
});
