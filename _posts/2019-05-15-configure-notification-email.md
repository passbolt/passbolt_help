---
title: How to configure email notification settings for your organization
date: 2019-05-22 00:00:00 Z
description: How to configure email notification settings for your organization
icon: fa-key
categories: [configure,notification]
sidebar: configure
layout: default
slug: email
permalink: /configure/notification/email
redirect_from: 
    - /configure/notification/email.htm
    - /configure/notifications/email
---

{% include layout/row_start.html %}
{% include layout/col_start.html column="7" %}

Some actions in passbolt, such as a user sharing a password with someone else, trigger an email notification. As passbolt admin, you can control which events result in an email notification and which events are ignored. Similarly you can control whether or not a piece of information is included in those notification emails.

## Passbolt events that trigger email notification

<table class="table-parameters">
  <thead>
    <tr>
      <th>Event</th>
      <th>Recipients</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>When a comment is posted on a password.</td>
      <td>All the users having access to the given password.</td>
    </tr>
    <tr>
      <td>When a password is created.</td>
      <td>The user creating the password.</td>
    </tr>
    <tr>
      <td>When a password is shared.</td>
      <td>The users gaining access to the given password.</td>
    </tr>
    <tr>
      <td>When a password is updated.</td>
      <td>All the users having access to the given password.</td>
    </tr>
    <tr>
      <td>When a password is deleted.</td>
      <td>All the users who had access to the given password.</td>
    </tr>
    <tr>
      <td>When a new user is invited.</td>
      <td>The invited user.</td>
    </tr>
    <tr>
      <td>When users try to recover their passbolt account.</td>
      <td>The user trying to recover their account.</td>
    </tr>
    <tr>
      <td>When a group is deleted.</td>
      <td>Group's members.</td>
    </tr>
    <tr>
      <td>A user is added to a group.</td>
      <td>The user getting added.</td>
    </tr>
    <tr>
      <td>A user is removed from a group.</td>
      <td>The user getting removed.</td>
    </tr>
    <tr>
      <td>When user roles change in a group.</td>
      <td>The affected users.</td>
    </tr>
    <tr>
      <td>When members of a group change.</td>
      <td>The group's manager.</td>
    </tr>
  </tbody>
</table>

## Information that can be shown/hidden from the outgoing emails.

<table class="table-parameters">
  <thead>
    <tr>
      <th>Config</th>
      <th>Show / Hide what</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Username</td>
      <td>Resource username</td>
    </tr>
    <tr>
      <td>URI</td>
      <td>Resource URI/URL</td>
    </tr>
    <tr>
      <td>Encrypted Secret</td>
      <td>PGP encrypted password</td>
    </tr>
    <tr>
      <td>Description</td>
      <td>Resource description</td>
    </tr>
    <tr>
      <td>Comment</td>
      <td>Comment content</td>
    </tr>
  </tbody>
</table>

## Default behavior

By default all the settings are `true` which means all the notifications are set to be broadcasted and all the information blocks are set to be shown.

## Configuring Email Notification Settings

You can configure email notification settings using either the admin interface, config files or environment variables. If multiple settings providers are used the settings in the admin interface will override the one used in files. Similarly the settings in files will override environment variables.


## Using admin user interface

Since v2.10 a user interface is provided for administrators to setup email notification settings. Click on “administration” in the top menu, then "Email Notifications" on the left menu.

The settings are divided into two sections.

### Email Delivery
These settings control whether or not an email is sent on a given event.

{% include articles/figure.html
    url="/assets/img/help/2019/05/AD_email_notification_send_settings.png"
    legend="Email Notification Settings - Email Delivery"
%}

### Email content visibility

These settings control whether a piece of information is included in the emails sent.

{% include articles/figure.html
    url="/assets/img/help/2019/05/AD_email_notification_show_settings.png"
    legend="Email Notification Settings - Email Content Visibility"
%}


## Using Environment variables

You can use the following environment variables to control the email delivery settings. They are all boolean and accepts 1 or 0. Setting the variable to 1 (one) will mean that email will be sent for that event and setting it 0 (zero) will ignore the event.

<table class="table-parameters">
  <thead>
    <tr>
      <th>Event</th>
      <th>Environment variable</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>When a comment is posted on a password.</td>
      <td>PASSBOLT_EMAIL_SEND_COMMENT_ADD</td>
    </tr>
    <tr>
      <td>When a password is created.</td>
      <td>PASSBOLT_EMAIL_SEND_PASSWORD_CREATE</td>
    </tr>
    <tr>
      <td>When a password is shared.</td>
      <td>PASSBOLT_EMAIL_SEND_PASSWORD_SHARE</td>
    </tr>
    <tr>
      <td>When a password is updated</td>
      <td>PASSBOLT_EMAIL_SEND_PASSWORD_UPDATE</td>
    </tr>
    <tr>
      <td>When a password is deleted</td>
      <td>PASSBOLT_EMAIL_SEND_PASSWORD_DELETE</td>
    </tr>
    <tr>
      <td>When a new user is invited.</td>
      <td>PASSBOLT_EMAIL_SEND_USER_CREATE</td>
    </tr>
    <tr>
      <td>When users try to recover their passbolt account.</td>
      <td>PASSBOLT_EMAIL_SEND_USER_RECOVER</td>
    </tr>
    <tr>
      <td>When a group is deleted.</td>
      <td>PASSBOLT_EMAIL_SEND_GROUP_DELETE</td>
    </tr>
    <tr>
      <td>A user is added to a group.</td>
      <td>PASSBOLT_EMAIL_SEND_GROUP_USER_ADD</td>
    </tr>
    <tr>
      <td>A user is removed from a group.</td>
      <td>PASSBOLT_EMAIL_SEND_GROUP_USER_DELETE</td>
    </tr>
    <tr>
      <td>When user roles change in a group.</td>
      <td>PASSBOLT_EMAIL_SEND_GROUP_USER_UPDATE</td>
    </tr>
    <tr>
      <td>When members of a group change.</td>
      <td>PASSBOLT_EMAIL_SEND_GROUP_MANAGER_UPDATE</td>
    </tr>
  </tbody>
