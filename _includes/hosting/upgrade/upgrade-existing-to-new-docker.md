This document describes how to migrate an existing passbolt to a new {{ distributionLabel }} server.

## Pre-requisites

For this tutorial, you will need:
- Passbolt installed on an old server
- A new server with Docker

## Backup the existing data

Prior to the migration you will need to backup the existing passbolt instance data. Please refer to [the official backup documentations](/hosting/backup).

Depending on your SSL configuration you might need to copy the certificate and key from the existing instance.

Don’t delete the existing instance yet!

## Prepare the new server

Create a fresh new Passbolt instance on Docker following [this documentation](/hosting/install/{{ product }}/docker.html).

## Migrate the data

### Stop running containers

At this step, you should have a running empty Passbolt instance running on your server. We will now stop it and delete the database volume.

If you have chosen the `docker-compose` install, you just have to delete the volumes you created with this command (don't forget the `-v`):

```bash
docker-compose -f docker-compose-{{ product }}.yaml down -v
```

If you have chosen to run docker containers, stop them and delete the database volume:

```
docker stop passbolt-container-name
docker stop passbolt-database-name
docker volume rm passbolt-database-volume-name
```

Of course, replace containers and volume name with your own !

### Restore your database

According to [MariaDB documentation on Docker Hub](https://hub.docker.com/_/mariadb):

```
When a container is started for the first time, a new database with the specified name will be created and initialized with the provided configuration variables.

Furthermore, it will execute files with extensions .sh, .sql, .sql.gz, and .sql.xz that are found in /docker-entrypoint-initdb.d. Files will be executed in alphabetical order. .sh files without file execute permission are sourced rather than executed.

You can easily populate your mariadb services by mounting a SQL dump into that directory and provide custom images with contributed data. SQL files will be imported by default to the database specified by the MARIADB_DATABASE / MYSQL_DATABASE variable.
```

This means you just have to mount your database backup file on `/docker-entrypoint-initdb.d` folder of the database container.

Edit your docker-compose-{{ product }}.yaml file and add a volume mount in the db service:

```
volumes:
  - database_volume:/var/lib/mysql
  - ./path/to/your/database/dump.sql:/docker-entrypoint-initdb.d/dump.sql
```

### Set your GPG server keys fingerprint and email

In the scope of a migration to docker, you need to add 2 environment variables to the passbolt service
related to the GPG server keys fingerprint and email address.

Get them from your backed up keys:

```
$ gpg --show-keys /path/to/serverkey.asc
pub   rsa2048 2022-01-20 [SC]
      43F978AFF88B53F5ABBD12C87D5E40A4C43926ED
uid                      Passbolt default user <passbolt@yourdomain.com>
sub   rsa2048 2022-01-20 [E]
```

In the above output, fingerprint is `43F978AFF88B53F5ABBD12C87D5E40A4C43926ED` and email address is `passbolt@yourdomain.com`.

Add the environment variables in your `docker-compose-{{ product }}.yaml` file (replace with your own values):

```
services:
  passbolt:
    environment:
      PASSBOLT_GPG_SERVER_KEY_FINGERPRINT: "43F978AFF88B53F5ABBD12C87D5E40A4C43926ED"
      PASSBOLT_KEY_EMAIL: "passbolt@yourdomain.com"
```

### Start your containers

You can now start your database and passbolt containers, your database will be restored at the database container start.

### Restore GPG server keys

Copy the GPG you backed up in your container:

```
docker cp serverkey_private.asc your-passbolt-container:/etc/passbolt/gpg/serverkey_private.asc
docker cp serverkey.asc your-passbolt-container:/etc/passbolt/gpg/serverkey.asc
```

Then set correct rights:

```
docker exec -it your-passbolt-container chown www-data:www-data /etc/passbolt/gpg/serverkey.asc
docker exec -it your-passbolt-container chown www-data:www-data /etc/passbolt/gpg/serverkey_private.asc
docker exec -it your-passbolt-container chmod 440 /etc/passbolt/gpg/serverkey.asc
docker exec -it your-passbolt-container chmod 440 /etc/passbolt/gpg/serverkey_private.asc
```

### Restore avatars (if you are coming from prior 3.2)

{%
    include messages/warning.html
    content="This step is needed only if you come from Passbolt version prior to 3.2. Since 3.2, avatars are stored in database"
%}

Extract the avatars to the Passbolt docker container:

```
cat passbolt-avatars.tar.gz | docker exec -i your-passbolt-container tar -C /usr/share/php/passbolt/ -xzf -
```

Then set correct rights to the avatars:

```
docker exec -it your-passbolt-container chown -R www-data:www-data /usr/share/php/passbolt/webroot/img/avatar
```

### That's it

If your passbolt URL has changed, you will have to proceed to an [account recovery](/faq/start/account-recover).
