No need to install any particular package such as the webserver (nginx) during the initial setup. Let’s stick to the bare minimum for now, as we will do the rest manually.

Since we will need administrator privileges to perform most of the steps, you could either setup sudo for your default user, or log in the terminal as root.
```shell
sudo bash
```

Let’s first update our yum database and enable EPEL repositories to 
install all the required passbolt components:

```shell
$ yum update
$ yum -y install yum-utils epel-release
```
We also install remi's repositories which will be helpful for PHP 7.2

```shell
$ yum -y install 'http://rpms.remirepo.net/enterprise/remi-release-7.rpm'
$ yum-config-manager --enable 'remi-php72'
```

Finally, we can install some basic utilities: 
- gcc is required to build php-gnupg extension throuhg PECL.
- git will be required to clone passbolt source code
- policycoreutils-python will install some binaries to easily manage selinux policies such as semanage.

```shell
$ yum -y install unzip wget composer policycoreutils-python git gcc 
```