---
title: How to update my subscription key
slug: update-evaluation-subscription-key
layout: faq
category: hosting
permalink: /faq/hosting/:slug
date: 2019-05-27 00:00:00 Z
---

For Passbolt version 3.2 and higher, you can update your subscription key on the web interface directly, [using the administration panel](#using-administration-panel).

For Passbolt version prior to 3.2, the command line is the only way to update your subscription key, [as described below](#from-command-line).

## Using administration panel

Navigate to **administration > Subscription** and click on the **"Update key"** button.

{% include articles/figure.html
    url="/assets/img/screenshots/update-subscription-key-1.jpg"
    legend="Update subscription key administration screen"
%}

A pop-up will appear and you will be able to import your new subscription key

{% include articles/figure.html
    url="/assets/img/screenshots/update-subscription-key-2.jpg"
    legend="Choose file popup in subscription key administration screen"
    width="500px"
%}

You are now able to see your subscription details:

{% include articles/figure.html
    url="/assets/img/screenshots/update-subscription-key-3.jpg"
    legend="Subscription details in subscription key administration screen"
%}

## From command line

### Get ready
All the commands provided below should be done from inside your passbolt directory.

```bash
$ cd /var/www/passbolt
```

{% include messages/notice.html
    content="<b>Notice:</b> If you installed passbolt using the Debian package, or
    are using the passbolt VM (OVA) run the commands from <code>/usr/share/php/passbolt</code>."
%}

### Steps
Passbolt Pro currently does not provide a UI to manage subscription keys.

To update your subscription key, you need to replace your previous subscription key with the new one.
In passbolt, the subscription key is stored in `/var/www/passbolt/config/license`

To replace the existing subscription key with the new one:

```bash
$ cp -u path_to_your_new_subscription_key config/license
```
{% include messages/notice.html
    content="<b>Notice:</b> If you installed passbolt using the Debian package, or
    are using the passbolt VM (OVA) the license file is found here: <code>/etc/passbolt/license</code>."
%}

To check if the operation was successful and if the new subscription key is valid:

```bash
$ bin/cake passbolt license_check
```

If your key is valid, this command will display the passbolt logo and the subscription key details, as in the example below:

```bash
root@c6a4f37958b4:/var/www/passbolt# ./bin/cake passbolt license_check

     ____                  __          ____
    / __ \____  _____ ____/ /_  ____  / / /_
   / /_/ / __ `/ ___/ ___/ __ \/ __ \/ / __/
  / ____/ /_/ (__  |__  ) /_/ / /_/ / / /
 /_/    \__,_/____/____/_.___/\____/_/\__/

 Open source password manager for teams
---------------------------------------------------------------

Thanks for choosing Passbolt Pro
Below are your subscription key details

Customer id:	xxxxxx
Users limit:	150 (currently: 43)
Valid from:	May 6, 2020
Expires on:	May 6, 2021 (in 385 days)
```
