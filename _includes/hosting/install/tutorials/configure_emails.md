For passbolt to be able to send emails, you must first configure properly the “EmailTransport” and "Email" section in the 
`config/passbolt.php` file to match your provider smtp details.
```
// Email configuration.
    'EmailTransport' => [
        'default' => [
            'host' => 'localhost',
            'port' => 25,
            'username' => 'user',
            'password' => 'password',
            // Is this a secure connection? true if yes, null if no.
            'tls' => null,
            //'timeout' => 30,
            //'client' => null,
            //'url' => null,
        ],
    ],
    'Email' => [
        'default' => [
            // Defines the default name and email of the sender of the emails.
            'from' => ['passbolt@your_organization.com' => 'Passbolt'],
            //'charset' => 'utf-8',
            //'headerCharset' => 'utf-8',
        ],
    ],
```

To send a test email and debug your smtp settings, you can use the following command:
```shell
$ ./bin/cake passbolt send_test_email
```

When an email is sent, it is first placed in a queue that needs to be processed by the following shell.
```shell
$ ./bin/cake EmailQueue.sender
```

In order to have your emails sent automatically, you can add a cron call to the script so the emails will be sent every minute. 
Add the following line to you crontab:
```bash
 * * * * * su -c "/var/www/passbolt/bin/cake EmailQueue.sender >> /var/log/passbolt.log" -s /bin/bash {{ include.webserver_user }}
```