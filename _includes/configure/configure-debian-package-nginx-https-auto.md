{%
    include messages/warning.html
    content="**Important requirement:** This tutorial assumes your machine has a valid domain name assigned in
    order to work with let's encrypt. If you want to use user provided certificates or self-signed certificates skip to the next section"
%}

{%
    include messages/warning.html
    content="**Note:** the configuration does not support serving passbolt on a subdirectory fashion. For example,
    scenarios like https://mydomain.com/passbolt are not supported by default"
%}

{% include configure/install_or_reconfigure_passbolt.md %}

Passbolt debian package currently supports the configuration of nginx. It comes with a default configuration that supports:

- Serve passbolt on port 80 (http)
- Serve passbolt on port 443 (https)

The following steps will guide you through the option that uses Let's encrypt method to enable SSL.

{% assign imgUrl = "/assets/img/help/2020/05/debian-package/configure_nginx.png" %}
{% if product == 'pro' %}
{% assign imgUrl = "/assets/img/help/2020/05/debian-package/configure_nginx_pro.png" %}
{% endif %}
{%
    include articles/figure.html
    url=imgUrl
    legend="Configure nginx dialog" width="450px"
%}

After choosing yes you will be prompted with the following dialog where you can choose which method you prefer to configure SSL on nginx:

{% assign imgUrl = "/assets/img/help/2020/05/debian-package/nginx_choices.png" %}
{% if product == 'pro' %}
{% assign imgUrl = "/assets/img/help/2020/05/debian-package/nginx_choices_pro.png" %}
{% endif %}
{%
    include articles/figure.html 
    url=imgUrl
    legend="nginx SSL dialog" width="450px"
%}

You will now need to introduce the name of the domain name assinged to your server:

{% assign imgUrl = "/assets/img/help/2020/05/debian-package/nginx_domain.png" %}
{% if product == 'pro' %}
{% assign imgUrl = "/assets/img/help/2020/05/debian-package/nginx_domain_pro.png" %}
{% endif %}
{% include
    articles/figure.html
    url=imgUrl
    legend="nginx domain name" width="450px"
%}

Finally you will need to provide an email address for Let's encrypt to notify you for renewals and other admin info:

{% assign imgUrl = "/assets/img/help/2020/05/debian-package/lets_encrypt_email.png" %}
{% if product == 'pro' %}
{% assign imgUrl = "/assets/img/help/2020/05/debian-package/lets_encrypt_email_pro.png" %}
{% endif %}
{%
    include articles/figure.html
    url=imgUrl
    legend="lets encrypt admin email" width="450px"
%}

If everything goes fine you should see a final message that points you to finish passbolt configuration:

{%
    include articles/figure.html
    url="/assets/img/help/2020/05/debian-package/success.png"
    legend="Success message" width="450px"
%}
