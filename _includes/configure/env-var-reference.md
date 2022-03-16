Following there is a list of the environment variables supported in passbolt both PRO and CE editions with their default values.

| Variable name                            | Description                                                               | Default value                                      |
| ---------------------------------------- | ------------------------------------------------------------------------- | -------------------------------------------------- |
| APP_BASE                                 | it allows people to specify the base subdir the application is running in | `null`                                               |
| APP_ENCODING                             | Set text encoding                                                         | `'UTF-8'`                                            |
| APP_DEFAULT_LOCALE                       | Set default locale                                                        | `'en_US'`                                            |
| APP_FULL_BASE_URL                        | Passbolt base url                                                         | `'false'`                                            |
| DATASOURCES_DEFAULT_DATABASE             | Database name                                                             | `''`                                                 |
| DATASOURCES_DEFAULT_HOST                 | Database hostname                                                         | `'localhost'`                                        |
| DATASOURCES_DEFAULT_PORT                 | Database port                                                             | `3306`                                               |
| DATASOURCES_DEFAULT_URL                  | Database url                                                              | `''`                                                 |
| DATASOURCES_DEFAULT_PASSWORD             | Database password                                                         | `''`                                                 |
| DATASOURCES_DEFAULT_SSL_KEY              | Database SSL Key                                                          | `''`                                                 |
| DATASOURCES_DEFAULT_SSL_CERT             | Database SSL Cert                                                         | `''`                                                 |
| DATASOURCES_DEFAULT_SSL_CA               | Database SSL CA                                                           | `''`                                                 |
| DATASOURCES_DEFAULT_USERNAME             | Database username                                                         | `''`                                                 |
| DEBUG                                    | Debug mode                                                                | `'false'`                                            |
| EMAIL_TRANSPORT_DEFAULT_CLASS_NAME       | Email classname                                                           | `'Smtp'`                                             |
| EMAIL_DEFAULT_FROM_NAME                  | From email username                                                       | `'Passbolt'`                                         |
| EMAIL_DEFAULT_FROM                       | From email address                                                        | `'you@localhost'`                                    |
| EMAIL_DEFAULT_TRANSPORT                  | Sets transport method                                                     | `'default'`                                          |
| EMAIL_TRANSPORT_DEFAULT_HOST             | Server hostname                                                           | `'localhost'`                                        |
| EMAIL_TRANSPORT_DEFAULT_PORT             | Server port                                                               | `25`                                                 |
| EMAIL_TRANSPORT_DEFAULT_TIMEOUT          | Timeout                                                                   | `30`                                                 |
| EMAIL_TRANSPORT_DEFAULT_USERNAME         | Username for email server auth                                            | `null`                                               |
| EMAIL_TRANSPORT_DEFAULT_PASSWORD         | Password for email server auth                                            | `null`                                               |
| EMAIL_TRANSPORT_DEFAULT_CLIENT           | Client                                                                    | `null`                                               |
| EMAIL_TRANSPORT_DEFAULT_TLS              | Set tls                                                                   | `null`                                               |
| EMAIL_TRANSPORT_DEFAULT_URL              | Set url                                                                   | `null`                                               |
| GNUPGHOME                                | path to gnupghome directory                                               | `'/home/www-data/.gnupg'`                            |
| PASSBOLT_AUTH_TOKEN_EXPIRY               | Passbolt authorization token expiration                                   | `'3 days'`                                           |
| PASSBOLT_AUTH_REGISTER_TOKEN_EXPIRY      | Passbolt authorization registration token expiration                      | `'10 days'`                                          |
| PASSBOLT_AUTH_RECOVER_TOKEN_EXPIRY       | Passbolt authorization recover token expiration                           | `'1 day'`                                            |
| PASSBOLT_AUTH_LOGIN_TOKEN_EXPIRY         | Passbolt authorization token login expiration                             | `'5 minutes'`                                        |
| PASSBOLT_AUTH_MOBILE_TRANSFER_TOKEN_EXPIRY | Passbolt mobile transfer token expiration                               | `'5 minutes'`                                        |
| PASSBOLT_AUTH_JWT_REFRESH_TOKEN          | Passbolt authorization JWT refresh token                                  | `'1 month'`                                          |
| PASSBOLT_AUTH_JWT_ACCESS_TOKEN           | Passbolt authorization JWT access token                                   | `'5 minutes'`                                        |
| PASSBOLT_AUTH_JWT_VERIFY_TOKEN           | Passbolt authorization JWT verify token                                   | `'1 hour'`                                           |
| PASSBOLT_GPG_SERVER_KEY_FINGERPRINT      | GnuPG fingerprint                                                         | `null`                                               |
| PASSBOLT_GPG_SERVER_KEY_PUBLIC           | Path to GnuPG public server key                                           | `'/etc/passbolt/gpg/serverkey.asc'`                  |
| PASSBOLT_GPG_SERVER_KEY_PRIVATE          | Path to GnuPG private server key                                          | `'/etc/passbolt/gpg/serverkey_private.asc'`          |
| PASSBOLT_JS_BUILD                        | passbolt.js type of build 'development' or 'production'                   | `'production'`                                       |
| PASSBOLT_LEGAL_PRIVACYPOLICYURL          | Set legal policy URL                                                      | `''`                                                 |
| PASSBOLT_LEGAL_TERMSURL                  | Set legal terms URL                                                       | `'https://www.passbolt.com/terms'`                   |
| PASSBOLT_META_DESCRIPTION                | Set html meta description for the site                                    | `'Open source password manager for teams'`           |
| PASSBOLT_META_ROBOTS                     | Search engines indexing parameters                                        | `'noindex, nofollow'`                                |
| PASSBOLT_META_TITLE                      | Set html meta title for                                                   | `'Passbolt'`                                         |
| PASSBOLT_PLUGINS_EXPORT_ENABLED          | Enable export plugin                                                      | ``true``                                             |
| PASSBOLT_PLUGINS_IMPORT_ENABLED          | Enable import plugin                                                      | ``true``                                             |
| PASSBOLT_PLUGINS_IN_FORM_INTEGRATION_ENABLED | Enable Passbolt icon in web forms                                     | ``true``                                             |
| PASSBOLT_PLUGINS_PASSWORD_GENERATOR_DEFAULT_GENERATOR   | Default password generator (can be password or passphrase) | `password`                                           |
| PASSBOLT_PLUGINS_PASSWORD_GENERATOR_ENABLED  | Enable password generator plugin                                      | `true`                                               |
| PASSBOLT_PLUGINS_PREVIEW_PASSWORD_ENABLED          | Enable password generator preview                               | `true`                                               |
| PASSBOLT_PLUGINS_MOBILE_ENABLED          | Enable mobile plugin                                                      | `true`                                               |
| PASSBOLT_PLUGINS_JWT_AUTHENTICATION_ENABLED      | Enable jwt authentication plugin                                  | `true`                                               |
| PASSBOLT_REGISTRATION_PUBLIC             | Defines if users can register                                             | `false`                                              |
| PASSBOLT_SECURITY_SET_HEADERS            | Send CSP Headers                                                          | `true`                                               |
| PASSBOLT_SECURITY_CSP                    | CSP Headers (`true`, false or custom CSP string)                          | `true`                                               |
| PASSBOLT_SECURITY_COOOKIE_SECURE         | Set MFA cookie secure flag                                                | `true`                                               |
| PASSBOLT_SSL_FORCE                       | Redirects http to https                                                   | `true`                                               |
| SECURITY_SALT                            | CakePHP security salt                                                     | `__SALT__`                                           |
| SESSION_DEFAULTS                         | Session engine configuration                                              | `'php'`                                              |
{: .table-parameters }
