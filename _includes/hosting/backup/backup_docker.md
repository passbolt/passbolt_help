We assume here Passbolt container is named "**passbolt-container**" and MariaDB 
container "**database-container**".
Please replace these names with your own. You can use `docker ps` for this.

{% include messages/warning.html
    content="Many docker users use \"`-ti`\", \"`-it`\" or \"`-t -i`\" arguments to execute commands on docker containers. To get reliable backups on docker, please use only `-i`, as `-t` will create a pseudo-tty and make your backup files unusuable."
%}
#### 1. The database

This can be easily scripted using [mysqldump](https://mariadb.com/kb/en/mariadb/mysqldump/).
Use `docker exec` to connect to the Passbolt database container and write mysqldump output to a local file.

Be sure to use simple-quotes for the `bash -c` argument to be able to use MYSQL_USER, MYSQL_PASSWORD and MYSQL_DATABASE environment variables.

```bash
docker exec -i database-container bash -c \
  'mysqldump -u${MYSQL_USER} -p${MYSQL_PASSWORD} ${MYSQL_DATABASE}' \
  > /path/to/backup.sql
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
[passbolt env variable reference]({{ site.baseurl }}{% link _posts/configure/2019-05-15-env-var-reference.md %})

#### 4. The avatars (for Passbolt version prior to 3.2)

{% include messages/notice.html
    content="Since Passbolt 3.2, user's avatars are no longer stored on disk but on the avatars table of passbolt database."
%}

```bash
docker exec -i passbolt-container \
    tar cvfzp - -C /usr/share/php/passbolt/ webroot/img/avatar \
    > passbolt-avatars.tar.gz
```