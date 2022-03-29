---
title: Install Passbolt CE Digital Ocean
date: 2019-03-01 00:00:00 Z
description: How to install Passbolt CE Digital Ocean
card_title: Digital Ocean
card_teaser: Use passbolt CE on Digital Ocean
card_position: 6
icon: fa-digitalocean
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

## 1. Create the droplet in Digital Ocean

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

## 1.1. Setup your DNS to point to the droplet

Next you need to point your domain DNS to this machine IP address. Please check
[Digital Ocean DNS documentation](https://www.digitalocean.com/docs/networking/dns/)
or your domain name provider help for this.

Wait until the DNS propagation is done. To check if it is done, ping your domain and it should
resolve to this droplet IP. You can also check the propagation using
[online tools](https://www.whatsmydns.net/).

### 1.2. Setup HTTPS (optional, but highly recommended):

If you are planning to use this droplet instance in production, it is highly recommended to setup SSL. There are two main methods described below:

- [Auto (Using Let's Encrypt)](/configure/https/{{ product }}/digital-ocean/auto.html)
- [Manual (Using user-provided SSL certificates)](/configure/https/{{ product }}/debian/manual.html)

{% include hosting/install/wizard/server.md databaseSection="hosting/install/wizard/database.md" %}

{% include hosting/install/wizard/admin.md %}

{% include date/updated.html %}

{% include layout/col_end.html %}
{% include layout/col_start.html column="4 last push1" %}

{% include aside/ce-install-community-forum-cta.md %}

{% include aside/ce-stay-up-to-date.md %}

{% include layout/row_end.html %}
