## Upgrade from v1.6.10-debian

Passbolt v2 introduces several changes that are important to keep in mind when upgrading:

#### Changes: Environment variables

The set of environment variables have changed and users should take some time to get familiar with the new ones. For example in case of the database env variables:

```bash
DB_USER is now DATASOURCES_DEFAULT_USERNAME
DB_HOST is now DATASOURCES_DEFAULT_HOST
```
There is a more detailed list in passbolt_docker [README](https://github.com/passbolt/passbolt_docker/blob/master/README.md) file.

#### Changes: Configuration files

No more core.php, email.php or database.php.
Any user that does not want to use environment variables must configure passbolt using:
```
/var/www/passbolt/config/passbolt.php
```
Passbolt will look for for configuration values in `passbolt.php`. Wether `passbolt.php` does not exist or the configuration section is not defined on it, passbolt will then look for configuration details in default.php which relies on environment variables/default values.
Gpg config directory has changed slightly its path from:

```bash
/var/www/passbolt/app/Config/gpg/ to /var/www/passbolt/config/gpg
```

Gpg default server key file names also changed:

```bash
serverkey.private.asc to serverkey_private.asc
```

#### Changes: www user

Passbolt container is now running under the www-data user

#### Changes: images directory

Path to the images directory is different:

```bash
/var/www/passbolt/app/webroot/img/public/images to /var/www/passbolt/webroot/img/public/images
```

Users must also rename ProfileAvatar to Avatar directory inside public/images in order to see images in passbolt v2

#### Changes: supervisor

In order to manage the running process in passbolt container we introduced supervisord. Users are now able to restart passbolt container processes using:

```bash
$ docker exec passbolt supervisorctl restart <php-fpm|nginx|cron>
```

Now that we have a better overview of the changes let's start with the upgrading process!
