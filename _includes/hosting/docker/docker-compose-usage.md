## Using docker-compose

From the docker-compose official docs: 'Compose is a tool for defining and running multi-container Docker applications'

Passbolt provides a [docker-compose{{ page.docker_tag}}.yml](https://github.com/passbolt/passbolt_docker/blob/master/docker-compose{{ page.docker_tag }}.yml) file. That users can download and use with docker-compose.
The easiest way to use passbolt provided docker-compose{{ page.docker_tag }}.yml is to:
```bash
$ git clone https://github.com/passbolt/passbolt_docker
{% if page.passbolt_version == 'Pro' -%}
$ cp your_subscription_license_file passbolt_docker/license
{% endif -%}
$ cd passbolt_docker
```

At this point some users might want to customize passbolt environment variables and change the fullBaseUrl for instance. Environment variables are defined in the following files:
* env/mysql.env
* env/passbolt.env

For further reference regarding environment variables, please see the link at the bottom of the page.

Docker-compose requires the use of `sudo`. Alternatively, you may choose to add your local user to the `docker`
group. Going forward, the second option is assumed.

Once the files fit your needs it is time to:
```bash
$ docker-compose -f docker-compose{{ page.docker_tag }}.yml up
```
If there are no errors, `Ctrl-C` to stop the docker-compose script, then run the above command again with a `-d` flag at the end
(to run in detached mode). You can then confirm the processes are running with:
```bash
docker-compose ps
```
### Create first admin user using docker-compose

If you run passbolt using [docker-compose{{ page.docker_tag }}.yml](https://github.com/passbolt/passbolt_docker/blob/master/docker-compose{{ page.docker_tag }}.yml) provided by passbolt:

```bash
$ docker-compose exec passbolt su -m -c "/var/www/passbolt/bin/cake \
                                passbolt register_user \
                                -u <your@email.com> \
                                -f <yourname> \
                                -l <surname> \
                                -r admin" -s /bin/sh www-data
```
