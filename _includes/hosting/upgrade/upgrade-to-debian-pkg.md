A {{ distributionLabel }} package has been created to increase the ease of installing and upgrading passbolt.

## Pre-requisites

For this tutorial, you will need:
- A minimal {{ distributionLabel }} {{ distributionVersion }} server.
- Passbolt installed with the {{ distributionLabel }} install script.

## 1. Take down your site

It is generally a good idea to stop running the site prior to the upgrade. This is to avoid having side effects
such as active users corrupting the data in the middle of an upgrade.

```bash
sudo systemctl stop nginx
```

## 2. Backup your instance

First things first, as this is a sensitive operation a backup of the instance must be performed to prevent any data loss.
You can follow our [backup process](/hosting/backup).

## 3. Upgrade your system

Passbolt requires PHP 7.3 and supports PHP 7.4.

A full system upgrade to {{ distributionLabel }} {{ distributionVersion }} is necessary before installing the passbolt {{ distributionLabel }} package.
{% if distributionPackage == 'dnf' or distributionPackage == 'yum' %}
```
sudo {{ distributionPackage }} upgrade
```
{% elsif distributionPackage == 'apt' %}
[Here]({{distributionUpgradeGuide}}) is the official {{ distributionLabel }} guide to
upgrade your system with a step by step tutorial.
{% endif %}
## 4. Install the package


{% assign migrate = 'yes' %}
{% include hosting/install/packages/debian/install-server-components.md %}

{% if distributionPackage == 'dnf' or distributionPackage == 'yum' %}
{% elsif distributionPackage == 'apt' %}
It is recommended at this point to select:

- **No** for {{ databaseEngine }} configuration as it is already configured
- **No** to nginx configuration as we will do it at the end

{% endif %}

## 5. Copy existing configuration to the new location

### 5.1. Copy the server keys

Copy the GPG server keys as following:
```bash
sudo cp -a /var/www/passbolt/config/gpg/serverkey.asc /etc/passbolt/gpg/
sudo cp -a /var/www/passbolt/config/gpg/serverkey_private.asc /etc/passbolt/gpg/
sudo chown -R root:{{ webServerUser }} /etc/passbolt/gpg
sudo chmod g-w /etc/passbolt/gpg
```

### 5.2. Copy the passbolt configuration

Copy passbolt configuration as following:
```bash
sudo cp /var/www/passbolt/config/passbolt.php /etc/passbolt/passbolt.php
sudo chown root:{{ webServerUser }} /etc/passbolt/passbolt.php
sudo chmod g-w /etc/passbolt/passbolt.php
```

If you are running mysql 8, please change the `quoteIdentifiers` setting of the passbolt.php as follow:

```php
'quoteIdentifiers' => true
```

### 5.3. Copy the avatars

If coming from Passbolt version prior to 3.2, copy passbolt avatars as following:

```bash
sudo cp -R /var/www/passbolt/webroot/img/public/avatar /usr/share/php/passbolt/webroot/img/public/
```

{% if page.passbolt_version == 'pro' %}
### 5.4. Copy the subscription key

Copy subscription key as following:

```bash
sudo cp /var/www/passbolt/config/license /etc/passbolt/subscription_key.txt
sudo chown root:{{ webServerUser }} /etc/passbolt/subscription_key.txt
sudo chmod g-w /etc/passbolt/subscription_key.txt
```
{% endif %}

{% assign stepNumber = 6 %}

{% if distributionPackage == 'apt' %}
## {{ stepNumber }}{% assign stepNumber = stepNumber | plus:1 %}. PHP-FPM

Edit `/etc/php/{{ distributionPhpVersion }}/fpm/pool.d/www.conf` and look for the line that looks like this:

```bash
listen = 127.0.0.1:9000
```

Change it to look like this:

```bash
listen = /run/php/php{{ distributionPhpVersion }}-fpm.sock
```

Due to a bug on the install scripts some installations might need to do an additional substitution on `/etc/php/{{ distributionPhpVersion }}/fpm/pool.d/www.conf`:

Look for the line containing:

```bash
listen.group = _WWW_GROUP_
```

And change it to look like:

```bash
listen.group = www-data
```

{% endif %}
## {{ stepNumber }}{% assign stepNumber = stepNumber | plus:1 %}. Nginx

Now you can remove all the old nginx configuration files from `/etc/nginx/conf.d/`
```bash
sudo rm /etc/nginx/conf.d/passbolt.conf
sudo rm /etc/nginx/conf.d/passbolt_ssl.conf
```
Then you can reconfigure the {{ distributionLabel }} package using:
{% if distributionPackage == 'dnf' or distributionPackage == 'yum' %}
```
sudo /usr/local/bin/passbolt-configure
```
{% elsif distributionPackage == 'apt' %}
```bash
sudo dpkg-reconfigure passbolt-{{ page.passbolt_version }}-server
```
{% endif %}

Answer the following way:

- **No** to {{ databaseEngine }} configuration
- **Yes** to nginx configuration

You can then select the SSL method that suits best your needs.

## {{ stepNumber }}{% assign stepNumber = stepNumber | plus:1 %}. Run the database migrations

Now it is time to run the migrations to upgrade the database schemas:

```bash
sudo -H -u {{ webServerUser }} bash -c "/usr/share/php/passbolt/bin/cake passbolt migrate"
```

## {{ stepNumber }}{% assign stepNumber = stepNumber | plus:1 %}. Cleanup

After you have checked you can access your new setup with the {{ distributionLabel }} package make a backup of `/var/www/passbolt` and then
you can delete it:

```bash
sudo rm -rf /var/www/passbolt
```

You may also want to check for the old CRON job that may need to be removed:
```bash
sudo crontab -u {{ webServerUser }} -e
```

## {{ stepNumber }}{% assign stepNumber = stepNumber | plus:1 %}. Bring your site back online

Finally take passbolt back up:

```bash
sudo systemctl start nginx
sudo systemctl restart php{{ distributionPhpVersion }}-fpm
```
