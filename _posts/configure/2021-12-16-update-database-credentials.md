---
title: Update my database credentials
date: 2021-12-16 00:00:00 Z
description: Update my database credentials
icon: fa-address-book-o
categories: [configure,database]
sidebar: configure
layout: default
slug: credentials
permalink: /:categories/:slug.html
---

{% include layout/row_start.html %}
{% include layout/col_start.html column="7" %}

## With package installation (Debian, Ubuntu, RPM)

Open **/etc/passbolt/passbolt.php** file and edit the **Datasources** block:

```
(...)
    // Database configuration.
    'Datasources' => [
        'default' => [
            'host' => '127.0.0.1',
            'port' => '3306',
            'username' => 'passbolt',
            'password' => 'password',
            'database' => 'passboltdb',
        ],
    ],
(...)
```

Save and quit.

## From source installation

It is the same block to edit than the package installation, but passbolt configuration file is located on **/var/www/passbolt/config/passbolt.php**

## With docker installation

Database credentials are set in environment variables and you need to edit them for each container:

For mariadb container:

```
MYSQL_DATABASE: "passboltdb"
MYSQL_USER: "passbolt"
MYSQL_PASSWORD: "very-strong-password"
```

For passbolt container:

```
DATASOURCES_DEFAULT_DATABASE: "passboltdb"
DATASOURCES_DEFAULT_USERNAME: "passbolt"
DATASOURCES_DEFAULT_PASSWORD: "very-strong-password"
```

{% include date/updated.html %}

{% include layout/col_end.html %}
{% include layout/col_start.html column="4 last push1" %}

{% include aside/pro-support.html %}

{% include layout/row_end.html %}
