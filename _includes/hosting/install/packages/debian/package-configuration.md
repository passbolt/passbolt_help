{% if distributionPackage == 'dnf' or distributionPackage == 'yum' %}
{% include configure/configure-rpm-package.md %}
{% elsif distributionPackage == 'apt' %}
{% include configure/configure-debian-package-mariadb.md %}

#### Configure nginx for serving HTTPS

Depending on your needs there are two different options to setup nginx and SSL using the {{ distributionLabel }} package:

- [Auto (Using Let's Encrypt)](/configure/https/{{ product }}/debian/auto.html)
- [Manual (Using user-provided SSL certificates)](/configure/https/{{ product }}/debian/manual.html)

{% endif %}