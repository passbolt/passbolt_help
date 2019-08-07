Following there is a list of the environment variables supported in passbolt both PRO and CE editions with their default values.

| Variable name                            | Description                                                               | Default value                                      |
| ---------------------------------------- | ------------------------------------------------------------------------- | -------------------------------------------------- |
| APP_BASE                                 | it allows people to specify the base subdir the application is running in | null                                               |
| APP_ENCODING                             | Set text encoding                                                         | 'UTF-8'                                            |
| APP_DEFAULT_LOCALE                       | Set default locale                                                        | 'en_US'                                            |
| APP_FULL_BASE_URL                        | Passbolt base url                                                         | 'false'                                            |
| CACHE_DEFAULT_URL                        | CakePHP default cache DSN string                                          | null                                               |
| CACHE_CAKECORE_URL                       | CakePHP core cache DSN string                                             | null                                               |
| CACHE_CAKEMODEL_URL                      | CakePHP model cache DSN string                                            | null                                               |
| DATASOURCES_DEFAULT_DATABASE             | Database name                                                             | ''                                                 |
| DATASOURCES_DEFAULT_HOST                 | Database hostname                                                         | 'localhost'                                        |
| DATASOURCES_DEFAULT_PORT                 | Database port                                                             | 3306                                               |
| DATASOURCES_DEFAULT_PASSWORD             | Database password                                                         | ''                                                 |
| DATASOURCES_DEFAULT_SSL_KEY              | Database SSL Key                                                          | ''                                                 |
| DATASOURCES_DEFAULT_SSL_CERT             | Database SSL Cert                                                         | ''                                                 |
| DATASOURCES_DEFAULT_SSL_CA               | Database SSL CA                                                           | ''                                                 |
| DATASOURCES_DEFAULT_USERNAME             | Database username                                                         | ''                                                 |
| DATASOURCES_TEST_DATABASE                | Database name                                                             | 'my_app'                                           |
| DATASOURCES_TEST_HOST                    | Database hostname                                                         | 'localhost'                                        |
| DATASOURCES_TEST_PORT                    | Database port                                                             | 3306                                               |
| DATASOURCES_TEST_PASSWORD                | Database password                                                         | 'secret'                                           |
| DATASOURCES_TEST_SSL_KEY                 | Database SSL Key                                                          | ''                                                 |
| DATASOURCES_TEST_SSL_CERT                | Database SSL Cert                                                         | ''                                                 |
| DATASOURCES_TEST_SSL_CA                  | Database SSL CA                                                           | ''                                                 |
| DATASOURCES_TEST_USERNAME                | Database username                                                         | 'my_app'                                           |
| DEBUG                                    | Debug mode                                                                | 'false'                                            |
| EMAIL_TRANSPORT_DEFAULT_CLASS_NAME       | Email classname                                                           | 'Smtp'                                             |
| EMAIL_DEFAULT_FROM                       | From email address                                                        | 'you@localhost'                                    |
| EMAIL_DEFAULT_TRANSPORT                  | Sets transport method                                                     | 'default'                                          |
| EMAIL_TRANSPORT_DEFAULT_HOST             | Server hostname                                                           | 'localhost'                                        |
| EMAIL_TRANSPORT_DEFAULT_PORT             | Server port                                                               | 25                                                 |
| EMAIL_TRANSPORT_DEFAULT_TIMEOUT          | Timeout                                                                   | 30                                                 |
| EMAIL_TRANSPORT_DEFAULT_USERNAME         | Username for email server auth                                            | null                                               |
| EMAIL_TRANSPORT_DEFAULT_PASSWORD         | Password for email server auth                                            | null                                               |
| EMAIL_TRANSPORT_DEFAULT_CLIENT           | Client                                                                    | null                                               |
| EMAIL_TRANSPORT_DEFAULT_TLS              | Set tls                                                                   | null                                               |
| EMAIL_TRANSPORT_DEFAULT_URL              | Set url                                                                   | null                                               |
| GNUPGHOME                                | path to gnupghome directory                                               | '/home/www-data/.gnupg'                            |
| LOG_DEBUG_URL                            | CakePHP debug log DSN string                                              | null                                               |
| LOG_ERROR_URL                            | CakePHP debug log DSN string                                              | null                                               |
| PASSBOLT_AUTH_TOKEN_EXPIRY               | Passbolt authorization token expiration                                   | '3 days'                                           |
| PASSBOLT_EMAIL_VALIDATE_MX               | Validate server MX                                                        | true                                               |
| PASSBOLT_EMAIL_SHOW_COMMENT              | Include resources comments on email notification                          | true                                               |
| PASSBOLT_EMAIL_SHOW_DESCRIPTION          | Include resources description on email notification                       | true                                               |
| PASSBOLT_EMAIL_SHOW_SECRET               | Include resource encrypted secret on email notification                   | true                                               |
| PASSBOLT_EMAIL_SHOW_URI                  | Include resource URI on email notification                                | true                                               |
| PASSBOLT_EMAIL_SHOW_USERNAME             | Inlcude the username field of the resource on email notification          | true                                               |
| PASSBOLT_EMAIL_SEND_COMMENT_ADD          | Notify when a comment is added to resource                                | true                                               |
| PASSBOLT_EMAIL_SEND_PASSWORD_CREATE      | Notify when a password is created                                         | true                                               |
| PASSBOLT_EMAIL_SEND_PASSWORD_SHARE       | Notify when a password is shared                                          | true                                               |
| PASSBOLT_EMAIL_SEND_PASSWORD_UPDATE      | Notify when a password is updated                                         | true                                               |
| PASSBOLT_EMAIL_SEND_PASSWORD_DELETE      | Notify when a password is deleted                                         | true                                               |
| PASSBOLT_EMAIL_SEND_USER_CREATE          | Send invite to user when created                                          | true                                               |
| PASSBOLT_EMAIL_SEND_USER_RECOVER         | Send recovery email                                                       | true                                               |
| PASSBOLT_EMAIL_SEND_GROUP_DELETE         | Notify group members when a group is deleted                              | true                                               |
| PASSBOLT_EMAIL_SEND_GROUP_USER_ADD       | Notify user when added to a group                                         | true                                               |
| PASSBOLT_EMAIL_SEND_GROUP_USER_DELETE    | Notify user when deleted from group                                       | true                                               |
| PASSBOLT_EMAIL_SEND_GROUP_USER_UPDATE    | Notify user when his/her roles change in a group                          | true                                               |
| PASSBOLT_EMAIL_SEND_GROUP_MANAGER_UPDATE | Notify group manager when users change in a group                         | true                                               |
| PASSBOLT_EMAIL_SEND_GROUP_MANAGER_DELETE | Notify group manager when user deleted in a group                         | true                                               |
| PASSBOLT_GPG_SERVER_KEY_FINGERPRINT      | GnuPG fingerprint                                                         | null                                               |
| PASSBOLT_GPG_SERVER_KEY_PUBLIC           | Path to GnuPG public server key                                           | /var/www/passbolt/config/gpg/serverkey.asc         |
| PASSBOLT_GPG_SERVER_KEY_PRIVATE          | Path to GnuPG private server key                                          | /var/www/passbolt/config/gpg/serverkey_private.asc |
| PASSBOLT_JS_BUILD                        | passbolt.js type of build 'development' or 'production'                   | 'production'                                       |
| PASSBOLT_KEY_EMAIL                       | Key owner email address                                                   | passbolt@yourdomain.com                            |
| PASSBOLT_KEY_EXPIRATION                  | Key expiration date                                                       | 0, never expires                                   |
| PASSBOLT_KEY_LENGTH                      | Gpg desired key length                                                    | 2048                                               |
| PASSBOLT_KEY_NAME                        | Key owner name                                                            | Passbolt default user                              |
| PASSBOLT_LEGAL_PRIVACYPOLICYURL          | Set legal policy URL                                                      | ''                                                 |
| PASSBOLT_META_DESCRIPTION                | Set html meta description for the site                                    | 'Open source password manager for teams'           |
| PASSBOLT_META_ROBOTS                     | Search engines indexing parameters                                        | 'noindex, nofollow'                                |
| PASSBOLT_META_TITLE                      | Set html meta title for                                                   | 'Passbolt'                                         |
| PASSBOLT_PLUGINS_EXPORT_ENABLED          | Enable export plugin                                                      | true                                               |
| PASSBOLT_PLUGINS_IMPORT_ENABLED          | Enable import plugin                                                      | true                                               |
| PASSBOLT_REGISTRATION_PUBLIC             | Defines if users can register                                             | false                                              |
| PASSBOLT_SECURITY_SET_HEADERS            | Send CSP Headers                                                          | true                                               |
| PASSBOLT_SECURITY_CSP                    | CSP Headers (true, false or custom CSP string)                            | true                                               |
| PASSBOLT_SECURITY_COOOKIE_SECURE         | Set MFA cookie secure flag                                                | true                                               |
| PASSBOLT_SSL_FORCE                       | Redirects http to https                                                   | true                                               |
| PASSBOLT_SUBKEY_LENGTH                   | Gpg desired subkey length                                                 | 2048                                               |
| SECURITY_SALT                            | CakePHP security salt                                                     | __SALT__                                           |
| SESSION_DEFAULTS                         | Session engine configuration                                              | 'php'                                              |
{: .table-parameters }
