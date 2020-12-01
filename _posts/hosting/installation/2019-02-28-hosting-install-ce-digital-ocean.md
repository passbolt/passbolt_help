---
title: Install Passbolt CE Digital Ocean
date: 2019-03-01 00:00:00 Z
description: How to install Passbolt CE Digital Ocean
card_title: Digital Ocean
card_teaser: Use passbolt CE on Digital Ocean
card_position: 7
icon: fa-server
categories: [hosting,install,ce]
sidebar: hosting
layout: default
slug: digital-ocean
permalink: hosting/install/ce/digital-ocean
---

{% assign product = 'ce' %}

{% include layout/row_start.html %}
{% include layout/col_start.html column="7" %}

Since march 2019 it is possible to install passbolt easily directly from Digital Ocean.
Digital Ocean is an hosting provider based in the USA. In order to run passbolt
you will need the following:
- A Digital Ocean account
- A domain name for example passbolt.yourdomain.com
- Some level of access to point your DNS records to the new passbolt server

# Create the droplet in Digital Ocean

The first step is to login in [Digital Ocean](https://cloud.digitalocean.com) (or create and setup an account).
You can then head to Marketplace and search for passbolt.

It is recommended at the point that you have domain name (or subdomain). It is not mandatory but
highly encouraged. Since passbolt web extension is tied to a domain name it will be easier to get
it right upfront rather than using the IP address and changing the proper domain name later.

Go to the marketplace and search for passbolt, select the card and click on create
droplet.

{% include articles/figure.html
    url="/assets/img/help/2019/03/digital-ocean/001_create_droplet.png"
    legend="Create droplet"
%}

Choose a plan and the associated server matching at least the following requirements:
- 1 GB
- 1 CPU

{% include articles/figure.html
    url="/assets/img/help/2019/03/digital-ocean/002_choose_plan.png"
    legend="Create droplet"
%}

Select your preferred datacenter region, and select additional options.
You can upload your SSH keys to login into the machine once it's created.
Choose a hostname and click create.

Grab a cup of coffee and get ready.

Once created you can see the droplet was assigned an IP address.
You can copy it and check if it is reachable and up and running.

{% include articles/figure.html
    url="/assets/img/help/2019/03/digital-ocean/005_highlight_copy_ip.png"
    legend="Copy the IP address"
%}

## Setup your DNS to point to the droplet

Next you need to point your domain DNS to this machine IP address. Please check
[Digital Ocean DNS documentation](https://www.digitalocean.com/docs/networking/dns/)
or your domain name provider help for this.

Wait until the DNS propagation is done. To check if it is done, ping your domain and it should
resolve to this droplet IP. You can also check the propagation using
[online tools](https://www.whatsmydns.net/).

## Login in the machine and get the mysql credentials
Ssh into this droplet as root:
```
ssh root@this_droplet_ip
```
or ssh root@your_domain.com. Use this same ssh connection to gather the randomly generated mysql
credentials in `/root/.mysql_credentials` you will need them for the web installation wizard.

## Launch the install script and follow the instructions.
A script will be launched, choose the automatic configuration option and let the script guide you.
Once you’re done, point your browser to the DNS assigned to the droplet: https://your_domain.com
and you will then see the web installation wizard.


{% include articles/figure.html
    url="/assets/img/help/2019/03/digital-ocean/007_domain.png"
    legend="Provide the DNS name for the SSL script"
%}

{% include articles/figure.html
    url="/assets/img/help/2019/03/digital-ocean/008_select_auto.png"
    legend="Choose auto for letsencrypt setup"
%}

The installation wizard will ask you for a Mariadb/Mysql host. The droplet has mariadb-server
installed by default so you could use `127.0.0.1` as the mysql hostname and use the randomized
user, password and database created during the droplet boot. You will find these credentials on
`/root/.mysql_credentials`

{% include date/updated.html %}

{% include layout/col_end.html %}
{% include layout/col_start.html column="4 last push1" %}

{% include aside/ce-install-community-forum-cta.md %}

{% include aside/ce-stay-up-to-date.md %}

{% include layout/row_end.html %}
