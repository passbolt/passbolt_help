# 1. Install the server components
## Repository setup

For easier installation and update tasks Passbolt provides a package repository that you need to setup
before you download Passbolt {{ product | upcase }} and install it.

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

Optionally you can install certbot to enable [Let's Encrypt](https://letsencrypt.org/) configuration:

```
sudo apt-get install certbot python3-certbot-nginx
```

**Step 2.**  Add Passbolt package official GnuPG key:

```
sudo apt-key adv --keyserver keys.gnupg.net --recv-keys 0xDE8B853FC155581D
```

**Step 3.**  Check that the GPG fingerprint matches `3D1A 0346 C8E1 802F 774A  EF21 DE8B 853F C155 581D`

```
sudo apt-key fingerprint 0xDE8B853FC155581D
pub   rsa2048 2020-05-18 [SC] [expires: 2022-05-18]
      3D1A 0346 C8E1 802F 774A  EF21 DE8B 853F C155 581D
uid           [ unknown] Passbolt SA package signing key <contact@passbolt.com>
sub   rsa2048 2020-05-18 [E] [expires: 2022-05-18]
```

**Step 4.**  Add passbolt repository to your apt lists:

```
echo  "deb https://download.passbolt.com/{{ product }}/debian buster stable" | \
sudo tee /etc/apt/sources.list.d/passbolt.list
```

**Step 5.**  Update the apt indexes with the new passbolt apt repository:

```
sudo apt-get update
```

## Install passbolt

By default, passbolt debian package will install Passbolt server component, mariadb-server, php-fpm and nginx
as dependencies.

There are two main ways to install the passbolt debian package:

- Interactive: the package will guide the user through a set of questions to setup mariadb and nginx
- Non interactive: no questions will be asked. Useful for users with specific needs or users that want to automate the
installation.

### Interactive install

In this type of installation the package will assist you with the passbolt installation asking the user
some questions:

#### Install passbolt package

Install the main passbolt server component:

```
sudo apt-get install passbolt-{{product}}-server
```

{% include configure/configure-debian-package-mariadb.md %}

#### Configure nginx for serving HTTPS

Depending on your needs there are two different options to setup nginx and SSL using the debian package:

- [Auto (Using Let's Encrypt)](/configure/https/{{ product }}/debian/auto.html)
- [Manual (Using user-provided SSL certificates)](/configure/https/{{ product }}/debian/manual.html)

### Non interactive install

This method is useful for automating passbolt installation and for users with specific needs.

```
sudo DEBIAN_FRONTEND=noninteractive apt-get install passbolt-{{product}}-server
```

If you don't want to install mysql locally or you don't want to use nginx as http server you can run the above
command like:

```
sudo DEBIAN_FRONTEND=noninteractive apt-get install --no-install-recommends passbolt-{{product}}-server
```

# 2. Configure passbolt using the wizard

{% include hosting/install/wizard/server.md %}
