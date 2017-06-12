/**
 * Created by PhpStorm.
 * User: Andrew Bazilskiy
 * Email: esher5580@gmail.com
 * Date: 05.06.2017
 */

mailApp.service("mailboxService", function ($http, $resource) {
    return $resource('https://jsonplaceholder.typicode.com/posts/:id');
});
