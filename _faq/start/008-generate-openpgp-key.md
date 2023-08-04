---
title: How to generate an OpenPGP key
slug: generate-openpgp-key
layout: faq
category: start
permalink: /faq/start/:slug
date: 2022-07-28 00:00:00 Z
---

## Requirements

In order to follow this procedure, ensure you meet with the following minimum requirements:

- An access to a linux terminal machine;
- The OpenPGP package installed on the linux machine;
- The OpenPGP key to generate requirements: Algorithm, strength ...

## Generate a new OpenPGP key pair

{% include hosting/install/warning-gpg-key-server-generation.html %}

Execute the following command to generate a new OpenPGP key pair.

```shell
gpg --full-generate-key
```

This command will run an interactive wizard that will help you define the key settings:

1. Select the key type, by instance: *RSA*.
2. If RSA was chosen, select the keysize, by instance for a strong key: *3072*.
3. Select the expiration time, by instance for "no expiry": *0*. Note that key expiration is not well handled by passbolt, set an expiration date only if you know what you are doing.
4. Confirm the key type information.
5. Enter a name, by instance: *Ada Lovelace*.
6. Enter an email, by instance: *ada.lovelace@mydomain.tld*.
7. Enter a comment, it is optional. It will only help you to identify a key in the keyring if similar name or email chosen.
8. Confirm the key meta information.
9. If you are creating an Organization Account Recovery key pair set a passphrase, if this is for the server GPG key pair do not set a passphrase

Once the key generated, the key will be stored in the keyring of the user you authenticated with and OpenPGP will
output the details of the newly generated key. 

```shell
public and secret key created and signed.

pub   rsa3072 2022-08-04 [SC]
      F5B94A730D636A18815046C1408B779FE1951A9A
uid                      Ada Lovelace <ada.lovelace@mydomain.tld>
sub   rsa3072 2022-07-28 [E]
```

The output contains a 40 characters long identifier (*F5B94A730D636A18815046C1408B779FE1951A9A*) that represents the key fingerprint,
note it down, it will be useful later to identify the key in the keyring.

## Export an OpenPGP key pair

### Export an OpenPGP public key

Execute the following command to export a public key having *F5B94A730D636A18815046C1408B779FE1951A9A* as fingerprint from
the OpenPGP keyring into a file in armor format.

```shell
gpg --armor --export F5B94A730D636A18815046C1408B779FE1951A9A > public.key
```

### Export an OpenPGP private key

Execute the following command to export a private key having *F5B94A730D636A18815046C1408B779FE1951A9A* as fingerprint from
the OpenPGP keyring into a file in armor format.

```shell
gpg --armor --export-secret-keys F5B94A730D636A18815046C1408B779FE1951A9A > private.key
````
