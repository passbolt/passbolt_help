---
title: Using Windows App
date: 2023-11-30 00:00:00 Z
description: How to use the Windows App
icon: fa-address-book-o
categories: [configure]
sidebar: configure
layout: default
slug: windows-app
permalink: /:categories/:slug.html
---
{% include layout/row_start.html %}
{% include layout/col_start.html column="7" %}

## Prerequisites

{% include messages/warning.html
    content="**Important:** The Windows application is currently in **BETA** mode. To use it, you need to enable the 'desktop' feature flag. This will allow all your users to access and configure the Passbolt desktop application from their user profiles"
%}

This feature flag can be enabled through different methods:
* Docker: Set the environment variable `PASSBOLT_PLUGINS_DESKTOP_ENABLED` to true.

* Configuration File: In `/etc/passbolt/passbolt.php`, add the following section:

```php
return [
  "passbolt" => [
    "plugins" => [
      "desktop" => [
        "enabled" => true
      ]
    ]
  ]
];
```


## How to download and install the application
Access the application by clicking on the link in your profile space. This [link](https://apps.microsoft.com/detail/9PFXS2WVKVPB?hl=en-US&gl=US){:target="_blank"} will redirect you to the Windows Store.

{% include articles/figure.html
    url="/assets/img/help/2023/12/desktop-app-profile.png"
    legend="Home Desktop app page from profile"
    width="660px"
    alt="windows app home in profile"
%}

## Import an existing passbolt account
To configure your account in the desktop application, you must transfer your private key from the browser extension to the desktop application.

### Getting started
After installing the application, you will see instructions on how to download your account kit via the web application. By clicking the 'Next' button, you will be guided to the process for uploading your account kit.

{% include articles/figure.html
    url="/assets/img/help/2023/12/desktop-app-get-started.png"
    legend="How to download account kit"
    width="660px"
    alt="How to download account kit"
%}

### Upload your account kit

{% include articles/figure.html
    url="/assets/img/help/2023/12/desktop-app-import.png"
    legend="Show account import page"
    width="660px"
    alt="Show account import page"
%}

### Verify account kit
Once the account kit is successfully uploaded, your account information, including your username and the URL of the Passbolt server, will be displayed on the screen. 

Please review this information carefully before proceeding. If you find any discrepancies, you can return to the upload screen by clicking on 'Import another account'.

{% include articles/figure.html
    url="/assets/img/help/2023/12/desktop-app-import-verif.png"
    legend="How to download account kit"
    width="660px"
    alt="How to download account kit"
%}

Once your passphrase is validated, the setup of your account will be complete, and you will be able to access the password workspace.

### How can I reset my windows application 
To unlink an existing account and set up a new one, first download the current entries from the Credentials Manager. To do this, use the search bar to find 'Credential Manager' and select it.

{% include articles/figure.html
    url="/assets/img/help/2023/12/desktop-app-import-rename.png"
    legend="Remove credentials in Windows Credential Manager"
    width="660px"
    alt="Remove credentials in Windows Credential Manager"
%}
To remove an existing account from the application, delete the 'account-metadata' and 'account-secret' entries. This action will reset the application, enabling you to import a new account.

### Can I Use Windows Hello?
Currently, we do not support Windows Hello due to certain security concerns that are under review. We are investigating the most secure implementation methods and will inform you as soon as a plan is established.

### How to Report Issues to Help Us Improve the Product
As mentioned earlier, the app is currently in beta and is primarily intended for reporting issues that you encounter while using it. To report issues, please visit the following link: Passbolt Community - Windows Application Developer Edition v0.5.0.



{% include date/updated.html %}

{% include layout/col_end.html %}
{% include layout/col_start.html column="4 last push1" %}

{% include aside/pro-support.html %}

{% include layout/row_end.html %}
