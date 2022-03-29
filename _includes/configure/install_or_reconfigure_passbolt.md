[comment]: <> (lets_encrypt_requirement variable is used for: OVA, AWS, Digital Ocean)
{% if lets_encrypt_requirement == 'yes' %}
## Edit nginx configuration file

By default, our nginx configuration file ensure all domain names will match with our passbolt virtual machine but to obtain a valid Let's Encrypt SSL certificate, you will have to manually set your passbolt domain name.

Open `/etc/nginx/sites-enabled/nginx-passbolt.conf` and search for this line:

```
server_name _;
```

Replace the underscore with your passbolt domain name:

```
server_name passbolt.domain.tld;
```

## Reconfigure passbolt

Execute this command:

{% else %}
## Install or reconfigure passbolt

If you don't have passbolt installed please check on the [hosting section](/hosting/install) for more information
on how to install passbolt on debian.

If you have already installed passbolt then you want to execute the following command to start the configuration process for SSL:
{% endif %}

```
sudo dpkg-reconfigure passbolt-{{ product }}-server
```

You most likely want to say 'NO' to the mariadb setup question and go for the nginx setup
