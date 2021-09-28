

## Migrate the data

Load the backup files into the new {{ distributionLabel }} server, for the following tasks we will consider that the backup files are in your user home directory `~/backup`

**Step 1.** Restore Passbolt configuration file and ensure rights and ownership are correct:

```
sudo mv ~/backup/passbolt.php /etc/passbolt
sudo chown www-data:www-data /etc/passbolt/passbolt.php
sudo chmod 440 /etc/passbolt/passbolt.php
```

**Step 2.** Restore GPG public and private keys and ensure rights and ownership are correct:

```
sudo mv ~/backup/serverkey.asc /etc/passbolt/gpg
sudo mv ~/backup/serverkey_private.asc /etc/passbolt/gpg
sudo chown www-data:www-data /etc/passbolt/gpg/*
sudo chmod 440 /etc/passbolt/gpg/*  
```

{% if product == 'pro' %}
**Step 2.1** Copy the subscription keyfile to correct location
{% include messages/notice.html
    content="In last releases of Passbolt, the `license` file has been renamed to `subscription_key.txt`."
%}

```
sudo mv ~/backup/license /etc/passbolt/subscription_key.txt
```

{% endif %}

**Step 3.** Copy the backup of avatars to the right location (if coming from Passbolt version prior to 3.2)

```
sudo mv ~/backup/public/* /usr/share/php/passbolt/webroot/img/public
sudo chown -R www-data:www-data /usr/share/php/passbolt/webroot/img/public
```

**Step 4.** Load the database and migrate the Passbolt data to the latest version

```
mysql -u PASSBOLT_DATABASE_USER -p PASSBOLT_DATABASE < passbolt-backup.sql
sudo -H -u www-data /bin/bash -c "/usr/share/php/passbolt/bin/cake passbolt migrate"
```

## Test passbolt

Try to access your passbolt application with your browser.

If you are encountering any issues, you can run the following command to assess the status of your instance:

```
sudo -H -u www-data /bin/bash -c "/usr/share/php/passbolt/bin/cake passbolt healthcheck"
```