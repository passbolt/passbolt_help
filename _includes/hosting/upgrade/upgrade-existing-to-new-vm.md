This document describes how to migrate an existing passbolt to a new Virtual Machine Appliance.

## Pre-requisites

For this tutorial, you will need:
- Passbolt installed on an old server

## Backup the existing data

Prior to the migration you will need to backup the existing passbolt instance data. Please refer to [the official backup documentations](/hosting/backup).

Depending on your SSL configuration you might need to copy the certificate and key from the existing instance. If you are using let’s encrypt you can continue you’ll configure it later directly in the new server.

Don’t delete the existing instance yet!

## Prepare the Virtual Machine Appliance for migration

{% include messages/warning.html
    content="While configuring the database ensure you are configuring the database as it was on your previous server, check the backup of the file passbolt.php for the configuration details."
%}

{% include hosting/install/vm/00-vm-description.md %}

{% include hosting/install/vm/01-vm-setup.md %}

## Configure the OVA Services

Reconfigure the Passbolt package:

```
sudo dpkg-reconfigure passbolt-pro-server
```

{% include configure/configure-debian-package-mariadb.md %}

Depending on your needs there are two different options to setup nginx and SSL using the debian package:

- [Auto (Using Let's Encrypt)](/configure/https/{{ product }}/debian/auto.html)
- [Manual (Using user-provided SSL certificates)](/configure/https/{{ product }}/debian/manual.html)

Once you're done, restart the nginx server:

```
sudo systemctl restart nginx
```

{% include hosting/upgrade/upgrade-existing-migrate-data.md %}