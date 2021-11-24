---
title: How to increase auto logout time?
slug: how-to-increase-auto-logout-time
layout: faq
category: hosting
permalink: /faq/hosting/:slug
date: 2021-11-23 00:00:00 Z
---

By default passbolt uses the PHP session duration setting to define when the auto logout should
kick in. If the default session timeout is too short for you and your user you can extend it in 
the PHP configuration. 

See the directive 
[session.gc-maxlifetime](https://www.php.net/manual/en/session.configuration.php#ini.session.gc-maxlifetime)

In order to change this number you must locate your `php.ini` file. Its location depends on your
operating system and php versions.

For example on Debian or Ubuntu if you are using Nginx and PHP 7.4 it will be in
`/etc/php/7.4/fpm/php.ini` but the easy way to find it is to execute this command:

```
$ grep -lr session.gc_maxlifetime /etc/ | grep fpm
/etc/php/7.4/fpm/php.ini
```

Once located replace the `1440` timout value in seconds with for example `2700` for 45 minutes:
```
; After this number of seconds, stored data will be seen as 'garbage' and
; cleaned up by the garbage collection process.
; http://php.net/session.gc-maxlifetime
session.gc_maxlifetime = 2700
```
