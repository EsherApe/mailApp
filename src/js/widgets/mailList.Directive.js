/**
 * Created by PhpStorm.
 * User: Andrew Bazilskiy
 * Email: esher5580@gmail.com
 * Date: 05.06.2017
 */

angularApp.directive("mailList", function () {
    return {
        restrict: "E",
        replace: true,
        templateUrl: "/views/widgets/mailList.html",
        controller: function ($scope) {

        }
    }
});
