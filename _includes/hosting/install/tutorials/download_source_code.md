In the web server configuration file, we are pointing to `/var/www/passbolt` but obviously it does not exist yet! 
Let’s create it, by cloning passbolt official repository. This way we can pull new releases easily in the future.

```shell
cd /var/www
$ git clone https://github.com/passbolt/passbolt_api.git ./passbolt
```