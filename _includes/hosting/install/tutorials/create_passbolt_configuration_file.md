Everything is located in one configuration file called `config/passbolt.php`.

```shell
$ cp config/passbolt.default.php config/passbolt.php
$ {{ include.editor_name }} config/passbolt.php
```

You will need to set at least the following:
- Application full base url
- Database configuration
- Server OpenPGP key fingerprint (you noted it down before)

Ignore the email configuration for now. We will take care of it later.

For now, we will also deactivate the force_ssl parameter for the sake of having a functional passbolt
quickly. We'll activate ssl later.

The sections of your configuration file should look similar to this:

```
[
    'App' => [
        'fullBaseUrl' => 'http://passbolt.dev',
    ],

    // Database configuration.
    'Datasources' => [
        'default' => [
            'host' => 'localhost',
            'username' => 'passbolt',
            'password' => 'your_password',
            'database' => 'passbolt',
        ],
    ],
    'passbolt' => [
        'ssl' => [
            'force' => false,
        ],
        'gpg' => [ 
            // Main server key.
            'serverKey' => [
                // Server private key fingerprint.
                'fingerprint' => '1C765F5273EC9AF56300BC6F6C76DA6B9F23C8BB',
                //'public' => CONFIG . 'gpg' . DS . 'serverkey.asc',
                //'private' => CONFIG . 'gpg' . DS . 'serverkey_private.asc',
            ],
        ],
    ],
]
```

For now, do not forget to add `ssl.force => false` as seen above, or passbolt will redirect all your connections to a https socket, which will not work since it is not yet configured.
```
'ssl' => [
    'force' => false,
],
```

You can also set your configuration using environment variables.
Check `config/default.php` to get the names of the environment variables.