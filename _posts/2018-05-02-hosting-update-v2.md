---
title: Update passbolt server component (v2)
date: 2018-05-02 00:00:00 Z
description: How to update passbolt v2 on your server.
category: hosting
sidebar: hosting
layout: default
slug: update
permalink: /:categories/:slug.html
---

{% include layout/row_start.html %}
{% include layout/col_start.html column="7" %}

## Which update process to follow?

Each passbolt release follows the concept of [Semantic Versioning](http://www.semver.org). Given a version number MAJOR.MINOR.PATCH, we increment as follow:

* **PATCH** version when we make backwards-compatible bug fixes. So let's say you are running passbolt v2.0.2 and the latest one available is v2.0.3 you will need to perform a patch update.
* **MINOR** version when we add functionality in a backwards-compatible manner. Similarly say you have passbolt v2.0.3 installed and the latest version available is v2.1.0, you will need to perform a minor version update.
* **MAJOR** version when incompatible API changes are made. You get the deal for major version update: that would mean going from v1 to v2 for example.

{% include hosting/update/version-helper.md %}
{% include hosting/update/major-update.md %}

## Minor update

Every now and again some releases will introduce some database and/or configuration files changes. 
Here is a step by step guide on how to perform a minor update. Just replace the version numbers where necessary.

#### 1. Take your site down

Create a temporary webserver configuration to redirect all the requests to a maintenance page. 
You can find resources how to do this online: [here is an example for apache](http://stackoverflow.com/questions/21709026/apache-enable-maintenance-mode-across-all-virtual-hosts) .

#### 2. Get the latest release

You can also pull the latest version directly from master:
```bash
$ git pull origin master
```

You can also pull specific versions:
```bash
$ git fetch
$ git checkout tags/v2.3.0
```

#### 3. Update the libraries

Some libraries are not packaged with the software but need to be updated using composer, based on 
what is recommended in the composer.lock. This file is provided by passbolt.

```bash
$ composer install
```

#### 4. Run the migration script

You can run the database migration scripts as follow:
```bash
$ ./bin/cake passbolt migrate --backup
```

As you can see with the command above you can optional ask the application to create a database backup.
This is usefull in case you run into any issues with the new version and need to revert to an old but working one.

This backup will be placed in `./tmp/cache/database/backup/backup_timestamp.sql`.

#### 5. Put your site back online!

As an administrator (or as any user in debug mode) you can go and check on the /healthcheck page to see 
if your instance configuration is looking good.

## Patch update

Performing a patch update is the easiest. All you need to do is checkout the latest version.
```bash
$ git pull origin master
```

You can also checkout a specific version and use branches to switch versions. For example for version 2.0.3:

```bash
$ git fetch --tags
$ git checkout tags/v2.3.0 -b tags/v2.3.0
```

{% include hosting/update/in-case-of-issues.md %}

{% include date/updated.html %}

{% include layout/col_end.html %}
{% include layout/col_start.html column="4 last push1" %}

{% include aside/message.html
    class="tldr"
    content="Are you still using passbolt v1? Check out the previous version of this article."
    link="/hosting/update-v1"
    ask="See previous version"
%}

{% include aside/message.html
    class="tldr notice"
    content="Are you experiencing issues when updating passbolt?"
    link="https://community.passbolt.com/c/installation-issues"
    ask="Ask the community!"
    button="primary"
%}
{% include aside/message.html %}
{% include layout/row_end.html %}