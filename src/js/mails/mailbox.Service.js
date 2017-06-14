/**
 * Created by PhpStorm.
 * User: Andrew Bazilskiy
 * Email: esher5580@gmail.com
 * Date: 05.06.2017
 */

mailApp.service("mailboxService", function ($http, $resource) {
    var mailboxService = this;
    mailboxService.mails = $resource('http://localhost:3000/messages/:id');
    mailboxService.users = $resource('http://localhost:3000/users/:id');
    return mailboxService;
});
