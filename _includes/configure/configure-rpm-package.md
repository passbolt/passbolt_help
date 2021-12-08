#### MariaDB / Nginx / SSL settings

Passbolt {{ product | upcase }} RPM package on {{ distributionLabel }} {{ distributionVersion }} come with a configuration helper tool to prepare MariaDB, Nginx and SSL settings.

You must prepare beforehand your SSL certificates before launching the tool. Be sure to write down the full path to your cert/key combo, as it will be needed in the nginx configuration process.

Please, notice that for security matters we highly recommend to setup SSL to serve passbolt.

Launch `passbolt-configure` tool and answer to the questions:

```
sudo /usr/local/bin/passbolt-configure
```

#### MariaDB

```
================================================================
Do you want to configure a local mariadb server on this machine?
================================================================
1) yes
2) no
#?
```

Answer **1** for yes if you want to configure a local MariaDB database, otherwise **2** for no if you plan to use an existing one.

If you chose yes, answer the questions:

```
=======================================================
Please enter a new password for the root database user:
=======================================================
MariaDB Root Password: ****
MariaDB Root Password (verify): ****
======================================================
Please enter a name for the passbolt database username
======================================================
Passbolt database user name:passboltuser
=======================================================
Please enter a new password for the mysql passbolt user
=======================================================
MariaDB passbolt user password: ****
MariaDB passbolt user password (verify): ****
==============================================
Please enter a name for the passbolt database:
==============================================
Passbolt database name:passboltdb
```

#### Haveged

On virtualized environments GnuPG happen to find not enough entropy to generate a key. Therefore, Passbolt will not run properly.

You should consider to install Haveged to speed up the entropy generation. Please check [our FAQ page about this](https://help.passbolt.com/faq/hosting/why-haveged-virtual-env) for more informations.

```
==================
Install Haveged ?
==================
1) yes
2) no
#?
```

#### Nginx

Please enter the domain name under which passbolt will run.

Note this hostname will be used as server_name for nginx and as the domain name to register a SSL certificate with let's encrypt if you don't have your own SSL certificates.

If you don't have a domain name and you do not plan to use let's encrypt please enter the ip address to access this machine.

```
=========
Hostname: passbolt.domain.tld
=========
```

#### SSL configuration

3 available choices for SSL configuration:

* manual: Prompts for the path of user uploaded ssl certificates and set up nginx
* auto:   Will issue a free SSL certificate with https://www.letsencrypt.org and set up nginx
* none:   Do not setup HTTPS at all

```
==================
Setting up SSL...
==================
1) manual
2) auto
3) none
#?
```

If you choose **1**, you will be prompted for the full path of your certificates:

```
Enter the path to the SSL certificate: /path/to/certs/cert.pem
Enter the path to the SSL privkey: /path/to/certs/key.pem
```

Nginx and MariaDB are now on the way to be configured. You will be notified at the end of the process to connect to the Passbolt web interface to finish the configuration.

```
===============================================================
Installation is almost complete. Please point your browser to
  https://passbolt.domain.tld to complete the process
===============================================================
```