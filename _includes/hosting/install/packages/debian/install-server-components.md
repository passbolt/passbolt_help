## 1. Install the server components
### 1.1. Package repository setup

For easier installation and update tasks Passbolt provides a package repository that you need to setup
before you download Passbolt {{ product | upcase }} and install it.

These steps assume you have already installed sudo and added your user to the sudo group.

{% assign stepNumber = 1 %}

{% if distributionPackage == 'dnf' or distributionPackage == 'yum' %}
**Step {{ stepNumber }}{% assign stepNumber = stepNumber | plus:1 %}.** Configure Extra Packages for Enterprise Linux (EPEL) repository

{% if distribution == 'oraclelinux' %}
```
sudo {{ distributionPackage }} install https://dl.fedoraproject.org/pub/epel/epel-release-latest-{{ distributionVersion }}.noarch.rpm
```
{% else %}
```
sudo {{ distributionPackage }} install epel-release
```
{% endif %}

While installing packages from this repository, you will be asked to accept GPG key of this repository. You nust verify if the displayed fingerprint is correct on [this reference page](https://getfedora.org/security/).

{% elsif distributionPackage == 'apt' %}
**Step {{ stepNumber }}{% assign stepNumber = stepNumber | plus:1 %}.** Update the apt indexes and install packages to allow apt to use https repositories:

```
sudo {{ distributionPackage }} update
sudo {{ distributionPackage }} install \
    apt-transport-https \
    ca-certificates \
    curl \
    gnupg-agent \
    software-properties-common
```

{% endif %}

{% if distributionPackage == 'dnf' or distributionPackage == 'yum' %}
**Step {{ stepNumber }}{% assign stepNumber = stepNumber | plus:1 %}.** Configure Remi's RPM repository

As {{ distributionLabel }} {{ distributionVersion }} don't provide the mandatory **php-pecl-gnupg** package for Passbolt, we rely on Remi's RPM repository for the PHP packages.

Install Remi repository configuration package.

```
sudo {{ distributionPackage }} install https://rpms.remirepo.net/enterprise/remi-release-{{ distributionVersion }}.rpm
```

During the next package installations, if you are prompted for Remi GPG key import, you must check if the displayed fingerprint matches [with the one on the bottom of this reference page](https://blog.remirepo.net/pages/Config-en).

{% if distributionVersion == '7' %}
Install the `yum-utils` package:
```
sudo {{ distributionPackage }} install yum-utils
```
{% endif %}

**Step {{ stepNumber }}{% assign stepNumber = stepNumber | plus:1 %}.** Enable the module stream for PHP 7.4:
{% if distributionVersion == '7' %}
```
sudo yum-config-manager --disable 'remi-php*'
sudo yum-config-manager --enable   remi-php74
```
{% elsif distributionVersion == '8' %}
```
sudo dnf module reset php
sudo dnf module install php:remi-7.4
```
{% endif %}

{% endif %}

**Step {{ stepNumber }}{% assign stepNumber = stepNumber | plus:1 %}.** Let's Encrypt

Install certbot if you plan to manage your SSL certificates with [Let's Encrypt](https://letsencrypt.org/):

```
sudo {{ distributionPackage }} install certbot python3-certbot-nginx
```

{% if distributionPackage == 'yum' %}
**Step {{ stepNumber }}{% assign stepNumber = stepNumber | plus:1 %}.** Setup MariaDB 10.3 repository

{{ distributionLabel }} {{ distributionVersion }} comes with an outated MariaDB 5.x version and performance issues has been reported by using it. That's why you should consider to upgrade MariaDB to version 10.3.

Add MariaDB 10.3 repository:

```
cat << EOF | sudo tee /etc/yum.repos.d/mariadb.repo
[mariadb]
name = MariaDB
baseurl = http://yum.mariadb.org/10.3/centos7-amd64
gpgkey=https://yum.mariadb.org/RPM-GPG-KEY-MariaDB
gpgcheck=1
EOF
```

{% if migrateToPackage == 'yes' %}
Upgrade MariaDB server from 5.5.xx to 10.3 version:

```
sudo yum install MariaDB-server MariaDB-client
```

At this step, MariaDB 5.5 has been replaced with MariaDB 10.3. You can now restart the MariaDB service:

```
sudo systemctl restart mariadb.service
```

Run this command to upgrade MariaDB internal database schemas:

```
sudo su -s /bin/bash -c "mysql_upgrade -p" mysql
```

You will be prompted with root mysql password and an output like the one below will be displayed:

```
Phase 1/7: Checking and upgrading mysql database
Processing databases
mysql
mysql.columns_priv OK
mysql.db OK
mysql.event OK
(etc etc...)
```

At this step, MariaDB has been upgraded.
{% endif %}

{% endif %}

{% if distributionPackage == 'apt' %}
**Step {{ stepNumber }}{% assign stepNumber = stepNumber | plus:1 %}.**  Add Passbolt package official GnuPG key from keys.mailvelope.com:

```
gpg --keyserver hkps://keys.mailvelope.com --recv-keys 0xDE8B853FC155581D 
```

Or alternatively from hkps://pgp.mit.edu or hkps://keys.gnupg.net.

**Step {{ stepNumber }}{% assign stepNumber = stepNumber | plus:1 %}.**  Check that the GPG fingerprint matches `3D1A 0346 C8E1 802F 774A  EF21 DE8B 853F C155 581D`

```
gpg --list-key --with-fingerprint 0xDE8B853FC155581D
```

Must return:

```
pub   rsa2048 2020-05-18 [SC] [expires: 2022-05-18]
      3D1A 0346 C8E1 802F 774A  EF21 DE8B 853F C155 581D
uid           [ unknown] Passbolt SA package signing key <contact@passbolt.com>
sub   rsa2048 2020-05-18 [E] [expires: 2022-05-18]
```

**Step {{ stepNumber }}{% assign stepNumber = stepNumber | plus:1 %}.** Create GPG package keyring

```
gpg --export 0xDE8B853FC155581D | sudo tee \
  /usr/share/keyrings/passbolt-repository.gpg >/dev/null
```

{% endif %}

**Step {{ stepNumber }}{% assign stepNumber = stepNumber | plus:1 %}.**  Add passbolt repository:

{% if distributionPackage == 'dnf' or distributionPackage == 'yum' %}
```
cat << EOF | sudo tee /etc/yum.repos.d/passbolt.repo
[passbolt-server]
name=Passbolt Server
baseurl=https://download.passbolt.com/{{ product }}/rpm/el{{ distributionVersion }}/stable
enabled=1
gpgcheck=1
gpgkey=https://download.passbolt.com/pub.key
EOF
```
{% elsif distributionPackage == 'apt' %}
```
cat << EOF | sudo tee /etc/apt/sources.list.d/passbolt.sources > /dev/null
Types: deb
URIs: https://download.passbolt.com/{{ product }}/{{ distribution }}
Suites: {{ distributionVersionName }}
Components: stable
Signed-By: /usr/share/keyrings/passbolt-repository.gpg
EOF
```
{% endif %}

{% if distributionPackage == 'apt' %}
**Step {{ stepNumber }}{% assign stepNumber = stepNumber | plus:1 %}.**  Update the apt indexes with the new passbolt apt repository:

```
sudo {{ distributionPackage }} update
```

### 1.2. Install passbolt

By default, passbolt {{ distributionLabel }} package will install Passbolt server component, mariadb-server, php-fpm and nginx
as dependencies.

There are two main ways to install the passbolt {{ distributionLabel }} package:

- **Interactive**: the package will guide the user through a set of questions to setup mariadb and nginx. If you are
going to use existing SSL certs for the web server, they need to be created and installed to the location of your choosing before
beginning. The user will be asked for the path and name of the certificate and key.
- **Non-interactive**: no questions will be asked. Useful for users with specific needs or users that want to automate the
installation. [Read this FAQ page to know more](/faq/hosting/how-to-install-passbolt-non-interactive)

{% endif %}
#### Install passbolt package

Install the main passbolt server component:

```
sudo {{ distributionPackage }} install passbolt-{{product}}-server
```

{% if distributionPackage == 'dnf' or distributionPackage == 'yum' %}

During the installation, you will be asked to accept the Passbolt repository GPG key. You must ensure the fingerprint is exactly the same as the one below:

```
Importing GPG key 0xC155581D:
 Userid     : "Passbolt SA package signing key <contact@passbolt.com>"
 Fingerprint: 3D1A 0346 C8E1 802F 774A EF21 DE8B 853F C155 581D
 From       : https://download.passbolt.com/pub.key
```
{% endif %}