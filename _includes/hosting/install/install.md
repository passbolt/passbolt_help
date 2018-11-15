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

Installation time: 15 minutes.

If you prefer to install passbolt manually please refer to this documentation: [Install passbolt from source](/hosting/install/ce/from-source.html).

## Prerequisites

For this tutorial, you will need:
- A minimal {{ distributionLabel }} server.
- A domain / host name pointing to your server, or at least being able to reach your server through a static IP address.

The recommended server requirement are:
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

### 1.1. Download and execute the installation script

{% if product == 'ce' %}
    {% assign scriptSourceUrl = 'https://github.com/passbolt/passbolt_install_scripts' %}
{% else %}
    {% assign scriptSourceUrl = 'https://bitbucket.org/passbolt/passbolt_install_scripts' %}
{% endif %}
*Note that you can find the source code of the install scripts on our [git repository]({{scriptSourceUrl}}).*

The script will take care of installing all the services required by passbolt.
It will ask you a few questions in order to adapt the environment to your needs.

```shell
{{downloadCmd}} passbolt-{{ product }}-installer-{{ distributionSlug }}.tar.gz https://www.passbolt.com/{{ product }}/download/installers/{{ distribution }}/latest
{{downloadCmd}} passbolt-installer-checksum https://www.passbolt.com/{{ product }}/download/installers/{{ distribution }}/latest-checksum
sha512sum -c passbolt-installer-checksum
tar -xzf passbolt-{{ product }}-installer-{{ distributionSlug }}.tar.gz
sudo ./passbolt_{{ product }}_{{ distribution }}_installer.sh
```

{% include articles/figure.html url="/assets/img/help/2018/04/execute-install-script.png" legend="execute the install script" width="586px" %}

### 1.2. Do you want to install a local mariadb server on this machine?

- **Yes**: if you are not planning on using an external mysql / mariadb server.
- **No**: if you have a mysql / mariadb server installed somewhere else and want to use it for passbolt.

The script will then ask you for the database details: root password, database name, and password.

### 1.3. Hostname

To configure your webserver, the script needs to know under which hostname or ip it is going to run. Enter here
the address (domain, hostname or ip) at which you are planning to access your passbolt after installation.

example: www.passbolt.local

### 1.4. SSL Setup

