angularApp.controller('mailboxController', function($scope, mailboxService) {
    mailboxService.getMails().then(function (response) {
        $scope.mails = response.data;
    });
});