</table>

Similarly, for changing the email content visibility, you can use the following environment variables . They are all boolean and accepts 1 or 0. Setting the variable to 1 (one) will mean that information will be included in outgoing mails and setting it to 0 (zero) will result in not including that.

<table class="table-parameters">
  <thead>
    <tr>
      <th>Show/Hide</th>
      <th>Environment variable</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Resource username</td>
      <td>PASSBOLT_EMAIL_SHOW_USERNAME</td>
    </tr>
    <tr>
      <td>Resource URI/URL</td>
      <td>PASSBOLT_EMAIL_SHOW_URI</td>
    </tr>
    <tr>
      <td>PGP encrypted password</td>
      <td>PASSBOLT_EMAIL_SHOW_SECRET</td>
    </tr>
    <tr>
      <td>Resource description</td>
      <td>PASSBOLT_EMAIL_SHOW_DESCRIPTION</td>
    </tr>
    <tr>
      <td>Comment content</td>
      <td>PASSBOLT_EMAIL_SHOW_COMMENT</td>
    </tr>
  </tbody>
</table>



When you using docker to set these environment variable you can pass them as arguments,
like other variables such as the database name, for example:

```
$ docker run --name passbolt \
             -p 80:80 \
             -p 443:443 \
             -e PASSBOLT_EMAIL_SHOW_COMMENT=0 \
             -e PASSBOLT_EMAIL_SHOW_DESCRIPTION=0 \
             -e PASSBOLT_EMAIL_SEND_COMMENT_ADD=0 \
             -e PASSBOLT_EMAIL_SEND_PASSWORD_CREATE=0 \
```

## Using config file

Email notification settings can also be managed by updating the `config/passbolt.php` file in your install directory. These settings live in the `email` key under `passbolt`. 

```
'passbolt' => [
    'email' => [
        // For Email Delivery configs
        'send' => [
            'comment' => [
              'add' => false
            ],
            'password' => [
              'create' => 'false'
            ]
        ],
        // For content visibility configs
        'show' => [
            'comment' => false,
            'description' => false
        ]
    ]
]
```

If a config variable doesn't exist in your config file, it's default value will be picked. 

You can use the following config variables to control the email delivery settings. They are all boolean and accepts `true` or `false`. Setting the variable to `true` will mean that email will be sent for that event and setting it `false` will ignore the event.

<table class="table-parameters">
  <thead>
    <tr>
      <th>Event</th>
      <th>Config variable</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>when a comment is posted on a password.</td>
      <td><code>passbolt.email.send.comment.add</code></td>
    </tr>
    <tr>
      <td>when a password is created.</td>
      <td><code>passbolt.email.send.password.create</code></td>
    </tr>
    <tr>
      <td>when a password is shared.</td>
      <td><code>passbolt.email.send.password.share</code></td>
    </tr>
    <tr>
      <td>when a password is updated</td>
      <td><code>passbolt.email.send.password.update</code></td>
    </tr>
    <tr>
      <td>when a password is deleted</td>
      <td><code>passbolt.email.send.password.delete</code></td>
    </tr>
    <tr>
      <td>when a new user is invited.</td>
      <td><code>passbolt.email.send.user.create</code></td>
    </tr>
    <tr>
      <td>when users try to recover their passbolt account.</td>
      <td><code>passbolt.email.send.user.recover</code></td>
    </tr>
    <tr>
      <td>when a group is deleted.</td>
      <td><code>passbolt.email.send.group.delete</code></td>
    </tr>
    <tr>
      <td>a user is added to a group.</td>
      <td><code>passbolt.email.send.group.user.add</code></td>
    </tr>
    <tr>
      <td>a user is removed from a group.</td>
      <td><code>passbolt.email.send.group.user.delete</code></td>
    </tr>
    <tr>
      <td>when user roles change in a group.</td>
      <td><code>passbolt.email.send.group.user.update</code></td>
    </tr>
    <tr>
      <td>when members of a group change.</td>
      <td><code>passbolt.email.send.group.manager.update</code></td>
    </tr>
  </tbody>
</table>

Similarly, for changing the email content visibility, you can use the following config variables . They are all boolean and accepts `true` or `false`. Setting the variable to `true` will mean that information will be included in outgoing mails and setting it to `false` will result in not including that.

<table class="table-parameters">
  <thead>
    <tr>
      <th>Show/Hide</th>
      <th>Variable name</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Resource username</td>
      <td><code>passbolt.email.show.username</code></td>
    </tr>
    <tr>
      <td>Resource URI/URL</td>
      <td><code>passbolt.email.show.uri</code></td>
    </tr>
    <tr>
      <td>PGP encrypted password</td>
      <td><code>passbolt.email.show.secret</code></td>
    </tr>
    <tr>
      <td>Resource description</td>
      <td><code>passbolt.email.show.description</code></td>
    </tr>
    <tr>
      <td>Comment content</td>
      <td><code>passbolt.email.show.comment</code></td>
    </tr>
  </tbody>
</table>

{% include date/updated.html %}

{% include layout/col_end.html %}
{% include layout/col_start.html column="4 last push1" %}

{% include aside/pro-support.html %}

{% include layout/row_end.html %}
