#### Configure mariadb

If not instructed otherwise passbolt debian package will install mariadb-server locally. This step will help you create
an empty mariadb database for passbolt to use.

{% assign imgUrl = "/assets/img/help/2020/05/debian-package/configure_mysql.png" %}
{% if product == 'pro' %}
{% assign imgUrl = "/assets/img/help/2020/05/debian-package/configure_mysql_pro.png" %}
{% endif %}
{%
    include articles/figure.html
    url= imgUrl
    legend="Configure mariadb dialog" width="450px"
%}

The configuration process will ask you for the credentials of the mariadb admin user to create a new database.
By default in most installations the admin username would be `root` and the password would be empty.

{% assign imgUrl = '/assets/img/help/2020/05/debian-package/mysql_admin_user.png' %}
{% if product == 'pro' %}
{% assign imgUrl = '/assets/img/help/2020/05/debian-package/mysql_admin_user_pro.png' %}
{% endif %}
{%
    include articles/figure.html
    url= imgUrl
    legend="Mariadb admin user dialog" width="450px"
%}
{% assign imgUrl = '/assets/img/help/2020/05/debian-package/mysql_admin_user_pass.png' %}
{% if product == 'pro' %}
{% assign imgUrl = '/assets/img/help/2020/05/debian-package/mysql_admin_user_pass_pro.png' %}
{% endif %}
{%
    include articles/figure.html
    url=imgUrl
    legend="Mariadb admin user pass dialog" width="450px"
%}

Now we need to create a mariadb user with reduced permissions for passbolt to connect. This values will be later asked on the webconfiguration tool of passbolt so please keep them in mind.

{% assign imgUrl = '/assets/img/help/2020/05/debian-package/passbolt_db_user_name.png' %}
{% if product == 'pro' %}
{% assign imgUrl = '/assets/img/help/2020/05/debian-package/passbolt_db_user_name_pro.png' %}
{% endif %}
{%
    include articles/figure.html
    url=imgUrl
    legend="Mariadb passbolt user dialog" width="450px"
%}
{% assign imgUrl = '/assets/img/help/2020/05/debian-package/passbolt_db_user_pass.png' %}
{% if product == 'pro' %}
{% assign imgUrl = '/assets/img/help/2020/05/debian-package/passbolt_db_user_pass_pro.png' %}
{% endif %}
{%
    include articles/figure.html
    url=imgUrl
    legend="Mariadb passbolt user pass dialog" width="450px"
%}

Lastly we need to create a database for passbolt to use, for that we need to name it:
{% assign imgUrl = '/assets/img/help/2020/05/debian-package/db_name.png' %}
{% if product == 'pro' %}
{% assign imgUrl = '/assets/img/help/2020/05/debian-package/db_name_pro.png' %}
{% endif %}
{%
    include articles/figure.html
    url=imgUrl
    legend="Mariadb database name dialog"
    width="450px"
%}
