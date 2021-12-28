---
title: My secret key and passphrase are compromised, what do I do?
slug: compromised-secret-key
layout: faq
category: security
permalink: /faq/security/:slug
date: 2021-12-15 00:00:00 Z
---

{% include messages/warning.html
    content="<b>Warning:</b> Use of a revocation certificate is not yet implemented."
%}

The secret key is in itself encrypted with a passphrase and cannot be used without it.

If your passphrase has also been compromised, you will need to start a new with a fresh key and use your 
revocation certificate ([see other FAQ in this section](/faq/security/revocation-certificate)).
