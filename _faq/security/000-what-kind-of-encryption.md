---
title: What kind of encryption does passbolt use?
slug: encryption-tech
layout: faq
category: security
permalink: /faq/security/:slug
date: 2017-01-20 00:00:00 Z
---
Passbolt servers never have access to your passwords in clear text. Passwords are encrypted on the client 
side using a browser extension. The browser extension uses OpenPGP, a standard which provides a combination 
of strong public-key and symmetric cryptography. The private secret key used to decrypt your password is 
itself encrypted using a passphrase (aka your master password). On the client side passbolt uses 
[OpenPGP.js](https://www.passbolt.com/openpgpjs.org) as a foundation for all its cryptographic functionalities.

On the server side passbolt uses both the [GnuPG Php Extension](http://php.net/manual/en/ref.gnupg.php) and 
[openpgp-php](https://github.com/singpolyma/openpgp-php) in order to perform public key 
validation and to support the GPGAuth authentication protocol. By default the solution uses SSL to encrypt 
all communication between the server and the browser.
