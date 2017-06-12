mailApp.controller('mailboxController', function($scope, mailboxService) {
    $scope.mails = mailboxService.query(function () {});
});