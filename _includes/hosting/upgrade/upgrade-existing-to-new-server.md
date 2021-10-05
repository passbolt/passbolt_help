This document describes how to migrate an existing passbolt to a new {{ distributionLabel }} server.

## Pre-requisites

For this tutorial, you will need:
- Passbolt installed on an old server
- A minimal {{ distributionLabel }} {{ distributionVersion }} new server

## Backup the existing data

Prior to the migration you will need to backup the existing passbolt instance data. Please refer to [the official backup documentations](/hosting/backup).

Depending on your SSL configuration you might need to copy the certificate and key from the existing instance. If you are using let’s encrypt you can continue you’ll configure it later directly in the new server.

Don’t delete the existing instance yet!

## Prepare the new {{ distributionLabel }} server

{% include hosting/install/packages/debian/install-server-components.md %}
{% assign migrate = true %}
{% include configure/configure-debian-package-mariadb.md %}

## Configure nginx for serving HTTPS

Depending on your needs there are two different options to setup nginx and SSL using the {{ distributionLabel }} package:

- [Auto (Using Let's Encrypt)](/configure/https/{{ product }}/debian/auto.html)
- [Manual (Using user-provided SSL certificates)](/configure/https/{{ product }}/debian/manual.html)

{% include hosting/upgrade/upgrade-existing-migrate-data.md %}