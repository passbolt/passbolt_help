{% include hosting/backup/backup_intro.md %}


#### 1. The database

We made a dedicated command in order to make a backup of the database, it uses `mysqldump` but we recommend to use the passbolt command as it has been made to avoid any pasting or logins details errors.

**Replace *WEB_SERVER_USER* with the correct one.** Depending on your OS, it could be nginx, www-data, etc.

```bash
sudo su -s /bin/bash -c "/var/www/passbolt/bin/cake passbolt mysql_export" WEB_SERVER_USER
```

#### 2. The server public and private keys

The easiest way is copy the server OpenPGP key in `config/gpg`.

 * private key is `serverkey_private.asc`
 * public key is `serverkey.asc`

Another method is to export it using GnuPG. You can use the email attached to your keys to identify them or use the fingerprint.
In order to find the fingerprint if you do not know the email attached to your keys:

```bash
sudo -H -u www-data /bin/bash -c "gpg --list-keys"
```

If you know the email attached to your keys you can use it to export your keys as follows:

```bash
sudo -H -u www-data /bin/bash -c "gpg --export-secret-keys <identifier> > /var/www/passbolt/config/gpg/private.asc" www-data
sudo -H -u www-data /bin/bash -c "gpg --export <identifier> > /var/www/passbolt/config/gpg/public.asc" www-data
```
Where <identifier> can be the key fingerprint or the email associated with the key you want to export.

{% include messages/warning.html
    content="Be sure to **remove the expiration time** before importing the keys at backup restore. While restoring the backup, the imported keys cannot have an expiry date."
%}

#### 3. The application configuration

Passbolt configuration file is located in `config/passbolt.php`.

#### 4. The avatars (for Passbolt version prior to 3.2)

{% include messages/notice.html
    content="Since Passbolt 3.2, user's avatars are no longer stored on disk but on the avatars table of passbolt database."
%}

Back up `webroot/img/public` to avoid losing the profile images.

```bash
sudo tar cvfzp passbolt-avatars.tar.gz -C /var/www/passbolt/ webroot/img/avatar
```

{% include hosting/backup/backup_files_list.md %}
{% include hosting/backup/backup_collaborators_keys.md %}
