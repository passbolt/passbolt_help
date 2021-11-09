#### 1. The database

This can be easily scripted using [mysqldump](https://mariadb.com/kb/en/mariadb/mysqldump/) for example:

```bash
mysqldump -u[user] -p[pass] [db] > /path/to/backup.sql
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