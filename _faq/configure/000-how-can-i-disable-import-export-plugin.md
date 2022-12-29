---
title: How can I enable or disable import / export plugins
slug: enable-disable-import-export-plugins
layout: faq
category: configure
permalink: /faq/configure/:slug
---

By default, the import and export plugins are enabled for all your users, which can be an issue for some admins.

## Toggle the import or export plugin

You can either remove the corresponding entries inside the plugins section, since the plugins are activated by default.
Otherwise, if you prefer it to be explicit, you can add the section below to your `/etc/passbolt/passbolt.php` file:

```
return [
    /* Locate or add the passbolt section */
    'passbolt' => [
        /* Locate or add the plugins section */
        'plugins' => [
            'import' => [
                'enabled' => false,
            ],
            'export' => [
                'enabled' => false,
            ],
        ]
    ]
]
```