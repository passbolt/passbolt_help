---
title: Configure LDAP plugin with SSL (ldaps)
date: 2020-02-07 00:00:00 Z
description: Configure LDAP plugin with ssl (ldaps)
icon: fa-address-book-o
categories: [configure,ldap]
sidebar: configure
layout: default
slug: ldap-with-ssl
ogimage: /assets/img/help/2018/09/AD_ldap_overview.png
permalink: /:categories/:slug.html
redirect_from:
  - /configure/ldap-with-ssl
---

{% include layout/row_start.html %}
{% include layout/col_start.html column="7" %}

## Introduction

To run LDAPS your LDAP server must offer a valid SSL certificate to the client which in this case that client is the passbolt server.
It is also required that the SSL certificate is trusted by your passbolt instance.

There are two ways of obtaining your SSL certificate, listed below.

### Your LDAP server is offering a SSL certificate obtained by a public Certificate Authority

If your SSL certificate has been obtained through a public and well known SSL certificate authority such as [Let's encrypt](https://letsencrypt.org/) your certificate would
be automatically trusted by the passbolt instance unless otherwise specified by your SSL provider.

Most of the time in this scenario your passbolt instance will not require any extra configuration.

### Your LDAP server is offering a SSL certificate obtained from a private Certficate Authority

Some organizations run LDAP on a private network on premises. In these scenarios it is very common that your organization has a private SSL certificate authority that
generates SSL certificates valid only on the private network.

If this is your scenario you probably will need a CA certificate to trust the private SSL certificate offered by your LDAP server if the LDAP SSL certificate is not chained correctly.

If the LDAP SSL certificate is not chained correctly meaning that it is not offering both the CA certificate and SSL certificate on connection you must obtain and upload the CA certificate
to your passbolt instance.

{% include articles/figure.html
    url="/assets/img/help/2020/01/AD_ldaps_ssl_certificate_error.png"
    legend="LDAP with ssl - certificate error message"
    width="660px"
%}

## Configure passbolt server to trust a private LDAPS certificate

### Step 1: ping the server

The first step is to understand what is causing the issue and be sure that it's related to a certificate issue.

We first try to ping the server and see if it goes through.

```bash
ping your_ldap_server.com
```

If it does not go through, check that there is a corresponding entry for your domain / server ip in `/etc/hosts`. If it's not there add it.

If it goes through, we will then try to execute a similar ldap query to what passbolt does using ldapsearch.

### Step 2: Connect with ldapsearch


```bash
ldapsearch -x -D "username" -W -H ldaps://your_ldap_server.com -b "dc=domain,dc=com" -d 9
```

Do not forget to replace the 'username', 'your_ldap_server.com' 'domain' and 'com' variables with the real ones.

If after this command is executed you see your objects returned, it means that the LDAPS connection is going through and that
there must be an issue with the parameters you entered in passbolt LDAP plugin. You should check them again and make sure that they are alright.

If this command returns something as displayed below, then you most likely have a LDAPS certificate issue.

```bash
root@cee4a6876f55:/var/www/passbolt# ldapsearch -x -D "ada" -W -H ldaps://your_ldap_server.com -b "dc=passbolt,dc=local" -d 9
ldap_url_parse_ext(ldaps://your_ldap_server.com)
ldap_create
ldap_url_parse_ext(ldaps://your_ldap_server.com:636/??base)
Enter LDAP Password:
ldap_sasl_bind
ldap_send_initial_request
ldap_new_connection 1 1 0
ldap_int_open_connection
ldap_connect_to_host: TCP your_ldap_server.com:636
ldap_new_socket: 3
ldap_prepare_socket: 3
ldap_connect_to_host: Trying 34.77.243.127:636
ldap_pvt_connect: fd: 3 tm: -1 async: 0
attempting to connect:
connect success
ldap_err2string
ldap_sasl_bind(SIMPLE): Can't contact LDAP server (-1)
```

If that's the case, the good news is that it's quite easy to fix. The issue is that the client is not trusting the certificate provided by the server.
Let's fix this by moving forward to the next step.


### Step 3: Download a correctly chained SSL certificate

Openldap requires usually the entire chained certificate. We have developed a quick utility that aims to help retrieve all the parts of a ldaps certificate and bundle them together.
You can access this tool [here](https://github.com/passbolt/ldaps_cert_util)

Follow the README instructions, retrieve your certificate and move to step 2.

### Step 4: tell openldap to use the right certificate

In Debian:

```bash
nano /etc/ldap/ldap.conf
```

*Note that the ldap.conf can also be found in /etc/ldap/ldap.conf, depending on your distro*

The content of the file should look like:

```
#
# LDAP Defaults
#

# See ldap.conf(5) for details
# This file should be world readable but not world writable.

#BASE   dc=example,dc=com
#URI    ldap://ldap.example.com ldap://ldap-master.example.com:666

#SIZELIMIT      12
#TIMELIMIT      15
#DEREF          never

# TLS certificates (needed for GnuTLS)
TLS_CACERT      /etc/ssl/certs/cert.crt
```

Edit the line with `TLS_CACERT` to make it point to the right certificate.

That's it. It should now work. Go back to step 1 and execute the ldapsearch command again. You should see a
successful connection to your ldaps server happening. If that's the case, you can get back to Passbolt and try the synchronization again.

### Alternatively

If for some obscure reasons openldap was still refusing to cooperate, you can try telling him to ignore the certificate.

{% include messages/warning.html
    content="**Warning:** Do this for tests purpose only. This practice is insecure and could make your server prone to MITM attacks."
%}

```bash
nano /etc/ldap/ldap.conf
```

Then add the line: `TLS_REQCERT never`, and try again.

If now the connection is going through, it means that there is still an issue with your certificate.


{% include date/updated.html %}

{% include layout/col_end.html %}
{% include layout/col_start.html column="4 last push1" %}

{% include aside/pro-support.html %}

{% include layout/row_end.html %}
