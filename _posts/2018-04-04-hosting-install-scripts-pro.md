---
title: Installation with install scripts
card_title: Install scripts
card_teaser: Install passbolt easily with the install scripts
card_position: 1
date: 2018-04-09 00:00:00 Z
description: Install passbolt using the install scripts
icon: fa-server
categories: [hosting,install,pro]
sidebar: hosting
layout: default
slug: install-scripts
permalink: /:categories/:slug.html
---

{% include layout/row_start.html %}
{% include layout/col_start.html column="7" %}

The install scripts are shell scripts that are designed to do the heavy lifting for you. They will configure your
operating system to be passbolt ready and will take care of the web server (Nginx), database (MariaDb), PHP, SSL and GPG keyring configuration.

## System requirements
The install scripts will work on any of these servers:
- Debian 9 (Etch)
- CentOS 7

{% include warning.html
    content="**Please note:** It is important that you use a bare server with no other services or tools already installed on it. The install scripts could potentially damage any existing data on your server."
%}

## Server configuration steps
### 1. Create a web server matching the requirements.
Spin up a new fresh server with one of the supported linux distributions (Debian 9 or CentOS 7). You can do this on a bare-metal server, on a virtual machine or a container (docker).
In this tutorial, we are using a the official Debian 9 image on Vagrant.

### 2. Download the installation script
You can download the installation scripts from these respective urls:
- Debian 9: [https://www.passbolt.com/pro/download/installers/debian/latest](https://www.passbolt.com/pro/download/installers/debian/latest) ([Checksum](https://www.passbolt.com/pro/download/installers/debian/latest-checksum))
- Centos 7: [https://www.passbolt.com/pro/download/installers/centos/latest](https://www.passbolt.com/pro/download/installers/centos/latest) ([Checksum](https://www.passbolt.com/pro/download/installers/centos/latest-checksum))

```shell
$ wget -O ./passbolt-pro-installer-debian-9.tar.gz https://www.passbolt.com/pro/download/installers/debian/latest
```
{% include figure.html
    url="/assets/img/help/2018/04/download-install-script.png"
    legend="download the install script"
    width="586px"
%}

### 3. Execute the installation script
First, unpack it:
```
tar zxvf ./passbolt-pro-installer-debian-9.tar.gz
```
Then, execute it:
```
sudo ./passbolt_pro_debian_installer.sh
```
{% include figure.html
    url="/assets/img/help/2018/04/execute-install-script.png"
    legend="execute the install script"
    width="586px"
%}

### 4. Answer the questions
The install script will ask you a few questions to adapt the environment to your needs.

**Do you want to install a local mariadb server on this machine?**
- Yes: if you are not planning on using an external mysql / mariadb server. 
- No: if you have a mysql / mariadb server installed somewhere else and want to use it for passbolt.

The script will then ask you for the database details: root password, database name, and password.

**Hostname**

To configure your webserver, the script needs to know under which hostname or ip it is going to run. Enter here
the address (domain, hostname or ip) at which you are planning to access your passbolt after installation

**SSL Setup**

- manual: (recommended) choose manual if you have your own ssl certificates.
- auto: this option will issue a SSL certificate automatically through [Let's Encrypt](https://letsencrypt.org). Use this option 
only if you have a domain name that is reachable by the outside world, or it will not work.
- none: choose this option if you don't want your webserver to run https. This is not recommended.

**GnuPG entropy**
On virtualized environments GnuPG happen to find not enough entropy to generate a key. Therefore, Passbolt cannot not run properly.
The script needs to know if you want to fix this by installing Haveged in order to speed up the entropy generation on your system. 
Haveged is a useful too to fix entropy issues, however it can have security implications. Make sure you understand the risks before answering yes to this question.

For each question, depending on your answer, some more precisions can be asked. Just answer the questions and go with the flow.

At the end, the install script will confirm you that the environment has been configured and will ask you to point your browser to 
the hostname or ip address previously entered.

{% include figure.html
    url="/assets/img/help/2018/04/end-install-script.png"
    legend="completion of the install script"
    width="586px"
%}

## Your server is now ready to run passbolt

The next step is to configure passbolt. You can do this quite easily with the configuration wizard.

<a href="/hosting/install/wizard" class="button primary">Configure passbolt with the wizard</a>

{% include updated.html %}

{% include layout/col_end.html %}
{% include layout/col_start.html column="4 last push1" %}

{% include aside/pro-support.html %}

{% include layout/row_end.html %}
