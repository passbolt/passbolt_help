We assume here Passbolt container is named "**passbolt-container**" and MariaDB 
container "**database-container**".
Please replace these names with your own. You can use `docker ps` for this.

{% include messages/warning.html
    content="Many docker users use \"`-ti`\", \"`-it`\" or \"`-t -i`\" arguments to execute commands on docker containers. To get reliable backups on docker, please use only `-i`, as `-t` will create a pseudo-tty and make your backup files unusuable."
%}
#### 1. The database

We made a dedicated command in order to make a backup of the database, it uses `mysqldump` but we recommend to use the passbolt command as it has been made to avoid any pasting or logins details errors.

Use `docker exec` to connect to the passbolt container and use the `passbolt mysql_export` command. 

Replace *PASSBOLT_CONTAINER* with your passbolt container name and *WEB_SERVER_USER* with the correct one. For example, if you use nginx it should be www-data.

```bash
docker exec -i {PASSBOLT_CONTAINER} bash -c "su -s /bin/bash -c '/usr/share/php/passbolt/bin/cake passbolt mysql_export' WEB_SERVER_USER"
```

#### 2. The server public and private keys

You can use `docker cp` to backup the Passbolt GPG keys:

```bash
docker cp passbolt-container:/etc/passbolt/gpg/serverkey_private.asc \
    /path/to/backup/serverkey_private.asc
docker cp passbolt-container:/etc/passbolt/gpg/serverkey.asc \
    /path/to/backup/serverkey.asc
```

#### 3. The application configuration

Passbolt {{ distributionSlug }} stores its configuration as environment variables.

If you are using docker-compose, environment variables are on the env folder:

* env/passbolt.env
* env/mysql.env

If you are running docker container, you should have passed these variables through the command line.
Please check the
[passbolt env variable reference]({{ site.baseurl }}{% link _posts/configure/2021-12-30-env-var-reference.md %})

#### 4. The avatars (for Passbolt version prior to 3.2)

{% include messages/notice.html
    content="Since Passbolt 3.2, user's avatars are no longer stored on disk but on the avatars table of passbolt database."
%}

```bash
docker exec -i passbolt-container \
    tar cvfzp - -C /usr/share/php/passbolt/ webroot/img/avatar \
    > passbolt-avatars.tar.gz
```