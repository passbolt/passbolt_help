---
title: Install passbolt from scratch on Debian 9 (Stretch)
date: 2018-04-09 00:00:00 Z
description: How to install Passbolt CE on your server from the source code.
card_title: Debian 9 tutorial
card_teaser: Step by step guide to install passbolt on Debian 9 
card_position: 2
icon: fa-server
categories: [hosting,install,ce]
sidebar: hosting
layout: default
slug: from-source
permalink: hosting/install/ce/debian-9-stretch.html
---

{% include layout/row_start.html %}
{% include layout/col_start.html column="7" %}

## System requirements

Spin up a new fresh server with Debian 9 (Stretch). Make sure that it is up-to-date.

## Installation steps

### 1. Base packages
No need to install any particular package such as the webserver (apache) during the setup. Let’s stick to the bare minimum for now, as we will do the rest manually.

Since we will need administrator privileges to perform most of the steps, you could either setup sudo for your default user, or log in the terminal as root.
```shell
sudo bash
```

We can install some basic utilities: Git, composer, unzip, make, the linux kernel headers and a compiler, as will all be needed later on.

```shell
$ apt-get install make git-core composer unzip g++ linux-headers-amd64 -y
```

### 2. Database installation
Once the installation is complete and you are logged in, open a terminal. We can start by installing the database server. We will use mariadb here, but you could also use mysql.

```shell
$ apt-get install mariadb-server -y
```

By default, MariaDB / MySQL is installed with basic security, and no root password. Let's fix this.

```shell
$ mysql_secure_installation
```

Answer the questions and set a strong root password.

Let's now create a specific passbolt user and database.

```shell
$ mysql -u root -p
mysql > create database passbolt;
mysql > create user passbolt;
mysql > grant all on passbolt.* to 'passbolt'@'localhost' identified by 'strong_db_password';
mysql > flush privileges;
mysql > quit;
```

### 3. Webserver installation (apache2)
Next we will want to install the apache webserver that will serve our php application.

```shell
$ apt-get install apache2 -y
```

Passbolt needs the mod_rewrite module to function properly.

```shell
$ a2enmod rewrite
```

We can see if this worked by opening up the web browser and going to the url: http://localhost (or whatever hostname / ip used by your machine). 
By default apache stores the web pages in /var/www/html so we can see and edit the default html page in this directory if needed.

### 4. PHP installation
Now let’s install php 7 and its dependencies. By default the command line interface (php5-cli) and the apache mod for php (libapache2-mod-php5) will be also installed as dependencies. We will need them later on.

```shell
$ apt-get install php7.0 php7.0-cli php7.0-common libapache2-mod-php7.0 php7.0-json php7.0-readline php7.0-mysqlnd libonig4 libqdbm14 -y
```

Passbolt needs some extra dependencies to run properly:

```shell
$ apt-get install php7.0-gd php7.0-intl php7.0-simplexml php7.0-curl php7.0-dom php7.0-mbstring -y
```

Passbolt needs GnuPG and it corresponding php module to run.

```shell
$ apt-get install libgpgme11-dev php7.0-gnupg -y
```

You will need to restart your apache server for the changes to take place.

```shell
$ systemctl restart apache2
```

### 5. Virtual host config
For apache to work with passbolt we need to edit the virtual host configuration file to add the passbolt folder and rewrite rules.

```shell
$ nano /etc/apache2/sites-enabled/000-default.conf
```

