
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
