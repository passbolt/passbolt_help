---
title: How can I enable or disable import / export plugins
slug: enable-disable-import-export-plugins
layout: faq
category: configure
permalink: /faq/configure/:slug
---

By default, the import and export plugins are enabled for all your users, which can be an issue for some admins.

## Disable the import or export plugin

It is quite simple. Just write the following configuration in `config/passbolt.php`, inside the main 'passbolt' section:

```
'plugins' => [
    'import' => [
        'enabled' => false,
    ],
    'export' => [
        'enabled' => false,
    ],
],
```

## Enable the import or export plugin

You can either remove the corresponding entries inside the plugins section, since the plugins are activated by default.
Otherwise, if you prefer it to be explicit, you can add the section below to your `config/passbolt.php` file, inside the main 'passbolt' section:

```
'plugins' => [
    'import' => [
        'enabled' => true,
    ],
    'export' => [
        'enabled' => true,
    ],
],
```