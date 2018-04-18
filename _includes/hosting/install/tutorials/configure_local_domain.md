For the sake of keeping this demonstration short we will use passbolt.dev as domain name
(we added the IP to domain name mapping with a manual entry in the /etc/hosts file after a quick lookup on ifconfig).

```shell
$ {{ include.editor }} /etc/hosts
```

Add this line to the file

```
127.0.0.1 passbolt.dev
```

Of course, replace 127.0.0.1 by whichever ip is used by your host.