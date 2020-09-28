---
title: Configure Ldap plugin
date: 2018-09-07 00:00:00 Z
description: Configure Ldap plugin (directory sync) from configuration file
icon: fa-address-book-o
categories: [configure,ldap]
sidebar: configure
layout: default
slug: ldap-from-configuration-file
ogimage: /assets/img/help/2018/09/AD_ldap_overview.png
permalink: /:categories/:slug.html
redirect_from:
  - /configure/ldap-configuration-from-file
---

{% include layout/row_start.html %}
{% include layout/col_start.html column="7" %}

{% include messages/warning.html
    content="**Important:** The Ldap plugin is part of [Passbolt Pro](https://www.passbolt.com/pricing/pro) only and is not available in the Community Edition."
%}

## Introduction

### What is it?

The goal of the directory synchronization tool, also called LDAP connector, is to provide a way for a passbolt
administrator to synchronize a list of groups and users, as well as the associated group memberships.

Currently the connector supports two types of directory: OpenLDAP and Microsoft Active Directory. In the future
we will also support other non ldap based user directories such as Google API User Directory.


### How does it work?

In a nutshell this part of the application will try to keep passbolt and a directory in sync with a minimal
involvement of the administrators and group managers. However if an action is not possible, such as, deleting
a user that is the sole password owner, the process triggers will trigger relevant email notifications so
that a human can solve it manually. An admin can also alternatively tell passbolt to ignore a record in the
next synchronization round, if the issue does not need to be resolved.

### Requirements

