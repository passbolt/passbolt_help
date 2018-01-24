---
title: What data is encrypted in passbolt?
slug: what-is-encrypted
layout: faq
category: security
permalink: /faq/security/:slug
date: 2017-01-20 00:00:00 Z
---
There are three state of data to consider:

- The data in motion (on the wire),
- The data in use (in the memory or file system on the server or client side)
- The data at rest (on the filesystem when the power is off).

**For the data in use**, it is only passwords that are encrypted. For example, your username, the comments 
or the list of people you are sharing a password with are not encrypted using OpenPGP, and are stored 
in plaintext both on the client and server side. Obviously passwords can be available in decrypted 
form at some point (the later the better), but they will never be stored in plain text on the filesystem 
on either the client or server side.

**For the data in motion**, e.g. on the transport layer level, all the communication are encrypted using SSL. 
The strength of the security at that level is not controlled by the passbolt solution itself but rather 
a combination of other factors such as the level of security of the organization issuing the certificate 
and the operating system configuration chosen by the hosting provider.

**For the data at rest**, for most of the clients and servers, it is also possible to encrypt the database at 
the [file system](https://en.wikipedia.org/wiki/List_of_cryptographic_file_systems) level as well. 
This will add another encryption layer that can be useful, for example, in the case where the machine running 
passbolt is seized or stolen.
