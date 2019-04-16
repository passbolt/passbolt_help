
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

{% include hosting/install/warning-gpg-key-generation.html %}

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

