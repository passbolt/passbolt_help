Open a shell with the same user as your web server user. (usually, www-data for apache, nginx for nginx)

```shell
/var/www$ su -s /bin/bash www-data
```

Replace the previous passbolt by the new version.

```shell
/var/www$ mv ./passbolt ./passbolt_old
/var/www$ git clone {{ include.repo_url }} ./passbolt
```
