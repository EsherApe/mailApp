/**
 * Created by PhpStorm.
 * User: Andrew Bazilskiy
 * Email: esher5580@gmail.com
 * Date: 05.06.2017
 */

angularApp.directive('mainContent', function() {
    var template = '/views/layouts/angularApp.html';

    return {
        restrict: 'A',
        replace: true,
        templateUrl: template,
        controller: function() {}
    }
});
