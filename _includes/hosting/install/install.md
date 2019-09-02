<!---
Required variables for this page to be displayed properly.
product (string): The product this page will be rendered for:  ce or pro
distribution (string): The target distribution (lower case): debian, centos or ubuntu. It will be used in the urls and fule name to target script
distributionSlug (string): The target distribution slug: debian-9, centos-7, ubuntu-18.04. It will be used in the url to target script
distributionLabel (string): The target distribution label: Debian 9 (Stretch), Centos 7 ...
-->

{% if distribution == 'centos' %}
    {% assign downloadCmd = 'curl -L -o' %}
{% else %}
    {% assign downloadCmd = 'wget -O' %}
{% endif %}

This tutorial describes how to install Passbolt {{ product | upcase }} on a minimal {{ distributionLabel }} server. The installation procedure is based on install scripts that will do
the heavy lifting for you. They will configure your operating system to be passbolt ready and will take care of installing and configuring the web
server (Nginx), database (MariaDb), PHP, SSL and GPG keyring.

Installation time: 10 minutes.

{% if distribution == 'debian' %}
Any doubt? Check out this [step by step video of the installation](https://youtu.be/rMgCQaAfJwE).
{% endif %}

If you prefer to install passbolt manually please refer to this documentation: [Install passbolt from source](/hosting/install/ce/from-source.html).

## Prerequisites

For this tutorial, you will need:
- A minimal {{ distributionLabel }} server.
- A domain / host name pointing to your server, or at least being able to reach your server through a static IP address.

The recommended server requirements are:
- 2 cores
- 2GB of RAM

{% include messages/warning.html
    content="**Please note:** It is important that you use a vanilla server with no other services or tools already installed on it. The install scripts could potentially damage any existing data on your server."
%}

## 1. Configure your server

{% if distribution == 'ubuntu' %}
If you are using ubuntu server image make sure the universe repository is present.
```
sudo add-apt-repository universe
sudo apt-get update
```

In doubt you can check as follow:
```
sudo cat /etc/apt/sources.list
deb http://archive.ubuntu.com/ubuntu bionic main universe
deb http://archive.ubuntu.com/ubuntu bionic-security main universe
deb http://archive.ubuntu.com/ubuntu bionic-updates main universe
```
{% endif %}

### Download and execute the installation script

{% if product == 'ce' %}
    {% assign scriptSourceUrl = 'https://github.com/passbolt/passbolt_install_scripts' %}
{% else %}
    {% assign scriptSourceUrl = 'https://bitbucket.org/passbolt/passbolt_install_scripts' %}
{% endif %}
*Note that you can find the source code of the install scripts on our [git repository]({{scriptSourceUrl}}).*

The script will take care of installing all the services required by passbolt.
It will ask you a few questions in order to adapt the environment to your needs.

```shell
{%- if distributionVersion == 'latest' %}
{{downloadCmd}} passbolt-{{ product }}-installer-{{ distributionSlug }}.tar.gz https://www.passbolt.com/{{ product }}/download/installers/{{ distribution }}/latest
{{downloadCmd}} passbolt-installer-checksum https://www.passbolt.com/{{ product }}/download/installers/{{ distribution }}/latest-checksum
{% else %}
{{downloadCmd}} passbolt-{{ product }}-installer-{{ distributionSlug }}.tar.gz https://www.passbolt.com/{{ product }}/download/installers/{{ distribution }}/{{ distributionVersion }}/latest
{{downloadCmd}} passbolt-installer-checksum https://www.passbolt.com/{{ product }}/download/installers/{{ distribution }}/{{ distributionVersion }}/latest-checksum
{% endif -%}
sha512sum -c passbolt-installer-checksum
tar -xzf passbolt-{{ product }}-installer-{{ distributionSlug }}.tar.gz
sudo ./passbolt_{{ product }}_{{ distribution }}_installer.sh
```

{% include hosting/install/wizard/install-scripts.md %}
{% include hosting/install/wizard/server.md %}
{% include hosting/install/wizard/admin.md %}

### Frequently asked questions
- [Why are my emails not being sent?](/faq/hosting/why-email-not-sent)
- [How to I increase auto logout timeout?](/faq/hosting/how-to-increase-auto-logout-time)
- [How do I make backups](/faq/hosting/how-to-backup)