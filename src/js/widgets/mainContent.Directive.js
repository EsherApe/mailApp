/**
 * Created by PhpStorm.
 * User: Andrew Bazilskiy
 * Email: esher5580@gmail.com
 * Date: 05.06.2017
 */

mailApp.directive('mainContent', function() {
    let template = '/views/layouts/mailApp.html';

    return {
        restrict: 'A',
        replace: true,
        scope: {},
        templateUrl: template,
        controller: function() {

        }
    }
});
