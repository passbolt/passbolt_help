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
docker-compose down -v
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

So you just have to mount your database backup file on `/docker-entrypoint-initdb.d` folder of the database container.

Edit your docker-compose.yaml file and add a volume mount in the db service:

```
volumes:
  - database_volume:/var/lib/mysql
  - ./path/to/your/database/dump.sql:/docker-entrypoint-initdb.d/dump.sql
```

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