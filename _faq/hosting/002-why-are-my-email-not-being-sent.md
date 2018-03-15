---
title: Why are my emails not being sent?
slug: why-email-not-sent
layout: faq
category: hosting
tags: [troubleshoot]
permalink: /faq/hosting/:slug
date: 2018-03-14 00:00:00 Z
---
This can come from a variety of reason, such as you are not using the right credentials, or you 
are not connecting to the right port for the selected protocol. 

While by default passbolt is quite discrete on why a given configuration is not working you use the following
command to send a test email and get more debug information:

```shell
$ ./bin/cake passbolt send_test_email --recipient=youremail@domain.com
```
