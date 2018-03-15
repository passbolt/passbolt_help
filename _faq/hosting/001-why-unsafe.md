---
title: Why do I see an unsafe mode banner in the footer?
slug: why-unsafe
layout: faq
category: hosting
tags: [troubleshoot]
permalink: /faq/hosting/:slug
date: 2017-03-03 00:00:00 Z
---
When running the site with debug mode on, or without enforcing https, your passbolt instance can
not be considered secure. These settings can be useful for example when doing some local testing or development,
but should not be used for production.

To disable the warning a passbolt administrator can edit your configuration to set `debug` to false and 
`passbolt.ssl.force` to true.
