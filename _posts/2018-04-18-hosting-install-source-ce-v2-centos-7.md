---
title: Install passbolt from scratch on CentOS 7
date: 2018-04-09 00:00:00 Z
description: How to install Passbolt CE on CentOS 7 from the source code.
card_title: CentOS 7 tutorial
card_teaser: Step by step guide to install passbolt on CentOS 7 
card_position: 3
icon: fa-server
categories: [hosting,install,ce]
sidebar: hosting
layout: default
slug: from-source
permalink: hosting/install/ce/centos-7.html
---

{% include layout/row_start.html %}
{% include layout/col_start.html column="7" %}

## System requirements

Spin up a new fresh server with CentOS 7. Make sure that it is up-to-date.

## Installation steps

### 1. Base packages
{% include hosting/install/tutorials/centos/install_base_packages.md
    package_manager="yum"
%}

### 2. Database installation
{% include hosting/install/tutorials/install_mariadb.md
    package_manager="yum"
%}

### 3. Webserver installation (Nginx)
{% include hosting/install/tutorials/install_nginx.md
    package_manager="yum"
%}

### 4. PHP installation
{% include hosting/install/tutorials/centos/install_php.md %}

### 5. Web server configuration
{% include hosting/install/tutorials/configure_nginx.md %}

### 6. Domain name setup
{% include hosting/install/tutorials/configure_local_domain.md
    editor="vi"
%}

### 7. Download passbolt source code
{% include hosting/install/tutorials/download_source_code.md %}

### 8. Generate an OpenPGP key
{% include hosting/install/tutorials/generate_pgp_key.md 
    package_manager="yum"
    webserver_user="nginx"
%}

### 9. Initialize the webserver gpg keyring
{% include hosting/install/tutorials/initialize_keyring.md 
    distribution_name="centos 7"
    webserver_user="nginx"
    home_directory="/var/lib/nginx"
%}

### 10. Set passbolt file permissions
{% include hosting/install/tutorials/configure_file_permissions.md 
    webserver_user="nginx"
    webserver_name="nginx"
%}

### 11. Install the dependencies
{% include hosting/install/tutorials/install_passbolt_dependencies.md %}

### 12. Create a passbolt configuration file
{% include hosting/install/tutorials/create_passbolt_configuration_file.md 
    editor_name="vi"
%}

### 13. Run the install script
{% include hosting/install/tutorials/install_passbolt.md %}

### 14. Set Selinux permissions
{% include hosting/install/tutorials/centos/configure_selinux.md %}

### 15. It's running
{% include hosting/install/tutorials/conclusion_step_1.md %}

## Going further

### 1. Setup the emails
{% include hosting/install/tutorials/configure_emails.md 
    webserver_user="nginx" 
%}

### 2. Configure https
{% include hosting/install/tutorials/ssl/configure_ssl.md 
    webserver_user="nginx" 
    webserver_name="nginx"
    editor_name="vi"
    %}

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
