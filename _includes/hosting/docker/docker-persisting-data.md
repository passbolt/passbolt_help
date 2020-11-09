### Persisting data in passbolt container

There are several locations that might be interesting for the users to persist data between container restarts:
* Images directory: /var/www/passbolt/webroot/img
* Gnupg serverkeys directory: /var/www/passbolt/config/gpg
* SSL certificate files: /etc/ssl/certs/certificate.crt /etc/ssl/certs/certificate.key
{% if page.passbolt_version == 'Pro' %}
* Subscription key file: /var/www/passbolt/config/license
{% endif %}

This files and directories can be persisted in the docker volume using [docker volumes](https://docs.docker.com/storage/volumes/) or using [bind mounts](https://docs.docker.com/storage/bind-mounts/#start-a-container-with-a-bind-mount)

### Examples

An example for persisting the images directory could be to create a docker volume:
```bash
$ docker volume create passbolt_images
```

And run passbolt container with the previously created volume:
```bash
$ docker run --name passbolt{{ page.docker_tag }} --net passbolt_network \
             --mount source=passbolt_images,\
             target=/var/www/passbolt/webroot/img \
             {%- if page.passbolt_version == 'Pro' %}
             --mount type=bind,\
               source=<path_subscription>,\
               target=/var/www/passbolt/config/license \
             {% else %}
             {% endif -%}
             -p 443:443 \
             -p 80:80 \
             -e DATASOURCES_DEFAULT_HOST=mariadb \
             -e DATASOURCES_DEFAULT_PASSWORD=<mariadb_password> \
             -e DATASOURCES_DEFAULT_USERNAME=<mariadb_user> \
             -e DATASOURCES_DEFAULT_DATABASE=<mariadb_database> \
             -e APP_FULL_BASE_URL=https://mydomain.com \
             passbolt/passbolt:latest{{ page.docker_tag }}
```

Bind volumes are usually useful when, for instance, the SSL certificates or GnuPG keys have been already created in the host machine:
```bash
$ docker run --name passbolt --net passbolt_network \
             --mount type=bind,\
               source=<host_path_to_gnupg_keys_dir>,\
               target=/var/www/passbolt/config/gpg \
             {%- if page.passbolt_version == 'Pro' %}
             --mount type=bind,\
               source=<path_subscription>,\
               target=/var/www/passbolt/config/license \
             {% else %}
             {% endif -%}
             -p 443:443 \
             -p 80:80 \
             -e DATASOURCES_DEFAULT_HOST=mariadb \
             -e DATASOURCES_DEFAULT_PASSWORD=<mariadb_password> \
             -e DATASOURCES_DEFAULT_USERNAME=<mariadb_user> \
             -e DATASOURCES_DEFAULT_DATABASE=<mariadb_database> \
             -e APP_FULL_BASE_URL=https://mydomain.com \
             passbolt/passbolt:latest{{ page.docker_tag }}
```

An example of the above using docker-compose can be found [here](https://github.com/passbolt/passbolt_docker/blob/master/docker-compose{{ page.docker_tag }}.yml) where bind mounts and volumes are used.

NOTE: If you dont provide any GnuPG severkey or SSL certificate passbolt container will create a self signed SSL certificate and a GnuPG server key pair.
