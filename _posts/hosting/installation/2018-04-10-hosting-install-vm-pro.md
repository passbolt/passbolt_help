---
title: Using Passbolt pro virtual machine appliance
card_title: Virtual machine
card_teaser: Use passbolt Pro virtual appliance
card_position: 5
date: 2019-08-07 00:00:00 Z
description: Start using passbolt pro virtual machine
icon: fa-server
categories: [hosting,install,pro]
sidebar: hosting
layout: default
slug: vm
docker_tag: '-pro'
passbolt_version: Pro
permalink: /:categories/:slug.html
---

{% assign product = 'pro' %}

{% include layout/row_start.html %}
{% include layout/col_start.html column="7" %}

Passbolt Pro provides a virtual appliance in OVA format. Users can import this appliance on their private virtualization platform and start enjoying Passbolt Pro.
The VM includes the following software:
- Debian 10
- Nginx
- Php-fpm
- Mariadb
- Passbolt Pro preinstalled
- certbot
- haveged to fill the entropy pool faster

## 1. Getting started with Passbolt Pro VM

### 1.1 Download

Download the ova and the SHA512SUM.txt:

- [Passbolt Pro VM](https://www.passbolt.com/pro/download/vm/debian/latest)
- [SHA512SUM.txt](https://www.passbolt.com/pro/download/vm/debian/latest-checksum)

Import the ova file using virtualbox, vmware (ESXi >= 6.0) or any other platform that supports import OVA files.

Once imported into users should be able to boot the VM and just point to the VM ip address with their web browser to initiate the passbolt install process.


### 1.2 Credentials

The appliance performs some actions on the first boot:
- Creates ssh host keys
- Enables ssh
- Creates a set of random mariadb credentials for the mariadb server installed on the appliance
- Creates an empty database where passbolt can be installed.

For the first login the appliance comes with the following ssh default credentials:

```bash
VM login credentials:
username: passbolt
password: admin
```

The `passbolt` user is part of `sudo` group. There is no root password, so you cannot
login in as root. You can however create a shell as root with the default user:
```
sudo -s
```

Mariadb credentials are stored on `/root/.mysql_credentials` the file should contain:

- Random password for root user
- Empty database name. It follows the pattern passbolt_random_id
- Random user and password with permissions for the passbolt database


### 1.3. HTTPS setup process:

Passbolt Pro VM uses passbolt debian package.  Depending on your needs there are two different options to setup nginx and SSL using the debian package:

- [Auto (Using Let's Encrypt)](/configure/https/{{ product }}/debian/auto.html)
- [Manual (Using user-provided SSL certificates)](/configure/https/{{ product }}/debian/manual.html)

## 2. Configure passbolt

Before you can use the application, you need to configure it. Point your browser to the hostname / ip where passbolt can
be reached. You will reach a getting started page.

{% include articles/figure.html url="/assets/img/help/2018/11/web-installer-getting-started.png" legend="passbolt welcome page before configuration" width="586px" %}

Two options are available: **Manual configuration** and **Wizard configuration**. Choose Wizard configuration.

This tutorial will guide you through the different steps of the wizard. The manual configuration is not
covered in this article.

{% assign stepNumber = 1 %}
### 2.{{ stepNumber }}{% assign stepNumber = stepNumber | plus:1 %}. Healthcheck

The first page of the wizard will tell you if your environment is ready for passbolt. Solve any issues and click on
"Start configuration" when ready.

{% if product == 'pro' %}
{% include articles/figure.html url="/assets/img/help/2018/11/web-installer-pro-healthcheck.png" legend="wizard - healthcheck" width="586px" %}
{% else %}
{% include articles/figure.html url="/assets/img/help/2018/11/web-installer-ce-healthcheck.png" legend="wizard - healthcheck" width="586px" %}
{% endif %}

{% if product == 'pro' %}
### 2.{{ stepNumber }}{% assign stepNumber = stepNumber | plus:1 %}. Subscription key

At this step, the wizard will ask you for your subscription key. You should have received it by email soon after your online purchase.
Enter it in the box.

{% include articles/figure.html url="/assets/img/help/2018/11/web-installer-pro-subscription-key.png" legend="wizard - subscription key" width="586px" %}
{% endif %}

### 2.{{ stepNumber }}{% assign stepNumber = stepNumber | plus:1 %}. Database

This step is about telling passbolt which database to use. Enter the host name, port number, database name, username and password.

{% if product == 'pro' %}
{% include articles/figure.html url="/assets/img/help/2018/11/web-installer-pro-database.png" legend="wizard - database" width="586px" %}
{% else %}
{% include articles/figure.html url="/assets/img/help/2018/11/web-installer-ce-database.png" legend="wizard - database" width="586px" %}
{% endif %}

### 2.{{ stepNumber }}{% assign stepNumber = stepNumber | plus:1 %}. GPG key

In this section you can either generate or import a GPG key pair. This key pair will be used by passbolt API to authentify itself during the
authentication handshake process.

Generate a key if you don't have one.

{% if product == 'pro' %}
{% include articles/figure.html url="/assets/img/help/2018/11/web-installer-pro-server-key-generate.png" legend="wizard - generate a key pair" width="586px" %}
{% else %}
{% include articles/figure.html url="/assets/img/help/2018/11/web-installer-ce-server-key-generate.png" legend="wizard - generate a key pair" width="586px" %}
{% endif %}

Import a key if you already have one and you want your server to use it.

{% if product == 'pro' %}
{% include articles/figure.html url="/assets/img/help/2018/11/web-installer-pro-server-key-import.png" legend="wizard - import a key pair" width="586px" %}
{% else %}
{% include articles/figure.html url="/assets/img/help/2018/11/web-installer-ce-server-key-import.png" legend="wizard - import a key pair" width="586px" %}
{% endif %}

### 2.{{ stepNumber }}{% assign stepNumber = stepNumber | plus:1 %}. Mail server (SMTP)

At this stage, the wizard will ask you to enter the details of your SMTP server.

{% if product == 'pro' %}
{% include articles/figure.html url="/assets/img/help/2018/11/web-installer-pro-email.png" legend="wizard - smtp mail server details" width="586px" %}
{% else %}
{% include articles/figure.html url="/assets/img/help/2018/11/web-installer-ce-email.png" legend="wizard - smtp mail server details" width="586px" %}
{% endif %}

You can also test that your configuration is correct by using the test email feature at the right of your screen. Enter
the email address at which you want the wizard to send you a test email and click on "Send test email".

{% include articles/figure.html url="/assets/img/help/2018/04/wizard-test-email.png" legend="wizard - test smtp settings" width="300px" %}

### 2.{{ stepNumber }}{% assign stepNumber = stepNumber | plus:1 %}. Preferences

The wizard will then ask you what preferences you prefer for your instance of passbolt. The recommended defaults are already pre-populated
but you can also change them if you know what you are doing.

{% if product == 'pro' %}
{% include articles/figure.html url="/assets/img/help/2018/11/web-installer-pro-options.png" legend="wizard - preferences" width="586px" %}
{% else %}
{% include articles/figure.html url="/assets/img/help/2018/11/web-installer-ce-options.png" legend="wizard - preferences" width="586px" %}
{% endif %}

### 2.{{ stepNumber }}{% assign stepNumber = stepNumber | plus:1 %}. First user creation

You need to create the first admin user account. This first admin user is probably you, so enter your details and click on next.

{% if product == 'pro' %}
{% include articles/figure.html url="/assets/img/help/2018/11/web-installer-pro-first-user.png" legend="wizard - first user" width="586px" %}
{% else %}
{% include articles/figure.html url="/assets/img/help/2018/11/web-installer-ce-first-user.png" legend="wizard - first user" width="586px" %}
{% endif %}

### 2.{{ stepNumber }}{% assign stepNumber = stepNumber | plus:1 %}. Installation

That's it. The wizard has now enough information to proceed with the configuration of passbolt. Sit back and relax for a few seconds while
the configuration process is going on.

{% if product == 'pro' %}
{% include articles/figure.html url="/assets/img/help/2018/11/web-installer-pro-install.png" legend="wizard - installation" width="586px" %}
{% else %}
{% include articles/figure.html url="/assets/img/help/2018/11/web-installer-ce-install.png" legend="wizard - installation" width="586px" %}
{% endif %}

Your user account is now created. You will see a redirection page for a few second and then will be redirected
to the user setup process so that you can configure your user account.

{% if product == 'pro' %}
{% include articles/figure.html url="/assets/img/help/2018/11/web-installer-pro-completed.png" legend="wizard - completion and redirection" width="586px" %}
{% else %}
{% include articles/figure.html url="/assets/img/help/2018/11/web-installer-ce-completed.png" legend="wizard - completion and redirection" width="586px" %}
{% endif %}

## 3. Configure your administrator account

### 3.1. Download the plugin

Before continuing passbolt will require you to download its plugin. If you already have it installed you can go to the
next step.

### 3.2. Check the server identity

Passbolt will ask you to check the URL passbolt is associated with.

If you recognize the domain name, check the checkbox and then click "Next". It is a formality here, but it is a security
mesure that will help later your users to identify you passbolt instance.

{% include articles/figure.html url="/assets/img/help/2018/01/url-check.png" legend="Validation of the domain" width="450px" %}

### 3.3. Create a new key

Passbolt will ask you to create or import a key that will be later use to identify you and encrypt your passwords.

{% include articles/figure.html url="/assets/img/help/2018/11/plugin-registration-key-generate.png" legend="Generate a key" width="450px" %}

### 3.4. Choose a password

Your key needs to be protected by a password. Choose it wisely, it will be the gatekeeper to all your other passwords.

{% include articles/figure.html url="/assets/img/help/2018/01/set-passphrase.png" legend="setting a passphrase" width="450px" %}

### 3.5. Backup your key

This step is essential. Your key is the only way to access your account and passwords. If you lose this key (by breaking
or losing your computer and not having a backup for example), your encrypted data will be lost even if you remember your
passphrase.

{% include articles/figure.html url="/assets/img/help/2018/11/plugin-registration-backup.png" legend="backup your key" width="450px" %}

### 3.6. Define your security token

Choosing a color and a three character token is a secondary security mechanism that helps you to mitigate phishing
attacks. Each time you are performing a sensitive operation on passbolt, you should see this token.

{% include articles/figure.html url="/assets/img/help/2018/11/plugin-registration-security-token.png" legend="define your security token" width="450px" %}

### 3.6. That's it!

Your administrator account is configured. You will be redirected to the login page of passbolt. Enjoy!


{% include date/updated.html %}

{% include layout/col_end.html %}
{% include layout/col_start.html column="4 last push1" %}

{% include aside/pro-support.html %}

{% include layout/row_end.html %}
