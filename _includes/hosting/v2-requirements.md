Passbolt is reported to work on a large variety of operating system configurations.
Therefore this help page is a generic guide that should work for most environments.

If you run into any issues with your particular configuration,
[please check the forum](https://community.passbolt.com/c/installation-issues).
Maybe someone else has had your issue. If not, make a post and the community will try to help you.

- Any Unix-like major distribution (Debian, Centos, Ubuntu, *BSD)
- A webserver (Apache or Nginx)
- A TLS server certificate for HTTPS
- PHP >= 7.0.0
- MariaDB/Mysql >= 5.5.59
- [Composer](https://getcomposer.org/download/)
- [GnuPG](https://gnupg.org/)
- [Git](https://git-scm.com/)

The following PHP extensions (that may or may not come by default):
- [PHP-GNUPG](http://php.net/manual/en/gnupg.installation.php): for key verification and authentication.
- Cakephp default requirements: Intl, mbstring, simplexml
- Image manipulation: gd or imagick
- Database: Mysqlnd, pdo, pdo_mysql
- Some general default: xsl, phar, posix, xml, zlib, ctype, curl, json.
- [Ldap](https://secure.php.net/manual/en/ldap.installation.php)
- & more depending on your configuration (for example if you want to use memcache for sessions).
