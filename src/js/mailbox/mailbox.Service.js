/**
 * Created by PhpStorm.
 * User: Andrew Bazilskiy
 * Email: esher5580@gmail.com
 * Date: 05.06.2017
 */

angularApp.service("mailboxService", function ($http) {
    return {
        getMails: function () {
            return $http.get("https://jsonplaceholder.typicode.com/posts");
        }
    }
});
