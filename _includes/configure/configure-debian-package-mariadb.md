#### Configure {{ databaseEngine }}

If not instructed otherwise passbolt {{ distribution }} package will install {{ databaseEngine }}-server locally. This step will help you create
an empty {{ databaseEngine }} database for passbolt to use.

{% assign imgUrl = "/assets/img/help/2020/05/debian-package/configure_mysql.png" %}
{% if product == 'pro' %}
{% assign imgUrl = "/assets/img/help/2020/05/debian-package/configure_mysql_pro.png" %}
{% endif %}
{%
    include articles/figure.html
    url= imgUrl
    legend="Configure database dialog" width="450px"
%}

The configuration process will ask you for the credentials of the {{ databaseEngine }} admin user to create a new database.
{% if migrate %}You will find the root password on the server in the file `/root/.mysql_credentials`. {% else %}By default in most installations the admin username would be `root` and the password would be empty.{% endif %}

{% assign imgUrl = '/assets/img/help/2020/05/debian-package/mysql_admin_user.png' %}
{% if product == 'pro' %}
{% assign imgUrl = '/assets/img/help/2020/05/debian-package/mysql_admin_user_pro.png' %}
{% endif %}
{%
    include articles/figure.html
    url= imgUrl
    legend="Database admin user dialog" width="450px"
%}
{% assign imgUrl = '/assets/img/help/2020/05/debian-package/mysql_admin_user_pass.png' %}
{% if product == 'pro' %}
{% assign imgUrl = '/assets/img/help/2020/05/debian-package/mysql_admin_user_pass_pro.png' %}
{% endif %}
{%
    include articles/figure.html
    url=imgUrl
    legend="Database admin user pass dialog" width="450px"
%}

Now we need to create a {{ databaseEngine }} user with reduced permissions for passbolt to connect. {% if migrate %}For the passbolt database user and password, reuse the ones you have in your backup of passbolt.php.{% else %}These values will also be requested later on the webconfiguration tool of passbolt so please keep them in mind.{% endif %}

{% assign imgUrl = '/assets/img/help/2020/05/debian-package/passbolt_db_user_name.png' %}
{% if product == 'pro' %}
{% assign imgUrl = '/assets/img/help/2020/05/debian-package/passbolt_db_user_name_pro.png' %}
{% endif %}
{%
    include articles/figure.html
    url=imgUrl
    legend="Database passbolt user dialog" width="450px"
%}
{% assign imgUrl = '/assets/img/help/2020/05/debian-package/passbolt_db_user_pass.png' %}
{% if product == 'pro' %}
{% assign imgUrl = '/assets/img/help/2020/05/debian-package/passbolt_db_user_pass_pro.png' %}
{% endif %}
{%
    include articles/figure.html
    url=imgUrl
    legend="Database passbolt user pass dialog" width="450px"
%}

Lastly we need to create a database for passbolt to use, for that we need to name it:
{% assign imgUrl = '/assets/img/help/2020/05/debian-package/db_name.png' %}
{% if product == 'pro' %}
{% assign imgUrl = '/assets/img/help/2020/05/debian-package/db_name_pro.png' %}
{% endif %}
{%
    include articles/figure.html
    url=imgUrl
    legend="Database name dialog"
    width="450px"
%}
