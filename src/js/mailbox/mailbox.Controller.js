mailApp.controller('mailboxController', function ($scope, mailboxService, $log) {
    $scope.loader = mailboxService.query(function (response) {
        $scope.mails = response;
        $scope.totalItems = $scope.mails.length;
        $scope.currentPage = 1;

        $scope.pageSize = 15;
    });
});