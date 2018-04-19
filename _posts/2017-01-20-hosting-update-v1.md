---
title: Update passbolt server component (v1)
date: 2017-01-20 00:00:00 Z
description: How to update passbolt v1 on your server.
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

* **PATCH** version when we make backwards-compatible bug fixes. So let's say you are running passbolt v1.3.2 and the latest one available is v1.3.7 you will need to perform a patch update.
* **MINOR** version when we add functionality in a backwards-compatible manner. Similarly say you have passbolt v1.2.0 installed and the latest version available is v1.3.2, you will need to perform a minor version update.
* **MAJOR** version when incompatible API changes are made. You get the deal for major version update: that would mean going from v1.3.7 to v2.0.0 for example.

## Where to find the latest release version number?

You can find information about which version is the latest in the [release notes](<?php echo Router::url('/release/notes',true); ?>). It is generally a good idea to check these notes before running an update. You can also find it on the official [GIT repository](https://github.com/passbolt/passbolt_api/blob/master/app/Config/version.php).

## Where to find the version number for a given installation?

You can check `app/Config/version.php` to know the version number for your local instance. You can also hover on the _<span class="visuallyhidden">heart</span>_ icon at the bottom right corner of any passbolt screen. The first item is the server version, the second the one from the browser extension.

{% include figure.html
    url="/assets/img/help/2017/12/AN_footer_version_help.png"
    legend="footer version helper"
    width="210px"
%}

## Major update

Please see the following documentation to [Update from v1 to v2](/hosting/upgrade)

## Minor update

Every now and again some releases will introduce some database and/or configuration files changes. Here is a step by step guide on how to perform a minor update.

#### 1. Take your site down
Create a temporary webserver configuration to redirect all the requests to a maintenance page. You can find resources how to do this online: [here is an example for apache](http://stackoverflow.com/questions/21709026/apache-enable-maintenance-mode-across-all-virtual-hosts) .

#### 2. Get the latest release
```bash
$ git fetch
$ git checkout tags/v1.x.x
```

#### 3. Review the configuration files

While we try to provide backward compatibility by providing safe fallbacks for new configuration files items, it is recommended that you review your configuration files when the default changes.

For example let's take the scenario where you are running v1.1.0 and you want to upgrade to v1.3.2\. We can check that both the app and core files have changed as follow:
```bash
$ git diff --name-status v1.3.2 v1.1.0 | grep 'php.default'
M	app/Config/app.php.default
M	app/Config/core.php.default
```

#### 4. Make a backup of your database

Prior to running a database migration script it is very important that you perform a backup, in case something goes wrong. You can do this using mysqldump, with for example:
```bash
$ mysqldump -u[user] -p[pass] db > /path/to/backup.sql
```

#### 5. Run the migration script

To see if a database schema migration script is available you can run the following command:

```bash
$ ./app/Console/cake Migrations.migration status
Cake Migration Shell
---------------------------------------------------------------
Application

Current version:
  #1465367816 1465367816_Migration_1.1.0
Latest version:
  #1479926461 1479926461_Migration_1.3.0
---------------------------------------------------------------
```

In this case we can see that a migration is needed, so we run the following:

```bash
$ ./app/Console/cake Migrations.migration run all
Cake Migration Shell
---------------------------------------------------------------
Running migrations:
  [1474629203] 1474629203_Migration_1.2.0 (2016-09-23 16:43:23)
      > Changing field "uri" from table "resources".

  [1479926461] 1479926461_Migration_1.3.0 (2016-11-24 00:11:01)

Allow sending anonymous usage statistics? (y/n)
[n] > y
---------------------------------------------------------------
All migrations have completed.
```

As you can see above, the migration script for v1.2.0 will also be applied automatically. Sometimes also, for example with the introduction of the anonymous usage statistics, the migration script can prompt you for input.

#### 6. Put your site back online!

As an administrator (or as any user in debug mode) you can go and check on the /healthcheck page to see if your instance configuration is looking good.

## Patch update

Performing a patch update is the easiest. All you need to do is checkout the latest version.
```bash
$ git pull origin master
```

You can also checkout a specific version and use branches to switch versions. For example for version 1.0.9:

```bash
$ git fetch --tags
$ git checkout tags/v1.0.9 -b tags/v1.0.9
```

Optionally, you can login as an administrator and check the status on the healthcheck page

{% include figure.html
    url="/assets/img/screenshots/AD_healthcheck.jpg"
    legend="Example of healthcheck screen"
%}

**(Optional) If you run into some issues:**

* Make a copy of the errors messages
* Checkout the previous working version using git
* Drop the database and load your backup data to restore to a previously working version.
* Send us an [email](mailto:contact@passbolt.com) with the details of the error or fill in a bug report using github, using as much details as possible such as your OS, php, mysql environment versions.


{% include updated.html %}

{% include layout/col_end.html %}
{% include layout/col_start.html column="4 last push1" %}

{% include aside/message.html
    class="tldr notice"
    content="Are you experiencing issues when updating passbolt?"
    link="https://community.passbolt.com/c/installation-issues"
    ask="Ask the community!"
    button="primary"
%}
{% include aside/message.html %}
{% include layout/row_end.html %}