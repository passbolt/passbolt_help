Let's add the rewrite and SSL rules and certificates.
```shell
$ nano /etc/apache2/sites-enabled/default-ssl.conf
```

Your file should look like this:
```
<IfModule mod_ssl.c>
    <VirtualHost _default_:443>
        ServerAdmin webmaster@localhost
        ServerName passbolt.dev

        DocumentRoot /var/www/passbolt

        ErrorLog ${APACHE_LOG_DIR}/error.log
        CustomLog ${APACHE_LOG_DIR}/access.log combined

        SSLEngine on
        SSLCertificateFile /etc/ssl/certs/passbolt.crt
        SSLCertificateKeyFile /etc/ssl/certs/passbolt.key
 
        <Directory /var/www/passbolt>
            Options FollowSymLinks
            AllowOverride All
            Require all granted
        </Directory>
    
        <FilesMatch “\.(php)$”>
            SSLOptions +StdEnvVars
        </FilesMatch>

        BrowserMatch “MSIE [2–6]” \
          nokeepalive ssl-unclean-shutdown \
          downgrade-1.0 force-response-1.0
        BrowserMatch “MSIE [17–9]” ssl-unclean-shutdown

    </VirtualHost>
</IfModule>
```