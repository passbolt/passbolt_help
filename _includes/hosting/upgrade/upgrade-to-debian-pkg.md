A {{ distributionLabel }} package has been created to increase the ease of installing and upgrading passbolt.

## Pre-requisites

For this tutorial, you will need:
- A minimal {{ distributionLabel }} {{ distributionVersion }} server.
- Passbolt installed with the {{ distributionLabel }} install script.

## 1. Take down your site

It is generally a good idea to stop running the site prior to the upgrade. This is to avoid having side effects
such as active users corrupting the data in the middle of an upgrade.

```bash
$ sudo systemctl stop nginx
```

## 2. Backup your instance

First things first, as this is a sensitive operation a backup of the instance must be performed to prevent any data loss. 
You can follow our [backup process](/hosting/backup).

## 3. Upgrade your system

Passbolt requires PHP 7.3 and supports PHP 7.4.

A full system upgrade to {{ distributionLabel }} {{ distributionVersion }} is necessary before installing the passbolt {{ distributionLabel }} package.
[Here]({{distributionUpgradeGuide}}) is the official {{ distributionLabel }} guide to 
upgrade your system with a step by step tutorial.

## 4. Install the package

### 4.1. Setup the package repository

For easier installation and update tasks Passbolt provides a package repository that you need to setup
before you download Passbolt {{ product | upcase }} and install it.

These steps assume you have already installed sudo and added your user to the sudo group.

**Step 1.** Update the apt indexes and install packages to allow apt to use https repositories:

```
sudo apt-get update
sudo apt-get install \
    apt-transport-https \
    ca-certificates \
    curl \
    gnupg-agent \
    software-properties-common
```

**Step 2.**  Add Passbolt package official GnuPG key

From keys.gnupg.net:
```
sudo apt-key adv --keyserver keys.gnupg.net --recv-keys 0xDE8B853FC155581D
```

Or from hkps://keys.mailvelope.com:
```
sudo apt-key adv --keyserver hkps://keys.mailvelope.com --recv-keys 0xDE8B853FC155581D
```

**Step 3.**  Check that the GPG fingerprint matches `3D1A 0346 C8E1 802F 774A  EF21 DE8B 853F C155 581D`

```
sudo apt-key fingerprint 0xDE8B853FC155581D
```
```
pub   rsa2048 2020-05-18 [SC] [expires: 2022-05-18]
      3D1A 0346 C8E1 802F 774A  EF21 DE8B 853F C155 581D
uid           [ unknown] Passbolt SA package signing key <contact@passbolt.com>
sub   rsa2048 2020-05-18 [E] [expires: 2022-05-18]
```

**Step 4.**  Add passbolt repository to your apt lists:

```
echo  "deb https://download.passbolt.com/{{ product }}/{{ distribution }} {{ distributionVersionName }} stable" | \
sudo tee /etc/apt/sources.list.d/passbolt.list
```

**Step 5.**  Update the apt indexes with the new passbolt apt repository:

```
sudo apt-get update
```

### 4.2. Install the package

Install the main passbolt server component:

```
sudo apt-get install passbolt-{{product}}-server
```

It is recommended at this point to select:

- **No** for mysql configuration as it is already configured
- **No** to nginx configuration as we will do it at the end

## 5. Copy existing configuration to the new location

Copy GPG keys as following:

```
sudo cp /var/www/passbolt/config/gpg/* /etc/passbolt/gpg/
sudo chown -R root:www-data /etc/passbolt/gpg
sudo chmod g-w /etc/passbolt/gpg
```

Copy passbolt configuration as following:

```
sudo cp /var/www/passbolt/config/passbolt.php /etc/passbolt/passbolt.php
sudo chown root:www-data /etc/passbolt/passbolt.php
sudo chmod g-w /etc/passbolt/passbolt.php
```

{% if page.passbolt_version == 'pro' %}
Copy subscription key as following:

```
sudo cp /var/www/passbolt/config/license /etc/passbolt/license
sudo chown root:www-data /etc/passbolt/license
sudo chmod g-w /etc/passbolt/license
```
{% endif %}

## 6. PHP-FPM

Edit `/etc/php/7.3/fpm/pool.d/www.conf` and look for the line that looks like this:

```
listen = 127.0.0.1:9000
```

Change it to look like this:

```
listen = /run/php/php7.3-fpm.sock
```

Due to a bug on the install scripts some installations might need to do an additional substitution on `/etc/php/7.3/fpm/pool.d/www.conf`:

Look for the line containing:

```
listen.group = _WWW_GROUP_
```

And change it to look like:

```
listen.group = www-data
```
{% include messages/notice.html
    content="Notice: The above examples show using PHP 7.3 - if your server has PHP 7.4 adjust these examples accordingly."
%}

## 7. Nginx

Now you can remove all the old nginx configuration files from `/etc/nginx/conf.d/`
```
sudo rm /etc/nginx/conf.d/passbolt.conf
sudo rm /etc/nginx/conf.d/passbolt_ssl.conf
```
Then you can reconfigure the {{ distributionLabel }} package using:
```
sudo dpkg-reconfigure passbolt-{{ page.passbolt_version }}-server
```

Answer the following way:

- **No** to mysql configuration
- **Yes** to nginx configuration

You can then select the SSL method that suits best your needs.

## 8. Run the database migrations

Now it is time to run the migrations to upgrade the database schemas:

```
sudo -H -u www-data bash -c "/usr/share/php/passbolt/bin/cake passbolt migrate"
```

## 9. Cleanup

After you have checked you can access your new setup with the {{ distributionLabel }} package make a backup of `/var/www/passbolt` and then
you can delete it:

```
rm -rf /var/www/passbolt
```

You may also want to check for the old CRON job that may need to be removed:
```
sudo crontab -u www-data -e
```

## 10. Take your site back up

Finally take passbolt back up:

```bash
sudo systemctl start nginx
```
