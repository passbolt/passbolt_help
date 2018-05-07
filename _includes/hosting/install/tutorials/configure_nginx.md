For nginx to work with passbolt we need to edit its configuration file to point to the passbolt folder (which will be created later) and rewrite rules.
We also consider that passbolt will be reachable on the hostname `passbolt.dev`.

For now, we will configure it without SSL for the sake of keeping it simple. 

```shell
$ vi /etc/nginx/conf.d/default.conf
```

Below is an example of configuration you can use in `/etc/nginx/conf.d/default.conf`

{% include hosting/install/webservers/nginx-conf.md %}

