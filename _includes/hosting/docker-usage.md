## Using passbolt container

Passbolt requires a database backend to store the information. In this section we will be using a MySQL database packaged as a docker container.
{% if page.passbolt_version == 'Pro' %}
  A subscription key file is also required to use Passbolt Pro. You can get the subscription key [here](https://www.passbolt.com/)
{% endif %}

### Manually run passbolt container and mysql container

It is recommended to create a user defined network to ease the container name resolution. Using a user defined network will provide a method to access containers using their names instead ip addresses:
```bash
$ docker network create passbolt_network
```

First run the mysql container:
```bash
$ docker run -d --name mysql --net passbolt_network \
             -e MYSQL_ROOT_PASSWORD=<root_password> \
             -e MYSQL_DATABASE=<mysql_database> \
             -e MYSQL_USER=<mysql_user> \
             -e MYSQL_PASSWORD=<mysql_password> \
             mysql
```

Now we can run the passbolt container:
```bash
$ docker run --name passbolt{{page.docker_tag}} --net passbolt_network \
             {%- if page.passbolt_version == 'Pro' %}
             --mount type=bind,\
               source=<path_subscription>,\
               target=/var/www/passbolt/config/license \
             {% else %}
             {% endif -%}
             -e DATASOURCES_DEFAULT_HOST=mysql \
             -e DATASOURCES_DEFAULT_PASSWORD=<mysql_password> \
             -e DATASOURCES_DEFAULT_USERNAME=<mysql_user> \
             -e DATASOURCES_DEFAULT_DATABASE=<mysql_database> \
             -e APP_FULL_BASE_URL=https://mydomain.com \
             passbolt/passbolt:2.0.1{{page.docker_tag}}-debian
```

Note: strings between '<' and '>' are variables that the users should fill with their data.
