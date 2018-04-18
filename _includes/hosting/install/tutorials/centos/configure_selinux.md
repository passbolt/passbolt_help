If your CentOS installation comes with SElinux enabled please follow this steps to make sure that passbolt works with it. If SElinux is disabled, there is no need to enable it in order for passbolt to work.

Check that selinux is enabled using (as root):

```shell
$ sestatus
SELinux status:                 enabled
SELinuxfs mount:                /sys/fs/selinux
SELinux root directory:         /etc/selinux
Loaded policy name:             targeted
Current mode:                   enforcing
Mode from config file:          enforcing
Policy MLS status:              enabled
Policy deny_unknown status:     allowed
Max kernel policy version:      28
```

First we grant access to the httpd service (nginx) access to the files under `/var/www` recursively so it will also have access to `/var/www/passbolt` files.

```shell
$ semanage fcontext -a -t httpd_sys_content_t '/var/www(/.*)?'
```

Passbolt will need to write on the tmp directory (for file caching for example) we grant read and write access to the httpd service to these directories:

```shell
$ semanage fcontext -a -t httpd_sys_rw_content_t '/var/www/passbolt/tmp(/.*)?'
```
Passbolt will also need to write on the logs directory. We grant read and write access to the httpd service to these directories:

```shell
$ semanage fcontext -a -t httpd_sys_rw_content_t '/var/www/passbolt/logs(/.*)?'
```

Once the permissions are in place we tell SELinux to upgrade the file tags that we have just changed:

```shell
$ restorecon -Rv /var/www
```

Passbolt and therefore the httpd service require read and write access to nginx gnupg keyring:

```shell
$ semanage fcontext -a -t httpd_sys_rw_content_t '/var/lib/nginx/.gnupg(/.*)?'
$ restorecon -Rv /var/lib/nginx/.gnupg
```

For more information on SELinux: [https://wiki.centos.org/HowTos/SELinux](https://wiki.centos.org/HowTos/SELinux)


