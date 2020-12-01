Passbolt Amazon Machine Image (AMI) provides a ready to use passbolt image that you can
use for free on your Amazon Web Services infrastructure.
The AMI includes the following software:

- Debian 10
- Nginx
- Php-fpm
- Mariadb
- Passbolt {{ product | upcase }} preinstalled
- certbot

This AMI does not provide an email server preinstalled so users can manually install it or
leverage on third party email providers.


## 1. Getting started with passbolt {{ product | upcase }} AMI

You can subscribe to passbolt  {{ product | upcase }} on the following [AWS marketplace listing](https://aws.amazon.com/marketplace/pp/B08PDGS3ML). Just
click on "continue to subscribe" button on the listing page.

{% include articles/figure.html url="/assets/img/help/2020/12/subscribe-aws.png" legend="subscribe to passbolt marketplace community edition" width="586px" %}

The EULA for the passbolt {{ product | upcase }} is the AGPL license you have to accept that in order
to use this image by just clicking on the "Accept terms" button.

{% include articles/figure.html url="/assets/img/help/2020/12/accept-terms.png" legend="Accept AMI terms" width="586px" %}

Once the terms are accepted you can click on "Continue to configuration" button. In the next
screen you will be able to select which version of the AMI you want to use as well as in which AWS region
you want the instance to be launched.
Once you have selected your desired configuration just click on "Continue to Launch" button.

{% include articles/figure.html url="/assets/img/help/2020/12/configure-aws.png" legend="Configure instance region and version" width="586px" %}

On the launch screen you will be able to select:
- How to launch the instance
- Instance type
- VPC
- Subnet settings
- Security group settings
- Key pair settings

If you do not know what this fields mean just rely on the defaults making sure that they key pair
is available on your local machine so you can connect through SSH to the instance.
If all the values are good just click on "Launch" button.

{% include articles/figure.html url="/assets/img/help/2020/12/launch-aws.png" legend="Launch instance" width="586px" %}

### 1.1 Connect to your instance

As soon as your passbolt instance is ready connect to it using ssh. You can leverage on the
automatic AWS DNS that is automatically attached to the instance:

```
ssh admin@ec2-my-instance-ip.compute-1.amazonaws.com
```

Where 'my-instance-ip' would be the public ip address assigned to the instance dash separated. For example

```
ec2-10-0-0-1.compute-1.amazonaws.com
```

This dynamic DNS name might vary depending on your IP but also on the region you run your instance. More information
about AWS public DNS names [here](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-instance-addressing.html#concepts-public-addresses)

### 1.2 Retrieve the credentials

<div class="message notice">
<p>Note: the appliance performs some actions on the first boot:</p>
<ul>
<li>Create ssh host keys</li>
<li>Enable ssh</li>
<li>Create a set of random mariadb credentials for the mariadb server installed on the appliance</li>
<li>Create an empty database where passbolt can be installed.</li>
</ul>
</div>


The `admin` user is part of `sudo` group. There is no root password, so you cannot
login in as root. You can however create a shell as root with the default user:

```
sudo -s
```

Mariadb credentials are stored on `/root/.mysql_credentials`. You will need to retrieve them for the next step:

```
sudo cat /root/.mysql_credentials
```

The file contains: 
- Random password for root user
- Empty database name. It follows the pattern passbolt_random_id
- Random user and password with permissions for the passbolt database

Output example:
```
root_username = root
root_password = "SOME_RANDOM_PASSWORD_HERE"

username = "passbolt_usr_l9WIsaQO"
password = "SOME_RANDOM_PASSWORD_HERE"
database = "passbolt_p5aEMDJ9"
```

Please note that 'l9WIsaQO' is a random generated identifier that might vary from instance to instance.

### 1.3. Setup HTTPS (optional, but highly recommended):

If you are planning to use this AWS instance in production, it is highly recommended to setup SSL. There are two main methods described below:

- [Auto (Using Let's Encrypt)](/configure/https/{{ product }}/debian/auto.html)
- [Manual (Using user-provided SSL certificates)](/configure/https/{{ product }}/debian/manual.html)

## 2. Configure passbolt

Before you can use the application, you need to configure it. Point your browser to the hostname / ip where passbolt can
be reached. You will reach a getting started page.

{% include articles/figure.html url="/assets/img/help/2018/11/web-installer-getting-started.png" legend="passbolt welcome page before configuration" width="586px" %}

Two options are available: **Manual configuration** and **Wizard configuration**. Choose Wizard configuration.

This tutorial will guide you through the different steps of the wizard. The manual configuration is not
covered in this article.

{% assign stepNumber = 1 %}
### 2.{{ stepNumber }}{% assign stepNumber = stepNumber | plus:1 %}. Healthcheck

The first page of the wizard will tell you if your environment is ready for passbolt. Solve any issues and click on
"Start configuration" when ready.

{% if product == 'pro' %}
{% include articles/figure.html url="/assets/img/help/2018/11/web-installer-pro-healthcheck.png" legend="wizard - healthcheck" width="586px" %}
{% else %}
{% include articles/figure.html url="/assets/img/help/2018/11/web-installer-ce-healthcheck.png" legend="wizard - healthcheck" width="586px" %}
{% endif %}

{% if product == 'pro' %}
### 2.{{ stepNumber }}{% assign stepNumber = stepNumber | plus:1 %}. Subscription key

At this step, the wizard will ask you for your subscription key. You should have received it by email soon after your online purchase.
Enter it in the box.

{% include articles/figure.html url="/assets/img/help/2018/11/web-installer-pro-subscription-key.png" legend="wizard - subscription key" width="586px" %}
{% endif %}

### 2.{{ stepNumber }}{% assign stepNumber = stepNumber | plus:1 %}. Database

This step is about telling passbolt which database to use. For the sake of this example we
will use the preinstalled mariadb server that comes with the AMI so hostname is fixed to '127.0.0.1'
and the credentials provided in the `/root/.mysql_credentials`

- Hostname: 127.0.0.1
- Port number: 3306
- Database name: passbolt_p5aEMDJ9
- Username: passbolt_usr_l9WIsaQO
- Password: SOME_RANDOM_PASSWORD_HERE

{% if product == 'pro' %}
{% include articles/figure.html url="/assets/img/help/2018/11/web-installer-pro-database.png" legend="wizard - database" width="586px" %}
{% else %}
{% include articles/figure.html url="/assets/img/help/2018/11/web-installer-ce-database.png" legend="wizard - database" width="586px" %}
{% endif %}

### 2.{{ stepNumber }}{% assign stepNumber = stepNumber | plus:1 %}. GPG key

In this section you can either generate or import a GPG key pair. This key pair will be used by passbolt API to authentify itself during the
authentication handshake process.

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

The wizard will then ask the preferences for your passbolt instance. The recommended defaults are already pre-populated
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
