/**
 * Created by PhpStorm.
 * User: Andrew Bazilskiy
 * Email: esher5580@gmail.com
 * Date: 05.06.2017
 */

mailApp.directive('sidebar', function () {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: '/views/widgets/sidebar.html',
        controller: function ($scope) {
            $scope.isNavCollapsed = true;
            $scope.isCollapsed = false;
            $scope.isCollapsedHorizontal = false;
        }
    }
});
