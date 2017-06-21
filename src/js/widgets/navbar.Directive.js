/**
 * Created by PhpStorm.
 * User: Andrew Bazilskiy
 * Email: esher5580@gmail.com
 * Date: 05.06.2017
 */

mailApp.directive('navbar', function () {
    return {
        restrict: "E",
        replace: true,
        scope: {
            name: '@',
            surname: '='
        },
        templateUrl: "/views/widgets/navbar.html",
        controllerAs: 'navbar',
        bindToController: true,
        controller: function ($scope) {
            this.num = 5;
        },
        link: function (scope, element, attrs, ctrl) {
            console.log(ctrl.num)
        }
    } 
});