The directory synchronization tools requires the [php-ldap extension](https://secure.php.net/manual/en/book.ldap.php)
to be present on the server. If you built your own server the way you install
[php-ldap](https://packages.debian.org/stretch/php-ldap) will depend on your system flavor.

On Debian using nginx for example you can do:
```bash
sudo apt-get install php-ldap
sudo service nginx restart
```

Make sure the ldap extension is present in the php-cli.ini file.
You should add `extension=ldap.so` if it is not already present:
```bash
$ php -i |grep php\.ini
Configuration File (php.ini) Path => /etc/php/7.0/cli
Loaded Configuration File => /etc/php/7.0/cli/php.ini
$ nano /etc/php/7.0/cli/php.ini
```

For testing purpose, it might be handy to have some [ldap utilities](https://wiki.debian.org/LDAP/LDAPUtils)
installed on your system. On Debian you can use ldapsearch for example to search for and display entries:
```bash
sudo apt-get install ldap-utils
ldapsearch -b'dc=example,dc=com' -x
```

The plugin relies on a 3rd party library called ldaptools which you will need to install as part of your passbolt
update or install. You can get it the same way than other php dependencies using composer:
```bash
cd /var/www/passbolt
git pull origin master
composer install
./bin/cake passbolt migrate
```

To run, the ldap plugin needs to have at least one active admin user existing inside passbolt.

## How to use?

{% include messages/warning.html
    content="**Please note:** This guide explains how to configure the Ldap connector through the configuration file. For simpler configurations, you can [configure Ldap through the UI](/configure/ldap)."
%}

### Activate the plugin

The plugin is deactivated by default. You need to activate it to be able to use it.

To do so, simply copy the file `/config/ldap.default.php` into `ldap.php`.
```bash
cd /var/www/passbolt
mv ./config/ldap.default.php ./config/ldap.php
```

### Configure the plugin

Edit the file `ldap.php` and modify the configuration to match your needs. The available options are:


<table class="table-parameters">
  <thead>
    <tr>
        <th width="25%">Parameter</th>
        <th width="33%">Details</th>
        <th>Example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
        <td>
        defaultUser<br>
        <em>(required)</em>
        </td>
        <td>
        Enter here the username of the passbolt admin user that will be used to perform the operations on behalf of the synchronization tools.
        <br><br>You can also create a dedicated admin user in passbolt if you want to be able to track more accurately the actions related to ldap.
        </td>
        <td>
        <code>passboltadmin@domain.com</code>
        </td>
    </tr>
    <tr>
        <td>
        defaultGroupAdminUser <br>
        <em>(required)</em>
        </td>
        <td>
        Enter here the username of the default group manager. It is the user that will be assigned as a group manager to all new groups created by ldap.
        </td>
        <td>
        <code>passboltadmin@domain.com</code>
        </td>
    </tr>
    <tr>
        <td>
        fieldsMapping <br>
        <em>(optional)</em>
        </td>
        <td>
        In case of OpenLdap, the default mapping between the passbolt and directory record fields might not be the one that will work for you. In this section you can redefine the default mapping for your directory.
        </td>
        <td><pre>'openldap' => [
  'user' => [
     'id' => 'entryUUID',
     'firstname' => 'firstName',
     'lastname' => 'lastName',
     'username' => 'mail',
     'created' => 'created',
     'modified' => 'modified',
  ],
  'group' => [
     'id' => 'entryUUID',
     'name' => 'cn',
     'created' => 'created',
     'modified' => 'modified',
     'users' => 'members',
  ],
],</pre></td>
     </tr>
     <tr>
         <td>
         groupObjectClass<br>
         <em>(optional)</em>
         </td>
         <td>
         For OpenLdap only, you can specify here the name of the group object class that you are using in your openldap.
         <br><br>Default value: groupOfUniqueNames
         </td>
         <td>
         <code>groupOfUniqueNames</code>
         </td>
     </tr>
     <tr>
          <td>
          userObjectClass<br>
          <em>(optional)</em>
          </td>
          <td>
          For OpenLdap only, you can specify here the name of the user object class that you are using in your openldap.
          <br><br>Default value: inetOrgPerson
          </td>
          <td>
          <code>inetOrgPerson</code>
          </td>
     </tr>
     <tr>
        <td>
        groupPath<br>
        <em>(optional)</em>
        </td>
        <td>
        If your groups are located in a different path than your base DN, you can specify here the complementary path.
        <br><br>Default value: none
        </td>
        <td><code>OU=MyGroups</code></td>
     </tr>
     <tr>
         <td>
         userPath<br>
         <em>(optional)</em>
         </td>
         <td>
         If your users are located in a different path than your base DN, you can specify here the complementary path.
         <br><br>Default value: none
         </td>
         <td><code>OU=MyUsers</code></td>
      </tr>
      <tr>
           <td>
           jobs<br>
           <em>(optional)</em>
           </td>
           <td>
           By default, the synchronization will be done for all created / deleted users and groups in your directory and all edited group members. You can enable / disable some tasks here.
           <br><br>Default value: see example
           </td>
           <td><pre>'jobs' => [
    'users' => [
        'create' => true,
        'delete' => true,
    ],
    'groups' => [
        'create' => true,
        'update' => true,
        'delete' => true,
    ],
],
</pre></td>
        </tr>
        <tr>
             <td>
             ldap<br>
             <em>(required)</em>
             </td>
             <td>
             This contains the ldap connection details such as the domain name, username, password, base DN, servers, port, etc..
             The options in the config file are self explanatory.
             </td>
             <td><pre>'ldap' => [
  'domains' => [
      // Active directory.
     'mydomain.local' => [
          'domain_name' => 'mydomain.local',
          'username' => 'johndoe',
          'password' => 'Compl!c4t3dP4ssw0rD',
          'base_dn' => 'OU=OrgUsers,DC=mydomain,DC=local',
          'servers' => ['35.225.111.241'],
          'port' => 389,
          'use_ssl' => false,
         'ldap_type' => 'ad',
      ],
   ],
]</pre></td>
          </tr>
  </tbody>
</table>

### Test the connection

Once the configuration options have been entered in ldap.php, you can test that the connection is working and that the objects are retrieved correctly from your directory:
```bash
./bin/cake directory_sync test
```

An output similar to the one below should be observed:

{% include articles/figure.html
    url="/assets/img/help/2018/09/AD_ldap_command_test.png"
    legend="Screenshot of directory synchronization test"
    width="750px"
%}

**What you should pay attention to:**
- Make sure that you can see the same groups and users as the ones available in your directory.
- Make sure that each user has an email address. If not, they will not validate in passbolt.
- Make sure that each group is shown with the right number of users.

### First synchronization
Before we actually do a real synchronization, we will first simulate one:
```bash
./bin/cake directory_sync all --dry-run
```
This command will simulate what will happen when the synchronization will be done for real.

{% include articles/figure.html
    url="/assets/img/help/2018/09/AD_ldap_command_dry_run.png"
    legend="Screenshot of directory synchronization sync in dry run"
%}

If the result displayed is similar to what you expect to happen, you can proceed with the actual synchronization:
```bash
./bin/cake directory_sync all
```

{% include articles/figure.html
    url="/assets/img/help/2018/09/AD_ldap_command_sync.png"
    legend="Screenshot of directory synchronization running"
%}

{% include messages/notice.html
    content="Please note that a user can be added into a group only once his account is activated."
%}

### Run it automatically
To synchronize the changes automatically you will need to add a cron job. We recommend to execute the job once a day, but you can choose as per your preference.
```bash
0 0 * * * su -c "/var/www/passbolt/bin/cake directory_sync all" -s /bin/bash www-data >> /var/log/cron.log 2>&1
```

### Ignoring records
It is possible for you to individually ignore synchronization of some of your directory records and/or some users/groups in passbolt, especially when there are some problematics records you do not want to keep in sync. Such records and the command to ignore them will be displayed in the reports.

{% include articles/figure.html
    url="/assets/img/help/2018/09/AD_ldap_ignore_option.png"
    legend="Screenshot of directory synchronization with items to ignore"
%}

```bash
 ./bin/cake directory_sync ignore-create --id=55872084-ed6f-4e96-b401-479dd86ca357 --model=DirectoryEntries
```

You can also view all the records that are being ignored.

{% include articles/figure.html
    url="/assets/img/help/2018/09/AD_ldap_command_view_ignored.png"
    legend="Screenshot of directory synchronization view ignored command"
%}

```
./bin/cake directory_sync ignore-list
```

You can also stop ignoring them:
```
./bin/cake directory_sync ignore-delete --id=16789f75-2cf7-4755-9bd9-634d1ff42240 --model=DirectoryEntries
```


{% include date/updated.html %}

{% include layout/col_end.html %}
{% include layout/col_start.html column="4 last push1" %}

{% include aside/pro-support.html %}

{% include layout/row_end.html %}
