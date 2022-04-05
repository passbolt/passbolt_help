---
title: Why are my emails not being sent?
slug: why-email-not-sent
layout: faq
category: hosting
tags: [troubleshoot]
permalink: /faq/hosting/:slug
date: 2018-03-14 00:00:00 Z
---

This can come from a variety of reasons, here are the most common ones.

### Reason 1: Configuration issues

There may be an issue with some of the [SMTP configuration](/configure/email/setup)
items, such as credentials, or the hostname, or the port for the selected protocol.

By default passbolt is quite discrete on why a given configuration is not working. You can use the following
command to send a test email and get more debug information (replace **www-data** with **nginx** if you are running a RHEL-like server, or **wwwrun** in case you are using openSUSE):

```shell
$ sudo -H -u www-data bash -c "/usr/share/php/passbolt/bin/cake passbolt send_test_email --recipient=youremail@domain.com"
```

If this fails you should double check what is the recommended configuration in your email provider documentation.
You can also ask on the community forum in case another user have a working configuration for the same provider.

### Reason 2: Email notifications are disabled in the config

Another reason could be because email notifications are disabled in your configuration.
You can review such settings in the administration panel, when you are logged in as an administrator in passbolt.

{% include articles/figure.html
    url="/assets/img/help/2019/05/AD_email_notification_send_settings.png"
    legend="Email Notification Settings - Email Delivery"
%}

### Reason 3: The cron system is stopped

Passbolt uses a system of email queue to send email notifications.
A dedicated cron job (located in `/etc/cron.d/passbolt-{ce|pro}-server`) runs every minute to go through the queue and send emails.

So if you manage to send the test email but are not receiving notifications (such as registration emails),
one of the reason may be that the cron service is stopped.

You can verify if the service is running by executing this command:

```
sudo systemctl status cron.service
```

You can also verify cronjobs activity with this command:

```
sudo journalctl -fu cron.service
```
### Reason 4: There is an issue with the database schema related to the email queue

If after an update you are getting error messages such as:
```
Exception: SQLSTATE[42S22]: Column not found: 1054 Unknown column ‘EmailQueue.to’ in ‘field list’ ...
```

It is possible that the wrong version of the data model is stored in the cache. This can happen
if the cache is not cleared after an install or an update. You can try clearing out the cache to solve this(replace **www-data** with **nginx** if you are running a RHEL-like server, or **wwwrun** in case you are using openSUSE).

```
sudo -H -u www-data bash -c "/usr/share/php/passbolt/bin/cake cache clear_all"
```

### Reason 5: Gmail SMTP-Relay not accepting 'localhost' as EHLO

If you are using Google's G-Suite SMTP Relay, you need to ensure you have set public IP address of your passbolt server in the EmailTransport section of `/etc/passbolt/passbolt.php`:

```
(...)
    'EmailTransport' => [
        'default' => [
            ...
            'client' => 'ip.add.re.ss'
            ...
        ],
    ],
(...)
```

In case you are using docker, you will have the `EMAIL_TRANSPORT_DEFAULT_CLIENT` environment variable:

```
EMAIL_TRANSPORT_DEFAULT_CLIENT= 'ip.add.re.ss'
```