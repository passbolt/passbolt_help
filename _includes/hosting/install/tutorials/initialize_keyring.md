In order for passbolt authentication to work your server key needs to be in the keyring used by the web server.
It is likely that there is none, so you can create one by interacting with gpg with the web server user

In {{ include.distribution_name }}, the home directory of the web server user {{ include.webserver_user }} is {{ include.home_directory }}. 

{% if include.force_ownership %}
We need to give ownership of this folder to {{ include.webserver_user }} , since it is not there by default.

```shell
$ chown {{ include.webserver_user }}:{{ include.webserver_user }} {{ include.home_directory }}
```
{% endif %}

We create the keyring for the webserver:

```shell
$ sudo su -s /bin/bash -c "gpg --list-keys" {{ include.webserver_user }}
gpg: directory '{{ include.home_directory }}/.gnupg' created
gpg: keybox '{{ include.home_directory }}/.gnupg/pubring.kbx' created
gpg: {{ include.home_directory }}/.gnupg/trustdb.gpg: trustdb created
```