{% include hosting/install/ssl/sections/introduction.md 
    webserver_name=include.webserver_name
    %}

**a. Generate the self signed certificate**
{% include hosting/install/ssl/sections/generate_certificate.md %}

**b. Make sure the certificate is readable by {{ include.webserver_name }}**
{% include hosting/install/ssl/sections/certificate_permissions.md %}

{% if include.webserver_name == 'apache' %}
**Enable SSL apache module and site**

{% include hosting/install/ssl/sections/apache/enable_modules.md %}

**c. Configure virtual host**

{% include hosting/install/ssl/sections/apache/configure_virtualhost.md %}

**d. Restart Apache**

```shell
$ systemctl reload apache2
```
{% endif %}

{% if include.webserver_name == 'nginx' %}
**c. Configure ssl in nginx**

{% include hosting/install/ssl/sections/nginx/configure_virtualhost.md %}

**d. Restart Nginx**

```shell
$ systemctl restart nginx
```

{% endif %}


**e. Force SSL in passbolt configuration**
{% include hosting/install/ssl/sections/force_ssl.md 
    editor_name=include.editor_name
%}
 
{% include hosting/install/ssl/sections/conclusion.md %}