This is what a minimal configuration without ssl looks like (we'll get to the ssl part later). Of course you will need to replace your administrator email address (ServerAdmin setting) and server name (ServerName setting).

```
<VirtualHost *:80>
    ServerAdmin webmaster@localhost
    ServerName passbolt.dev

    DocumentRoot /var/www/passbolt

    ErrorLog ${APACHE_LOG_DIR}/error.log
    CustomLog ${APACHE_LOG_DIR}/access.log combined

    <Directory /var/www/passbolt>
        Options FollowSymLinks
        AllowOverride All
        Require all granted
    </Directory>
</VirtualHost>
```

### 6. Domain name setup
For the sake of keeping this demonstration short we will use passbolt.dev as domain name
(we added the IP to domain name mapping with a manual entry in the /etc/hosts file after a quick lookup on ifconfig).

```shell
$ nano /etc/hosts
```

Add this line to the file

```
127.0.0.1 passbolt.dev
```

Of course, replace 127.0.0.1 by whichever ip is used by your host.

### 7. Download passbolt

In the virtual host configuration file we are pointing to /var/www/passbolt but obviously it does not exist yet! 
Let’s create it, by cloning passbolt official repository. This way we can pull new releases easily in the future.

```shell
$ cd /var/www
$ git clone https://github.com/passbolt/passbolt_api.git ./passbolt
```

### 8. Generate an OpenPGP key
Passbolt API uses an OpenPGP key for the server in order to authenticate and sign the outgoing JSON requests.

**Note:** Running gpg --gen-key on a virtual machine can take a while because /dev/random does not have enough “randomness” aka entropy. You can speed up the gpg key creation with the **haveged** package to improve the entropy generation : `apt-get install haveged -y`

Now generate an OpenPGP key

**Important: Currently php-gnupg does not support keys with a passphrase so you will need to leave that field empty.**

```shell
$ gpg --gen-key
```

**Note:** if you do not run this command as www-data the result will be stored in /root/.gnupg. Thankfully passbolt does import the keys at runtime into the www-data keyring if it is not already present.

It’s a good idea to fill in the details properly and not press enter frantically. Make sure you have decent name and email for the key. This will come in handy to identify and verify it down the line.

After creating the key **make sure you note down the fingerprint**, it will be requested later in the install process.
You can get the server key fingerprint as follows:

```shell
$ gpg --list-keys --fingerprint | grep -i -B 2 'SERVER_KEY@EMAIL.TEST'
```

Copy the public and private keys to the passbolt config location:

```shell
$ gpg --armor --export-secret-keys SERVER_KEY@EMAIL.TEST > /var/www/passbolt/config/gpg/serverkey_private.asc
$ gpg --armor --export SERVER_KEY@EMAIL.TEST > /var/www/passbolt/config/gpg/serverkey.asc
```

We don't want those keys to be readable by anyone, except the webserver.

```shell
$ chmod 640 /var/www/passbolt/config/gpg/serverkey*
```

### 9. Initialize the gpg keyring
In order for passbolt authentication to work your server key needs to be in the keyring used by the web server.
It is likely that there is none, so you can create one by interacting with gpg with the web server user

In debian 9, the home directory of the www-data user is /var/www. We need to give ownership of this folder to www-data, since it is not there by default.

```shell
$ chown www-data:www-data /var/www
```

Now we create the keyring for the webserver:

```shell
$ sudo su -s /bin/bash -c "gpg --list-keys" www-data
gpg: directory '/var/www/.gnupg' created
gpg: keybox '/var/www/.gnupg/pubring.kbx' created
gpg: /var/www/.gnupg/trustdb.gpg: trustdb created
```

### 9. Set passbolt file permissions
We need to set the right permissions on the passbolt files. It should belong to the same owner as the webserver.

```shell
$ chown -R  www-data:www-data /var/www/passbolt
$ cd /var/www/passbolt
```

**Important:** For the following steps, we'll also need to use the same user as the one running the webserver. In our case (apache), it is www-data.

```shell
$ su -s /bin/bash www-data
```

### 10. Install the dependencies

The project dependencies such as the plugin to manage the images, emails, etc. are not included anymore
in the code on the official repository. Fret not, composer will manage this for us.

```shell
$ composer install
```

### 11. Create a passbolt configuration file

Everything is located in one configuration file called
`config/passbolt.php`.

```shell
$ cp config/passbolt.default.php config/passbolt.php
$ nano config/passbolt.php
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
return [
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

You can also set your configuration using environment variables.
Check `config/default.php` to get the names of the environment variables.

### 12. Run the install script

Let's install passbolt tables and data in the database.

```shell
$ ./bin/cake passbolt install
```

The install script will ask you to create an admin user. Enter your first name, last name and email. In return, the script will
provide you with an activation link that you will user later to activate and configure your user. You can go to this url now or later, but we
recommend that you configure SSL before.

Optionally you can also run the health check to see if everything is fine.

```shell
$ ./bin/cake passbolt healthcheck
```

You should see a majority of green ok. However, some SSL related alerts should still appear.

At this stage, passbolt is running as it should, but https is still missing. It is strongly recommended
that you configure https before using passbolt.

## Going further

### 1. Setup the emails

For passbolt to be able to send emails, you must first configure properly the “EmailTransport” and "Email" section in the 
`config/passbolt.php` file to match your provider smtp details.

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
 * * * * * su -c "/var/www/passbolt/bin/cake EmailQueue.sender >> /var/log/passbolt.log" -s /bin/bash www-data
```

### 2. Configure https
It is recommended to use https with passbolt (and, well, pretty much [https://www.eff.org/encrypt-the-web](everything)). 
To setup SSL we need a certificate. Here for the sake of brevity we will create a self-signed certificate. 
Of course you are free to use a [https://letsencrypt.org/getting-started/](proper free certificate) and tidy up the server supported cypher suites.

In the following steps, we’ll generate a self signed certificate and configure nginx and passbolt to use https.

**2.1 Generate the self signed certificate**
```shell
$ openssl req -new -newkey rsa:4096 -days 365 -nodes -x509 -subj "/C=FR/ST=Denial/L=Springfield/O=Dis/CN=passbolt.dev" -keyout /etc/ssl/certs/passbolt.key -out /etc/ssl/certs/passbolt.crt
Generating a 4096 bit RSA private key
................++
...++
writing new private key to '/etc/ssl/certs/passbolt.key'
-----
```

**2.2 Make sure the certificate is readable by apache**
```shell
$ chown root:www-data /etc/ssl/certs/passbolt.crt
$ chown root:www-data /etc/ssl/certs/passbolt.key
$ chmod 640 /etc/ssl/certs/passbolt.crt
$ chmod 640 /etc/ssl/certs/passbolt.key
```

**2.3 Enable SSL apache module and site**
```shell
$ a2enmod ssl
$ a2enmod headers
$ a2ensite default-ssl
```

**2.4 Configure virtual host**
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
**2.5 Restart Apache**
```shell
$ systemctl reload apache2
```

**2.6 Force SSL**
We’ll need to change the passbolt configuration to make him use https instead of http,
and force the redirection to https:

```shell
$ nano /var/www/passbolt/config/passbolt.php
```

Set fullBaseUrl to https
```
'App' => [
    'fullBaseUrl' => 'https://passbolt.dev',
],
``` 

Set ssl.force config parameter to true, instead of false. You can also remove the line as it will be set to true by default.
```
'ssl' => [
    'force' => true,
],
``` 
 
That’s it! Passbolt is now ready to be used with https.

If you have already done the setup of your user, you will notice that passbolt tells you that the plugin is not configured to work with this domain. This is normal since it was already configured to work with http, and not https.

That’s not an issue, you can fix this easily by clicking on “recover an existing account”

## That's it
Do let us know if you run into problems following this tutorial on the [https://community.passbolt.com/c/installation-issues](support forum).

Thank you for trying out Passbolt CE!

### Troubleshooting

Here are some frequently asked questions related to passbolt installation:
{% include faq/list-by-tag.html tag='troubleshoot' %}

Feel free to ask for help on the [community forum](https://community.passbolt.com/c/installation-issues).

{% include updated.html %}

{% include layout/col_end.html %}
{% include layout/col_start.html column="4 last push1" %}

{% include aside/message.html
    class="tldr notice"
    content="Are you experiencing issues when installing passbolt?"
    link="https://community.passbolt.com/c/installation-issues"
    ask="Ask the community!"
    button="primary"
%}

{% include aside/message.html
    class="tldr"
    content="Something is not accurate in this documentation? You can contribute by opening an issue or making pull requests!"
    link="https://www.github.com/passbolt/passbolt_help"
    ask="View on github"
%}

{% include aside/ce-install-pro-cta.html %}

{% include layout/row_end.html %}
