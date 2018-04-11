## Upgrade using latest v1 version (1.6.10)

Passbolt {{ page.passbolt_version }} v2 will run the database migrations if needed when starting up. Users just need to provide the gpg keys, configuration files/env variables and images.
Following some examples:

### Using host bind mounts

Users that use host bind mounts from host machine into docker file must adjust paths of the mounted files:

In the following snippet:
- passbolt_images_dir: path to a host directory that contains passbolt images Avatar directory.
- gpg_host_dir: path to a host directory that contains serverkey.asc and serverkey_private.asc

```bash
$ docker run --name passbolt{{ page.docker_tag }} --net passbolt_network \
             --mount type=bind, \
               source=<passbolt_images_dir>,\
               target=/var/www/passbolt/webroot/img \
             {%- if page.passbolt_version == 'Pro' %}
             --mount type=bind,\
               source=<path_subscription>,\
               target=/var/www/passbolt/config/license \
             {% else %}
             {% endif -%}
             --mount type=bind, \
               source=<gpg_host_dir>, \
               target=/var/www/passbolt/config/gpg \
             -e DATASOURCES_DEFAULT_HOST=mysql \
             -e DATASOURCES_DEFAULT_PASSWORD=<mysql_password> \
             -e DATASOURCES_DEFAULT_USERNAME=<mysql_user> \
             -e DATASOURCES_DEFAULT_DATABASE=<mysql_database> \
             -e APP_FULL_BASE_URL=https://mydomain.com \
             passbolt/passbolt:2.0.1{{ page.docker_tag }}-debian
```

### Using docker volumes

Users that use docker volumes should adjust their volumes paths.

```bash
$ docker run --name passbolt{{ page.docker_tag }} --net passbolt_network \
             --mount source=<passbolt_images_volume>,\
               target=/var/www/passbolt/webroot/img \
             {%- if page.passbolt_version == 'Pro' %}
             --mount type=bind,\
               source=<path_subscription>,\
               target=/var/www/passbolt/config/license \
             {% else %}
             {% endif -%}
             --mount source=<gpg_keys_volume>, \
               target=/var/www/passbolt/config/gpg \
             -e DATASOURCES_DEFAULT_HOST=mysql \
             -e DATASOURCES_DEFAULT_PASSWORD=<mysql_password> \
             -e DATASOURCES_DEFAULT_USERNAME=<mysql_user> \
             -e DATASOURCES_DEFAULT_DATABASE=<mysql_database> \
             -e APP_FULL_BASE_URL=https://mydomain.com \
             passbolt/passbolt:2.0.1{{ page.docker_tag }}-debian
```
