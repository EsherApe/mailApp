mailApp.controller('mailsController', function ($scope, mailboxService, $timeout) {
    $scope.loader = mailboxService.mails.query(function (response) {
        $scope.mails = response;

        mailboxService.users.query(function (response) {
            $scope.users = response;

            $scope.getUser = function () {
                for(var i = 0; i < $scope.mails.length; i++) {
                    for(var j = 0; j < $scope.users.length; j++) {
                        if ($scope.mails[i].userId === $scope.users[j].id) {
                            $scope.mails[i].userName = $scope.users[j].name;
                            $scope.mails[i].userEmail = $scope.users[j].email;
                        }
                    }
                }
            };

            $scope.getUser();
        });

        $scope.totalItems = $scope.mails.length;
        $scope.currentPage = 1;
        $scope.pageSize = 10;
    });
});