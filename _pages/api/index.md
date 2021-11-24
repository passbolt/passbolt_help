---
title: Passbolt API Documentation
date: 2021-01-07 14:00:00 Z
layout: api
category: api
slug: introduction
permalink: /api
---

## Introduction

This document describes passbolt server component API. The API works over HTTPS in a REST fashion, so it is
language framework agnostic. You can integrate passbolt services into your existing workflow using the
toolset of your choice.

## Getting Started

To get started with the passbolt REST API (hereafter referred to as “The API”) you need at least:
* A running passbolt server instance.
* A passbolt user account if you want to access protected data.
* Some basic understanding of how [public key cryptography](https://en.wikipedia.org/wiki/Public-key_cryptography) works.
* An [OpenPGP-compliant](https://www.openpgp.org/about/) library to build with.

## Base URL

The API is served over HTTPS. All URLs referenced in the documentation omit the base url
of your passbolt installation domain such as:
<code>https://&lt;passbolt.your-organization.com&gt;</code>.

## Response format
### Response envelope

The API returns data in an envelope with “header” and “body” properties.
The “header” contains response metadata like response code, server_time, error messages etc.
The “body” contains the actual payload.

For example, requesting a single resource by id will result in something like:

{% include api/json/resources/resources-create-success.md %}

{% include messages/notice.html
    content="<b>Notice:</b> The <code>title</code> under header is deprecated and will be removed in future release.
    Similarly, the <code>code</code> is only indicated to improve readability for an administrator when debugging and should
    not be relied on."
%}

### Error responses

An unsuccessful operation will result in an error response. The error response will follow the same scheme as above
with the presence of both “header” and “body” properties, only this time the status in the header will be set to
<code>error</code> instead of <code>success</code>. The response body will contain the error details.

{% include api/json/resources/resources-create-error.md %}

As you can see, for validation errors, the response body contains two keys, “name” and “secrets” as they failed
some validation rules. Further, they also have their own json object with a key ("_required") that represents the
validation rule that failed and a value with the actual error message (“A name is required”).

### API Versions

Historically, passbolt supported two different formats for interacting with the API. ***API version 1 is now deprecated***.
The passbolt server component supports only API version 2 and all calls are assumed to be version 2 - no parameter is needed
to designate this.

You can see the complete [changelog](https://github.com/passbolt/passbolt_api/blob/master/CHANGELOG.md) on the official
the [repository](https://github.com/passbolt/passbolt_api).

# Encryption and decryption

Security and privacy are the biggest concerns for a password manager and passbolt is no exception.
Passbolt's solution uses end-to-end encryption and the encryption and decryption is always done on the client. The server
is mainly used to take care of relational data integrity and storage.

Passbolt uses [public key cryptography](https://en.wikipedia.org/wiki/Public-key_cryptography)
and [OpenPGP](https://www.openpgp.org/about/) specifically. This guide will assume you are familiar with these concepts.

{% include articles/figure.html
    url="/assets/img/diagrams/howitworks.svg"
    legend="password exchange using passbolt"
%}

### Which OpenPGP implementation should I use?
There are several ways you can use OpenPGP. The most popular option is to use [GnuPG](https://gnupg.org)
(directly or via [GPGME](https://www.gnupg.org/software/gpgme/index.html)) or another implementation in your
favorite language.

There are various [language libraries](https://www.gnupg.org/software/libraries.html) available such as:
 - [OpenPGP.js](https://openpgpjs.org/): JavaScript alone (used by passbolt extension / cli)
 - [PHP GnuPG](https://www.php.net/manual/en/book.gnupg.php): PHP with GnuPG (used by passbolt server)
 - [OpenPGP.php](https://github.com/singpolyma/openpgp-php): PHP alone (used by passbolt server).
 - [gpgme.js](https://github.com/mailvelope/gpgmejs): JavaScript for GPGME
 - [GPGME Python](http://files.au.adversary.org/crypto/gpgme-python-howto.html): Python with GnuPG.
 - [PGPy](https://github.com/SecurityInnovation/PGPy/): Python alone.

You can find additional libraries on [openpgp.org](https://www.openpgp.org/software/developer/).

### Working with OpenPGP Keys

At the time of installation the passbolt server administrator generates an OpenPGP key pair and stores it in
the server keyring. Similarly, clients (such as the passbolt browser extension) generate a pair of keys during the setup.
At the end of the setup the client stores its secret key locally and send the public key to the server.

When authenticated, it is possible for a user to gather other user's public keys, in order to share passwords with them.
Prior to sending sensitive data, secrets must be encrypted using the recipient's public key (e.g. another user, for example) and signed using the sender’s public key.

This serves two purposes:
1. Privacy by encrypting the data and
2. Authenticity by confirming the identity of the sender.

### Accessing passbolt server public key

The passbolt server public key is required during the “verify” step of the authentication. This step allows the
client to verify the server identity, for example to prevent the unlikely scenario where the domain was seized.
Your passbolt server broadcasts its public key at /auth/verify.json:

```
GET /auth/verify.json
```
{% include api/json/auth/auth-verify-get-success.md %}
