```shell
$ chown root:{{ include.webserver_user }} /etc/ssl/certs/passbolt.crt
$ chown root:{{ include.webserver_user }} /etc/ssl/certs/passbolt.key
$ chmod 640 /etc/ssl/certs/passbolt.crt
$ chmod 640 /etc/ssl/certs/passbolt.key
```