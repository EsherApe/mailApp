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

        $http.post('http://posttestserver.com/post.php?dir=newFolder', {
            headers : {
                'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
            }
        });
    };

    $scope.cancelUpdate = function () {

    };
});