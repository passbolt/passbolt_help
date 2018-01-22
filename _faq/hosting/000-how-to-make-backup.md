---
title: How to make passbolt backups
slug: how-to-backup
layout: faq
category: hosting
permalink: /faq/hosting/:slug
date: 2017-01-20 00:00:00 Z
---
You can (and should) make a backup of your secret key during the setup after generating a new key. 
You can also do that at any moment when you are logged in the application by going to the profile section.

At the moment it is not possible to download a backup of your passwords from the client side. However if you 
have email notification enabled you should receive a copy of your encrypted passwords by email, which can act as 
a backup.

However on the server side you can make a regular backup of the entire database. Several methods are available 
and there is plenty of [documentation available online](http://dev.mysql.com/doc/refman/5.7/en/backup-methods.html).

See also [How to make passbolt server backup](/hosting/backup).
