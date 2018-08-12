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

In order to have your emails sent automatically, you can add a cron call to the script so the emails will be sent every minute. Run the following command to edit the crontab for the _nginx_ user:
```shell
$ crontab -u nginx -e
```

Add the following line to the crontab:
```bash
* * * * * /var/www/passbolt/bin/cake EmailQueue.sender >> /var/log/passbolt.log
```

If the log file does not yet exist, you can create it with the following command:
```shell
$ touch /var/log/passbolt.log && chown nginx:nginx /var/log/passbolt.log
```
