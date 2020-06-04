{% include messages/warning.html
  content="**Attention:** This is beta feature and so it may be subject to breaking changes. Use at your own risk."
%}

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

#### Configure mariadb

If not instructed otherwise passbolt debian package will install mariadb-server locally. This step will help you create
an empty mariadb database for passbolt to use.

{% 
    include articles/figure.html 
    url="/assets/img/help/2020/05/debian-package/configure_mysql.png" 
    legend="Configure mariadb dialog" width="450px" 
%}

The configuration process will ask you for the credentials of the mariadb admin user to create a new database.
By default in most installations the admin username would be `root` and the password would be empty.

{% 
    include articles/figure.html 
    url="/assets/img/help/2020/05/debian-package/mysql_admin_user.png" 
    legend="Mariadb admin user dialog" width="450px" 
%}
{% 
    include articles/figure.html 
    url="/assets/img/help/2020/05/debian-package/mysql_admin_user_pass.png" 
    legend="Mariadb admin user pass dialog" width="450px"
%}

Now we need to create a mariadb user with reduced permissions for passbolt to connect. This values will be later asked on the webconfiguration tool of passbolt so please keep them in mind.

{% 
    include articles/figure.html 
    url="/assets/img/help/2020/05/debian-package/passbolt_db_user_name.png" 
    legend="Mariadb passbolt user dialog" width="450px"
%}
{% 
    include articles/figure.html 
    url="/assets/img/help/2020/05/debian-package/passbolt_db_user_pass.png" 
    legend="Mariadb passbolt user pass dialog" width="450px"
%}

Lastly we need to create a database for passbolt to use, for that we need to name it:
{% 
    include articles/figure.html url="/assets/img/help/2020/05/debian-package/db_name.png" 
    legend="Mariadb database name dialog" 
    width="450px" 
%}

#### Configure nginx

Passbolt debian package currently supports the configuration of nginx. It comes with a default configuration that supports:

- Serve passbolt on port 80 (http)
- Serve passbolt on port 443 (https)

The following steps will guide you through the option that uses Let's encrypt method to enable SSL.

{% 
    include messages/warning.html
    content="**Important requirement:** This tutorial assumes your machine has a valid domain name assigned in 
    order to work with let's encrypt."
%}

{% 
    include messages/warning.html
    content="**Note:** the configuration does not support serving passbolt on a subdirectory fashion. For example, 
    scenarios like https://mydomain.com/passbolt are not supported by default"
%}

{% 
    include articles/figure.html 
    url="/assets/img/help/2020/05/debian-package/configure_nginx.png" 
    legend="Configure nginx dialog" width="450px" 
%}

After choosing yes you will be prompted with the following dialog where you can choose which method you prefer to configure SSL on nginx:

{% 
    include articles/figure.html url="/assets/img/help/2020/05/debian-package/nginx_choices.png" 
    legend="nginx SSL dialog" width="450px" 
%}

You will now need to introduce the name of the domain name assinged to your server:

{% include 
    articles/figure.html 
    url="/assets/img/help/2020/05/debian-package/nginx_domain.png" 
    legend="nginx domain name" width="450px" 
%}

Finally you will need to provide an email address for Let's encrypt to notify you for renewals and other admin info:

{% 
    include articles/figure.html 
    url="/assets/img/help/2020/05/debian-package/lets_encrypt_email.png" 
    legend="lets encrypt admin email" width="450px" 
%}

If everything goes fine you should see a final message that points you to finish passbolt configuration:

{% 
    include articles/figure.html 
    url="/assets/img/help/2020/05/debian-package/success.png" 
    legend="Success message" width="450px" 
%}

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
