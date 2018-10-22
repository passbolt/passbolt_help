### Backup MariaDB database

First of all is encouraged to backup all the relevant data that is:
- Database
- Images
- Server public and private keys

You might want to check the detailed [backup list for v1](/hosting/backup-v1)

There are multiple ways to backup your database following there is an example using the passbolt container:
```bash
$ docker exec passbolt mysqldump -h <db_host> \
                                 -u passbolt \
                                 -pP4ssb0lt \
                                 passbolt > dump.sql
```

This will output a dump.sql file on the host machine.

### Backup images directory

If you are mounting the images directory using a bind mount just copy the host image directory in a safe location.
If you are using docker volumes to persist your images directory, or not persisting the images directory at all, you can execute the following to copy your images to the host machine.

```bash
$ docker cp passbolt:/var/www/app/webroot/img/public public_images_backup
```
This will output a public_images_directory with the images stored in the passbolt container.

### Backup gpg keys

As with the previous section you can proceed exactly the same with the gpg keys:

```bash
$ docker cp passbolt:/var/www/app/Config/gpg/ gpg_keys_backup
```

This will output a gpg_keys_backup directory with the contents of the gpg configuration folder of passbolt.
