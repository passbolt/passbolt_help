We need to set the right permissions on the passbolt files. It should belong to the same owner as the webserver.

```shell
$ chown -R  {{ include.webserver_user }}:{{ include.webserver_user }} /var/www/passbolt
$ cd /var/www/passbolt
```

**Important:** For the following steps, we'll also need to use the same user as the one running the webserver. In our case ({{ include.webserver_name }}), it is {{ include.webserver_user }}.

```shell
$ su -s /bin/bash {{ include.webserver_user }}
```