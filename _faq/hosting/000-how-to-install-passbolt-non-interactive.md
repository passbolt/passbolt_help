---
title: How to install passbolt in non-interactive mode?
slug: how-to-install-passbolt-non-interactive
layout: faq
category: hosting
permalink: /faq/hosting/:slug
date: 2022-03-02 00:00:00 Z
---

The non-interactive mode is useful for automating passbolt installation and for users with specific needs. It is available only on Debian and Ubuntu operating systems.

The commands of this page assume you want to install passbolt CE. Replace `ce` with `pro` if you plan to install the PRO version.

### Package repository setup

For easier installation and update tasks Passbolt provides a package repository that you need to setup
before you download Passbolt and install it.

**Step 1.** Download our dependencies installation script:

```
wget "https://download.passbolt.com/ce/installer/passbolt-repo-setup.ce.sh"
```

**Step 2.** Download our SHA512SUM for the installation script:

```
wget https://github.com/passbolt/passbolt-dep-scripts/releases/latest/download/passbolt-ce-SHA512SUM.txt
```

**Step 3.** Ensure that the script is valid and execute it:

```
sha512sum -c passbolt-ce-SHA512SUM.txt && sudo bash ./passbolt-repo-setup.ce.sh {% if migrate == 'yes' %} --passbolt-migrate {% endif %} || echo \"Bad checksum. Aborting\" && rm -f passbolt-repo-setup.ce.sh
```

### Simple mode

If you don't want to install mysql locally or you don't want to use nginx as http server you can run the non-interactive command with `--no-install-recommends` parameter.

```
sudo DEBIAN_FRONTEND=noninteractive apt-get install \
  --no-install-recommends passbolt-ce-server
```

### Advanced mode

You can automate the installation by pre-fill answers with this command (run one command per parameter):

```
echo passbolt-ce-server <parameter> <type> <value> | \
  sudo debconf-set-selections
```

Parameter and type reference table: 

| Parameter                                  | Type     | Description                                                                                           |
| ------------------------------------------ | -------- | ----------------------------------------------------------------------------------------------------- |
| passbolt/mysql-configuration               | boolean  | To enable MySQL, can be true (default) or false                                                       |
| passbolt/mysql-passbolt-username           | string   | Passbolt database username                                                                            |
| passbolt/mysql-passbolt-password           | password | Passbolt database password                                                                            |
| passbolt/mysql-passbolt-password-repeat    | password | Passbolt database password confirm (must be the same as passbolt/mysql-passbolt-password)             |
| passbolt/mysql-passbolt-dbname             | string   | Passbolt database name                                                                                |
| passbolt/nginx-configuration               | boolean  | To enable Nginx,  can be true (default) or false                                                      |
| passbolt/nginx-configuration-three-choices | select   | SSL configuration: When certbot package is installed, you can choose between auto, manual and none    |
| passbolt/nginx-configuration-two-choices   | select   | SSL configuration: When certbot package is not installed, you can choose only between manual and none |
| passbolt/nginx-domain                      | string   | Passbolt domain name (FQDN)                                                                           |
| passbolt/nginx-certificate-file            | string   | Absolute path to SSL certificate path (applies only if nginx-configuration-*-choices is manual)       |
| passbolt/nginx-certificate-key-file        | string   | Absolute path to SSL key path (applies only if nginx-configuration-*-choices is manual)               |
{: .table-parameters }

Once done, run this non-interactive install command:

```
sudo DEBIAN_FRONTEND=noninteractive apt-get install passbolt-ce-server
```