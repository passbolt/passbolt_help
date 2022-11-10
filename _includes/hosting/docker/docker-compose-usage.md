
## docker-compose

The easiest and recommended way to deploy your passbolt stack is to use docker-compose.

{% assign stepNumber = 1 %}

**Step {{ stepNumber }}{% assign stepNumber = stepNumber | plus:1 %}.** Download our docker-compose.yml example file

```
wget https://download.passbolt.com/{{ product }}/docker/docker-compose-{{ product }}.yaml
wget https://github.com/passbolt/passbolt_docker/releases/latest/download/docker-compose-{{ product }}-SHA512SUM.txt
```

**Step {{ stepNumber }}{% assign stepNumber = stepNumber | plus:1 %}.** Ensure the file has not been corrupted by verifying its shasum

```
$ sha512sum -c docker-compose-{{ product }}-SHA512SUM.txt

```

Must return:

```
docker-compose-{{ product }}.yaml: OK
```

{% include messages/warning.html
    content="<b>Warning:</b> If the <i>shasum</i> command output is not correct, the downloaded file has been corrupted. Retry step 1 or ask for support on <a href='https://community.passbolt.com'>our community forum</a>."
%}

{% if product == 'pro' %}
**Step {{ stepNumber }}{% assign stepNumber = stepNumber | plus:1 %}.** Create a `subscription_key.txt` file containing your subscription key.
{% endif %}

**Step {{ stepNumber }}{% assign stepNumber = stepNumber | plus:1 %}.** Configure environment variables in docker-compose-{{ product }}.yaml file to customize your instance.

{% include messages/notice.html
    content="<b>Notice:</b> By default the docker-compose.yaml file is set to **latest**. We strongly recommend 
    changing that to the [tag](https://hub.docker.com/r/passbolt/passbolt/tags){:target='_blank'} for the version you want to install."
%}

The `APP_FULL_BASE_URL` environment variable is set by default to [https://passbolt.local](https://passbolt.local), using a self-signed certificate.

Update this variable with the server name you plan to use. You will find at the bottom of this documentation links about how to set your own SSL certificate.

You must configure also SMTP settings to be able to receive notifications and recovery emails. Please find below
the most used environment variables for this purpose:

| Variable name                    | Description                    | Default value     |
|----------------------------------|--------------------------------|-------------------|
| EMAIL_DEFAULT_FROM_NAME          | From email username            | `'Passbolt'`      |
| EMAIL_DEFAULT_FROM               | From email address             | `'you@localhost'` |
| EMAIL_TRANSPORT_DEFAULT_HOST     | Server hostname                | `'localhost'`     |
| EMAIL_TRANSPORT_DEFAULT_PORT     | Server port                    | `25`              |
| EMAIL_TRANSPORT_DEFAULT_USERNAME | Username for email server auth | `null`            |
| EMAIL_TRANSPORT_DEFAULT_PASSWORD | Password for email server auth | `null`            |
| EMAIL_TRANSPORT_DEFAULT_TLS      | Set tls                        | `null`            |
{: .table-parameters }

For more information on which environment variables are available on passbolt, please check the [passbolt environment variable reference](/configure/environment/reference.html){:target="_blank"}.

**Step {{ stepNumber }}{% assign stepNumber = stepNumber | plus:1 %}.** Start your containers

```
docker-compose -f docker-compose-{{ product }}.yaml up -d
```

**Step {{ stepNumber }}{% assign stepNumber = stepNumber | plus:1 %}.** Create first admin user

```bash
$ docker-compose -f docker-compose-{{ product }}.yaml exec passbolt su -m -c "/usr/share/php/passbolt/bin/cake \
                                passbolt register_user \
                                -u <your@email.com> \
                                -f <yourname> \
                                -l <surname> \
                                -r admin" -s /bin/sh www-data
```

It will output a link similar to the below one that can be pasted on the browser to finalize user registration:

```
https://my.domain.tld/setup/install/1eafab88-a17d-4ad8-97af-77a97f5ff552/f097be64-3703-41e2-8ea2-d59cbe1c15bc
```

At this point, you should have a working docker setup running on the **latest** tag. However, it is recommended that users [pull the tags pointing to specific passbolt versions](https://hub.docker.com/r/passbolt/passbolt/tags){:target="_blank"} when running in environments other than testing.

## Going further

Docker FAQs:

* [How to configure SMTP to receive emails](/configure/email/setup){:target="_blank"}
* [How to configure HTTPS with my own certificates in docker](/configure/https/{{ product }}/docker/manual.html){:target="_blank"}
* [How to configure HTTPS with Let's Encrypt in docker](/configure/https/{{ product }}/docker/auto.html){:target="_blank"}
* [How to use rootless images](/faq/hosting/how-to-use-rootless-images){:target="_blank"}
* [Troubleshoot Docker](/faq/hosting/troubleshoot-docker){:target="_blank"}
* [Passbolt reference environment variables](/configure/environment/reference.html){:target="_blank"}

Passbolt docker repository:

* [https://github.com/passbolt/passbolt_docker/](https://github.com/passbolt/passbolt_docker/){:target="_blank"}
