#### 1. The database

We made a dedicated command in order to make a backup of the database, it uses `mysqldump` but we recommend to use the passbolt command as it has been made to avoid any pasting or logins details errors.

**Replace *WEB_SERVER_USER* with the correct one.** Depending on your OS, it could be nginx, www-data, etc.

```bash
su -s /bin/bash -c "/usr/share/php/passbolt/bin/cake passbolt mysql_export" WEB_SERVER_USER
```

#### 2. The server public and private keys

The GPG server keys are stored under `/etc/passbolt/gpg/` folder:

 * private key is `serverkey_private.asc`
 * public key is `serverkey.asc`

#### 3. The application configuration

Passbolt {{ distributionSlug }} package stores all configuration files under `/etc/passbolt/*` but the one you need is `/etc/passbolt/passbolt.php`

#### 4. The avatars (for Passbolt version prior to 3.2)

{% include messages/notice.html
    content="Since Passbolt 3.2, user's avatars are no longer stored on disk but on the avatars table of passbolt database."
%}

Back up `/usr/share/php/passbolt/webroot/img/avatar` to avoid losing
the profile images.

```bash
sudo tar cvfzp passbolt-avatars.tar.gz -C /usr/share/php/passbolt/ webroot/img/avatar
```