- **manual**: (recommended) choose manual if you have your own ssl certificates.
- **auto**: this option will issue a SSL certificate automatically through [Let's Encrypt](https://letsencrypt.org). 
Use this option only if you have a domain name that is reachable by the outside world, or it will not work.
- **none**: choose this option if you don't want your webserver to run https. This is not recommended.

### 1.5. GnuPG entropy

On virtualized environments GnuPG will most likely not be able to find enough entropy to generate a key. 
Therefore, Passbolt will not run properly. The script needs to know if you want to help fix this issue by installing
 Haveged.

Haveged is a useful too to fix entropy issues, however it can have security implications. Make sure you understand 
the risks before answering yes to this question.

For each question, depending on your answer, some more precisions can be asked. Just answer the questions and go 
with the flow.

Your environment is now ready to support passbolt.

{% include articles/figure.html url="/assets/img/help/2018/04/end-install-script.png" legend="completion of the install script" width="586px" %}

## 2. Configure passbolt

Before you can use the application, you need to configure it. Point your browser to the hostname / ip where passbolt 
can be reached. You will reach a getting started page.

{% include articles/figure.html url="/assets/img/help/2018/11/web-installer-getting-started.png" legend="passbolt welcome page before configuration" width="586px" %}

Two options are available: **Manual configuration** and **Wizard configuration**. Choose Wizard configuration.

This tutorial will guide you through the different steps of the wizard. The manual configuration is not
covered in this article.

{% assign stepNumber = 1 %}
### 2.{{ stepNumber }}{% assign stepNumber = stepNumber | plus:1 %}. Healthcheck

The first page of the wizard will tell you if your environment is ready for passbolt. Solve issues if any and click on
"Start configuration" when ready.

{% if product == 'pro' %}
{% include articles/figure.html url="/assets/img/help/2018/11/web-installer-pro-healthcheck.png" legend="wizard - healthcheck" width="586px" %}
{% else %}
{% include articles/figure.html url="/assets/img/help/2018/11/web-installer-ce-healthcheck.png" legend="wizard - healthcheck" width="586px" %}
{% endif %}

{% if product == 'pro' %}
### 2.{{ stepNumber }}{% assign stepNumber = stepNumber | plus:1 %}. Subscription key

At this step, the wizard will ask you for your subscription key. You should have received it by email soon after 
your online purchase. Enter it in the box.

{% include articles/figure.html url="/assets/img/help/2018/11/web-installer-pro-subscription-key.png" legend="wizard - subscription key" width="586px" %}
{% endif %}

### 2.{{ stepNumber }}{% assign stepNumber = stepNumber | plus:1 %}. Database

This step is about telling passbolt which database to use. Enter the host name, port number, database name, username 
and password.

{% if product == 'pro' %}
{% include articles/figure.html url="/assets/img/help/2018/11/web-installer-pro-database.png" legend="wizard - database" width="586px" %}
{% else %}
{% include articles/figure.html url="/assets/img/help/2018/11/web-installer-ce-database.png" legend="wizard - database" width="586px" %}
{% endif %}

### 2.{{ stepNumber }}{% assign stepNumber = stepNumber | plus:1 %}. GPG key

In this section you can either generate or import a GPG key pair. This key pair will be used by passbolt API to 
authenticate itself during the login handshake process.

Generate a key if you don't have one.

{% if product == 'pro' %}
{% include articles/figure.html url="/assets/img/help/2018/11/web-installer-pro-server-key-generate.png" legend="wizard - generate a key pair" width="586px" %}
{% else %}
{% include articles/figure.html url="/assets/img/help/2018/11/web-installer-ce-server-key-generate.png" legend="wizard - generate a key pair" width="586px" %}
{% endif %}

Import a key if you already have one and you want your server to use it.

{% if product == 'pro' %}
{% include articles/figure.html url="/assets/img/help/2018/11/web-installer-pro-server-key-import.png" legend="wizard - import a key pair" width="586px" %}
{% else %}
{% include articles/figure.html url="/assets/img/help/2018/11/web-installer-ce-server-key-import.png" legend="wizard - import a key pair" width="586px" %}
{% endif %}

### 2.{{ stepNumber }}{% assign stepNumber = stepNumber | plus:1 %}. Mail server (SMTP)

At this stage, the wizard will ask you to enter the details of your SMTP server.

{% if product == 'pro' %}
{% include articles/figure.html url="/assets/img/help/2018/11/web-installer-pro-email.png" legend="wizard - smtp mail server details" width="586px" %}
{% else %}
{% include articles/figure.html url="/assets/img/help/2018/11/web-installer-ce-email.png" legend="wizard - smtp mail server details" width="586px" %}
{% endif %}

You can also test that your configuration is correct by using the test email feature at the right of your screen. Enter
the email address at which you want the wizard to send you a test email and click on "Send test email".

{% include articles/figure.html url="/assets/img/help/2018/04/wizard-test-email.png" legend="wizard - test smtp settings" width="300px" %}

### 2.{{ stepNumber }}{% assign stepNumber = stepNumber | plus:1 %}. Preferences

The wizard will then ask you what preferences you prefer for your instance of passbolt. The recommended defaults are already pre-populated
but you can also change them if you know what you are doing.

{% if product == 'pro' %}
{% include articles/figure.html url="/assets/img/help/2018/11/web-installer-pro-options.png" legend="wizard - preferences" width="586px" %}
{% else %}
{% include articles/figure.html url="/assets/img/help/2018/11/web-installer-ce-options.png" legend="wizard - preferences" width="586px" %}
{% endif %}

### 2.{{ stepNumber }}{% assign stepNumber = stepNumber | plus:1 %}. First user creation

You need to create the first admin user account. This first admin user is probably you, so enter your details and click on next.

{% if product == 'pro' %}
{% include articles/figure.html url="/assets/img/help/2018/11/web-installer-pro-first-user.png" legend="wizard - first user" width="586px" %}
{% else %}
{% include articles/figure.html url="/assets/img/help/2018/11/web-installer-ce-first-user.png" legend="wizard - first user" width="586px" %}
{% endif %}

### 2.{{ stepNumber }}{% assign stepNumber = stepNumber | plus:1 %}. Installation

That's it. The wizard has now enough information to proceed with the configuration of passbolt. Sit back and relax for a few seconds while
the configuration process is going on.

{% if product == 'pro' %}
{% include articles/figure.html url="/assets/img/help/2018/11/web-installer-pro-install.png" legend="wizard - installation" width="586px" %}
{% else %}
{% include articles/figure.html url="/assets/img/help/2018/11/web-installer-ce-install.png" legend="wizard - installation" width="586px" %}
{% endif %}

Your user account is now created. You will see a redirection page for a few second and then will be redirected
to the user setup process so that you can configure your user account.

{% if product == 'pro' %}
{% include articles/figure.html url="/assets/img/help/2018/11/web-installer-pro-completed.png" legend="wizard - completion and redirection" width="586px" %}
{% else %}
{% include articles/figure.html url="/assets/img/help/2018/11/web-installer-ce-completed.png" legend="wizard - completion and redirection" width="586px" %}
{% endif %}

## 3. Configure your administrator account

### 3.1. Download the plugin

Before continuing passbolt will require you to download its plugin. If you already have it installed you can go to the
next step.

### 3.2. Check the server identity

Passbolt will ask you to check the URL passbolt is associated with.

If you recognize the domain name, check the checkbox and then click "Next". It is a formality here, but it is a security
mesure that will help later your users to identify you passbolt instance.

{% include articles/figure.html url="/assets/img/help/2018/01/url-check.png" legend="Validation of the domain" width="450px" %}

### 3.3. Create a new key

Passbolt will ask you to create or import a key that will be later use to identify you and encrypt your passwords.

{% include articles/figure.html url="/assets/img/help/2018/11/plugin-registration-key-generate.png" legend="Generate a key" width="450px" %}

### 3.4. Choose a password

Your key needs to be protected by a password. Choose it wisely, it will be the gatekeeper to all your other passwords.

{% include articles/figure.html url="/assets/img/help/2018/01/set-passphrase.png" legend="setting a passphrase" width="450px" %}

### 3.5. Backup your key

This step is essential. Your key is the only way to access your account and passwords. If you lose this key (by breaking
or losing your computer and not having a backup for example), your encrypted data will be lost even if you remember your
passphrase.

{% include articles/figure.html url="/assets/img/help/2018/11/plugin-registration-backup.png" legend="backup your key" width="450px" %}

### 3.6. Define your security token

Choosing a color and a three character token is a secondary security mechanism that helps you to mitigate phishing
attacks. Each time you are performing a sensitive operation on passbolt, you should see this token.

{% include articles/figure.html url="/assets/img/help/2018/11/plugin-registration-security-token.png" legend="define your security token" width="450px" %}

### 3.6. That's it!

Your administrator account is configured. You will be redirected to the login page of passbolt. Enjoy!
