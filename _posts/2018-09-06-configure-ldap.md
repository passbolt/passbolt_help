---
title: Configure Ldap plugin
date: 2018-12-04 00:00:00 Z
description: Configure Ldap plugin (directory sync)
icon: fa-address-book-o
categories: [configure,ldap]
sidebar: configure
layout: default
slug: setup
ogimage: /assets/img/help/2018/09/AD_ldap_overview.png
permalink: /:categories/:slug.html
redirect_from:
  - /configure/ldap
---

{% include layout/row_start.html %}
{% include layout/col_start.html column="7" %}

<img src="/assets/img/help/2018/09/AD_ldap_overview.png" alt="ldap illustration" style="margin: auto;"/>

{% include messages/warning.html
    content="**Important:** The LDAP connector will send an invitation email to all the users matching your configuration during a synchronization. If you are simply testing it, make sure not to perform an actual synchronization (use simulate sync instead), or disable the cron job to send emails first."
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

## Limitations

The Ldap plugin doesn’t support nested groups in the current version. This improvement will be added later,
once groups inside groups is supported by passbolt.

A delegated authentication (such as using a LDAP user password as replacement of the passphrase) is currently
not supported (and is not a trivial problem) but could still be considered in the future. If you are interested
in this feature you can join the discussion on the
[community forum](https://community.passbolt.com/t/as-a-user-i-can-login-using-my-organization-ldap-credentials/159).

The following improvements will also be shipped gradually and will be available soon:
- Test mode: the capability to test the configuration and mapping directly from the configuration screen.
- Report screens: the synchronization reports will be available in the admin workspace.

## How to use?

{% include messages/warning.html
    content="**Please note:** This guide explains how to configure the Ldap connector through the UI. For complex configurations (for example custom field mapping in openldap) you will need to [configure ldap directly through the configuration file](/configure/ldap/ldap-from-configuration-file)."
%}

### Activate the plugin

The plugin is deactivated by default. You need to activate it to be able to use it.
While logged in as an admin, click on the administration menu item in the top menu, and then click on "Users Directory"

{% include articles/figure.html
    url="/assets/img/help/2018/12/AD_directory_sync_settings_disabled.png"
    legend="Ldap directory settings screen (disabled)"
    width="660px"
%}

Click on the switch next to "Users Directory" to enable the plugin.

{% include articles/figure.html
    url="/assets/img/help/2018/12/AD_directory_sync_settings_enabled.png"
    legend="Ldap directory settings screen (enabled)"
    width="660px"
%}

You will need to fill the configuration parameters with your connection details before you can save the settings and
actually activate it.


### Configure the plugin

The available options are:

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
        Directory Type<br>
        <em>(required)</em>
        </td>
        <td>
        Choose here the type of your directory. Currently only Active Directory and OpenLdap are supported.
        </td>
        <td>
        <code>Active Directory</code>
        </td>
    </tr>
    <tr>
        <td>
        Domain<br>
        <em>(required)</em>
        </td>
        <td>
        The domain your directory is configured with.
        </td>
        <td>
        <code>mydomain.local</code>
        </td>
    </tr>
    <tr>
        <td>
        Server URL<br>
        <em>(required)</em>
        </td>
        <td>
        The full url to reach your server.
        </td>
        <td>
        <code>ldap://198.163.0.1:389</code>
        </td>
     </tr>
     <tr>
         <td>
         Username and password<br>
         <em>(required)</em>
         </td>
         <td>
         Username and password to authentify on your directory
         </td>
         <td>
         </td>
     </tr>
     <tr>
          <td>
          Base DN<br>
          <em>(required)</em>
          </td>
          <td>
          The base DN (default naming context) for the domain.
          </td>
          <td>
          <code>OU=OrgUsers,DC=mydomain,DC=local</code>
          </td>
     </tr>
     <tr>
        <td>
        Group path<br>
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
         User path<br>
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
           Group object class<br>
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
            User object class<br>
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
            Default admin<br>
            <em>(required)</em>
            </td>
            <td>
            Choose here the username of the passbolt admin user that will be used to perform the operations on behalf of the synchronization tools.
            <br><br>You can also create a dedicated admin user in passbolt if you want to be able to track more accurately the actions related to ldap.
            </td>
            <td>
            <code>passboltadmin@domain.com</code>
            </td>
        </tr>
        <tr>
            <td>
            Default group admin <br>
            <em>(required)</em>
            </td>
            <td>
            Choose here the username of the default group manager. It is the user that will be assigned as a group manager to all new groups created by ldap.
            </td>
            <td>
            <code>passboltadmin@domain.com</code>
            </td>
        </tr>
        <tr>
            <td>
            Groups parent group <br>
            <em>(optional)</em>
            </td>
            <td>
            Using this filter will list only groups that are part of the given parent group (recursively). Enter the parent group name.
            </td>
            <td>
            <code>MyGroupName</code>
            </td>
        </tr>
        <tr>
            <td>
            Users parent group <br>
            <em>(optional)</em>
            </td>
            <td>
            Using this filter will list only users that are part of the given parent group (recursively). Enter the parent group name.
            </td>
            <td>
            <code>MyGroupName</code>
            </td>
        </tr>
        <tr>
            <td>
            Enabled users only <br>
            <em>(optional)</em>
            </td>
            <td>
            Only for AD. Synchronize only the users that are enabled (=not disabled).
            </td>
            <td>
            </td>
        </tr>
      <tr>
           <td>
           Sync operations<br>
           <em>(optional)</em>
           </td>
           <td>
           By default, the synchronization will be done for all created / deleted users and groups in your directory and all edited group members. You can enable / disable some tasks here.
           <br><br>Default value: everything is enabled.
           </td>
           <td>
           </td>
        </tr>
  </tbody>
</table>

### Save configuration

Once the configuration is entered, do not forgetto save it by clicking on the "save settings" at the top. The configuration will be saved
only if passbolt managed to connect to your directory. If not, it will display an error message.

{% include articles/figure.html
    url="/assets/img/help/2018/12/AD_directory_sync_settings_saved.png"
    legend="Ldap directory settings have been saved"
    width="660px"
%}

### Test configuration and simulate sync

Once the settings have been saved, the buttons "simulate synchronize" and "synchronize" at the top have become clickable.

Before we actually do a real synchronization, we will first simulate one. Click on "simulate synchronize" and wait a few seconds. Once the simulation is complete,
a report such as the one below will be displayed.

{% include articles/figure.html
    url="/assets/img/help/2018/12/AD_directory_sync_simulation.png"
    legend="Ldap directory sync simulation"
    width="660px"
%}

In this report, you will be able to see what will actually happen when you will synchronize your directory for real. You will also be
able to take corrective measures before an error actually happens.

### First synchronization

To do the first synchronization, repeat the same process as above. Only, click on "synchronize" this time. A similar report to the one that was displayed during a simulate
will appear and let you know what happened exactly.

### How to synchronize my directory automatically?
To synchronize the changes automatically you will need to add a cron job on your server. We recommend to execute the job once a day, but you can choose as per your preference.
```bash
0 0 * * * su -c "/var/www/passbolt/bin/cake directory_sync all" -s /bin/bash www-data >> /var/log/cron.log 2>&1
```

## Configure ldap with SSL (ldaps)
If your configuration doesn't run out of the box with ldaps, you can refer to the [ldap with ssl](/configure/ldap-with-ssl) documentation in order to adjust your config or throubleshoot your issue.

{% include date/updated.html %}

{% include layout/col_end.html %}
{% include layout/col_start.html column="4 last push1" %}

{% include aside/pro-support.html %}

{% include layout/row_end.html %}
