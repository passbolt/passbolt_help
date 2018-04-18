Now let’s install php 7 and its dependencies. By default the command line interface (php5-cli) will be also installed as dependencies. We will need them later on.

```shell
$ yum -y install php-intl php-gd php-mysql php-mcrypt php-pear php-devel php-mbstring php-fpm gpgme-devel
```

Install php-fpm

```shell
$ yum install -y php-fpm
$ systemctl enable php-fpm
$ systemctl start php-fpm
```

We will be making use of the default nginx user to run both nginx and php-fpm. FPM out of the box uses the apache user but it is easy to change:

Edit /etc/php-fpm.d/www.conf with your preferred editor and modify the user/group configuration parameter to ‘nginx’:

```shell
$ vi /etc/php-fpm.d/www.conf
```

```
user = nginx
group = nginx
```

We also need to change the default group owner of the default php session directory so that it belongs to nginx.
```shell
chgrp nginx /var/lib/php/session
```

Passbolt needs GnuPG and it corresponding php module to run

```shell
$ pecl install gnupg
$ echo "extension=gnupg.so" > /etc/php.d/gnupg.ini
```

You will need to restart your nginx server, and php-fpm for the changes to take place.

```shell
$ systemctl restart nginx
$ systemctl restart php-fpm
```