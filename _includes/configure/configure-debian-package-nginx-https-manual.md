Passbolt debian package currently supports the configuration of nginx. It comes with a default configuration that supports:

- Serve passbolt on port 80 (http)
- Serve passbolt on port 443 (https)

On this context 'manually' means that the user will provide the SSL certificates, this is the main difference with
the 'auto' method where [Let's Encrypt](https://letsencrypt.org/) will issue the SSL certificate for you.

This manual method is often useful on private network installations with private [CA](https://en.wikipedia.org/wiki/Certificate_authority) where
the system admin issues a new private SSL certificate and uploads it to the passbolt server. It is also a method often used with
self-signed SSL certificates for test installations.

On this example we will assume the user is generating a self-signed certificate on the passbolt server.

## Generate the SSL certificate

While connected to your passbolt instance you can generate a SSL certificate in the following way:

```
openssl req -x509 -newkey rsa:4096 -keyout key.pem -out cert.pem -days 365 -nodes
```

This command will output two files the 'key.pem' and the 'cert.pem' identify the absolute path where these files are located.

{% include configure/install_or_reconfigure_passbolt.md %}

You should select yes for the nginx setup:

{% assign imgUrl = '/assets/img/help/2020/09/debian-package/configure_nginx.png' %}
{% if product == 'pro' %}
{% assign imgUrl = '/assets/img/help/2020/05/debian-package/db_name_pro.png' %}
{% endif %}
{%
    include articles/figure.html
    url=imgUrl
    legend="Nginx configuration message" width="450px"
%}

Choose 'manual' for the SSL setup method:

{% assign imgUrl = '/assets/img/help/2020/09/debian-package/ssl_method_select.png' %}
{% if product == 'pro' %}
{% assign imgUrl = '/assets/img/help/2020/09/debian-package/ssl_method_select_pro.png' %}
{% endif %}
{%
    include articles/figure.html
    url=imgUrl
    legend="SSL method selection" width="450px"
%}

Provide the domain name you plan to use for your passbolt server. On this example and as we are using a
self-signed certificate the domain name is not as important as if you are planning to use a proper SSL
certificate. In the later escenario DNS domain name and SSL domain name must match.

{% assign imgUrl = '/assets/img/help/2020/09/debian-package/ssl_domain.png' %}
{% if product == 'pro' %}
{% assign imgUrl = '/assets/img/help/2020/09/debian-package/ssl_domain_pro.png' %}
{% endif %}
{%
    include articles/figure.html
    url=imgUrl
    legend="Domain for nginx setup" width="450px"
%}

Provide the full path of the SSL certificate you created on previous steps ('cert.pem')

{% assign imgUrl = '/assets/img/help/2020/09/debian-package/ssl_cert.png' %}
{% if product == 'pro' %}
{% assign imgUrl = '/assets/img/help/2020/09/debian-package/ssl_cert_pro.png' %}
{% endif %}
{%
    include articles/figure.html
    url=imgUrl
    legend="SSL certificate path" width="450px"
%}

Now provide the full path of the SSL key ('key.pem')

{% assign imgUrl = '/assets/img/help/2020/09/debian-package/key_ssl.png' %}
{% if product == 'pro' %}
{% assign imgUrl = '/assets/img/help/2020/09/debian-package/key_ssl_pro.png' %}
{% endif %}
{%
    include articles/figure.html
    url=imgUrl
    legend="SSL private key path" width="450px"
%}

And that's it you should be able to reach your server on the domain you specified. Keep in mind that you might need
to add DNS records to reach your domain on your local network or in a public DNS provider.

{%
    include articles/figure.html
    url="/assets/img/help/2020/09/debian-package/success_message.png"
    legend="Success message" width="450px"
%}
