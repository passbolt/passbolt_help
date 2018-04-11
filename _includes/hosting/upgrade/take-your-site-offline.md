There are multiple ways of doing that, the simplest is sending a notice by email to your users
and stopping your webserver. The better approach would be to create a temporary html file and
redirect your passbolt user there, for example:

```shell
/var/www$ mkdir wip
/var/www$ touch wip/index.html
/var/www$ echo '<html><head><title>Maintenance in progress</title></head><body><h1>Maintenance in progress</h1></body></html>' >> wip/index.html
/var/www$ nano /etc/apache2/sites-enabled/001-default.conf

<IfModule mod_ssl.c>
        <VirtualHost _default_:443>
                ServerAdmin webmaster@localhost
                ServerName www.passbolt.test
                DocumentRoot /var/www/wip

                ErrorLog ${APACHE_LOG_DIR}/error.log
                CustomLog ${APACHE_LOG_DIR}/access.log combined

                SSLEngine on
                SSLCertificateFile /etc/apache2/ssl/passbolt.crt
                SSLCertificateKeyFile /etc/apache2/ssl/passbolt.key

        <Directory /var/www/wip>
            Options FollowSymLinks
            AllowOverride All
            Require all granted
        </Directory>

        </VirtualHost>
</IfModule>
/var/www$ service apache2 restart
```