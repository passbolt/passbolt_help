## Backup list

At the end of the backup process you should have:

* a dump of your database
* the server public and private GPG keys
* a copy of your config/passbolt.php configuration file
* a copy of your avatar folder (**only if Passbolt version < 3.2**)

## Migrate the back-up to the new server

We will still consider that the backup files are in your user home directory ~/backup

### On the original server

Use a tool such as tar to compress the backup directory
````
tar -cvzf /home/backup.tar.gz /home/backup
````

You should copy the compressed backup file to the new server. Use a tool such as scp to do it
````
scp /home/backup.tar.gz new_server_username@server_ip:/home
````

### On the new server

The compressed backup file should appears inside your home directory, we will extract using a tool such as tar
````
tar -xzvf /home/backup.tar.gz -C /home/backup
````

The uncompressed backup file are now available inside your home directory.