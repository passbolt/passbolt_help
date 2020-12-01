---
title: Update passbolt server component (v1)
date: 2017-01-20 00:00:00 Z
description: How to update passbolt v1 on your server.
categories: [hosting, update]
card_teaser: Update passbolt instances installed with install scripts
card_title: Update passbolt v1 install scripts
icon: fa-server
sidebar: hosting
layout: default
slug: update-v1
permalink: /:categories/:slug.html
---

{% include layout/row_start.html %}
{% include layout/col_start.html column="7" %}

## Which update process to follow?

Each passbolt release follows the concept of [Semantic Versioning](http://www.semver.org). Given a version number MAJOR.MINOR.PATCH, we increment as follow:

* **PATCH** version when we make backwards-compatible bug fixes. So let's say you are running passbolt v1.3.2 and the latest one available is v1.3.7 you will need to perform a patch update.
* **MINOR** version when we add functionality in a backwards-compatible manner. Similarly say you have passbolt v1.2.0 installed and the latest version available is v1.3.2, you will need to perform a minor version update.
* **MAJOR** version when incompatible API changes are made. You get the deal for major version update: that would mean going from v1.3.7 to v2.0.0 for example.

{% include hosting/update/version-helper.md %}
{% include hosting/update/major-update.md %}

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

While we try to provide backward compatibility by providing safe fallbacks for new configuration files items,
it is recommended that you review your configuration files when the default changes.

For example let's take the scenario where you are running v1.1.0 and you want to upgrade to v1.3.2.
We can check that both the app and core files have changed as follow:

```bash
$ git diff --name-status v1.3.2 v1.1.0 | grep 'php.default'
M	app/Config/app.php.default
M	app/Config/core.php.default
```

#### 4. Make a backup of your database

Prior to running a database migration script it is very important that you perform a backup, in case something
goes wrong. You can do this using mysqldump, with for example:

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

As you can see above, the migration script for v1.2.0 will also be applied automatically. Sometimes also,
for example with the introduction of the anonymous usage statistics, the migration script can prompt you for input.

#### 6. Put your site back online!

As an administrator (or as any user in debug mode) you can go and check on the /healthcheck page to see if
your instance configuration is looking good.

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

{% include date/updated.html %}

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
