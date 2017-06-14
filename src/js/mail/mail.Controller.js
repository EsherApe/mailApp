/**
 * Created by PhpStorm.
 * User: Andrew Bazilskiy
 * Email: esher5580@gmail.com
 * Date: 05.06.2017
 */

mailApp.controller('mailController', function($scope, mailboxService, $stateParams) {
    $scope.mail = mailboxService.mails.get({id: $stateParams.id});
    $scope.user = mailboxService.users.get({id: $stateParams.id});
});
