```shell
$ openssl req -new -newkey rsa:4096 -days 365 -nodes -x509 -subj "/C=FR/ST=Denial/L=Springfield/O=Dis/CN=passbolt.dev" -keyout /etc/ssl/certs/passbolt.key -out /etc/ssl/certs/passbolt.crt

Generating a 4096 bit RSA private key
................++
...++
writing new private key to '/etc/ssl/certs/passbolt.key'
-----
```