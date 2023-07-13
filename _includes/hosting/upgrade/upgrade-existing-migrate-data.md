

## Migrate data

Load the backup files into the new {{ distributionLabel }} server, for the following tasks we will consider that the backup files are in your user home directory `~/backup`

You should have:

{% if product == 'pro' %}
* Your subscription key
{% endif %}
* the private and public GPG key
* Your database dump 
* The avatar archive file `passbolt-avatars.tar.gz` if you are coming from Passbolt prior to 3.2

{% assign stepNumber = 1 %}

{% if product == 'pro' %}
**Step {{ stepNumber }}{% assign stepNumber = stepNumber | plus:1 %}.** Create the subscription key file

You received your subscription key by email, copy it as `/etc/passbolt/subscription_key.txt` on your server.
````
nano /etc/passbolt/subscription_key.txt
````

{% endif %}

**Step {{ stepNumber }}{% assign stepNumber = stepNumber | plus:1 %}.** Restore Passbolt configuration file and ensure rights and ownership are correct:

```
sudo mv ~/backup/passbolt.php /etc/passbolt
sudo chown {{ webServerUser }}:{{ webServerUser }} /etc/passbolt/passbolt.php
sudo chown {{ webServerUser }}:{{ webServerUser }} /etc/passbolt/subscription_key.txt
sudo chmod 440 /etc/passbolt/passbolt.php
```

**Step {{ stepNumber }}{% assign stepNumber = stepNumber | plus:1 %}.** Restore GPG public and private keys and ensure rights and ownership are correct:

```
sudo mv ~/backup/serverkey.asc /etc/passbolt/gpg
sudo mv ~/backup/serverkey_private.asc /etc/passbolt/gpg
sudo chown {{ webServerUser }}:{{ webServerUser }} /etc/passbolt/gpg/serverkey_private.asc
sudo chown {{ webServerUser }}:{{ webServerUser }} /etc/passbolt/gpg/serverkey.asc
sudo chmod 440 /etc/passbolt/gpg/serverkey.asc
sudo chmod 440 /etc/passbolt/gpg/serverkey_private.asc
```

**Step {{ stepNumber }}{% assign stepNumber = stepNumber | plus:1 %}.** Extract the passbolt-avatars.tar.gz archive and set correct rights (if coming from Passbolt version prior to 3.2)

```
sudo tar xzf passbolt-avatars.tar.gz -C /usr/share/php/passbolt/
sudo chown -R {{ webServerUser }}:{{ webServerUser }} /usr/share/php/passbolt/webroot/img/public
```

**Step {{ stepNumber }}{% assign stepNumber = stepNumber | plus:1 %}.** Load the database

```
mysql -u PASSBOLT_DATABASE_USER -p PASSBOLT_DATABASE < passbolt-backup.sql
```

**Step {{ stepNumber }}{% assign stepNumber = stepNumber | plus:1 %}.** Import the server key

```
sudo su -s /bin/bash -c "gpg --home /var/lib/passbolt/.gnupg --import /etc/passbolt/gpg/serverkey_private.asc"  {{ webServerUser }}
```

**Step {{ stepNumber }}{% assign stepNumber = stepNumber | plus:1 %}.** Migrate passbolt to the latest version

```
sudo -H -u {{ webServerUser }} /bin/bash -c "/usr/share/php/passbolt/bin/cake passbolt migrate"
```

**Step {{ stepNumber }}{% assign stepNumber = stepNumber | plus:1 %}.** Test passbolt

Try to access your passbolt application with your browser.

If you are encountering any issues, you can run the following command to assess the status of your instance:

```
sudo -H -u {{ webServerUser }} /bin/bash -c "/usr/share/php/passbolt/bin/cake passbolt healthcheck"
```