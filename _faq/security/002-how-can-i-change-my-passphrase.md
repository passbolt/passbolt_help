---
title: How can I change my passphrase?
slug: change-passphrase
layout: faq
category: security
permalink: /faq/security/:slug
date: 2017-01-20 00:00:00 Z
---

Currently it is not possible to change your passphrase from within passbolt itself (we do have an item in our backlog for this, ref. PASSBOLT-1283).

However there is a non-trivial workaround if you really need it:

* In passbolt, go to your profile and export your secret key
* Import it in a GPG keyring (see. [Macos](https://gpgtools.org/), [Windows](https://scand.com/products/wingpg/), [Linux](https://www.gnupg.org/)).
* From there you can update your passphrase
* Export your key again
* Perform an "account recovery" within passbolt with the new updated key.

