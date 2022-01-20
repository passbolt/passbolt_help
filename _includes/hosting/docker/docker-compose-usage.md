
## docker-compose

The easiest and recommended way to deploy your passbolt stack is to use docker-compose.

{% assign stepNumber = 1 %}

**Step {{ stepNumber }}{% assign stepNumber = stepNumber | plus:1 %}.** Download our docker-compose.yml example file

```
curl -Ls https://raw.githubusercontent.com/passbolt/passbolt_docker/master/docker-compose/docker-compose-{{ product }}.yaml -o docker-compose.yaml
```

**Step {{ stepNumber }}{% assign stepNumber = stepNumber | plus:1 %}.** Ensure the file has not been corrupted by verifying its md5sum

```
$ sha256sum docker-compose.yaml
```

Must return:

{% if product == 'pro' %}
```
d8a6e3865b53768c2327d30bafbbc0389fd6e9d3dd89739a91a51692ebe0157c  docker-compose.yaml
```
{% elsif product == 'ce' %}
```
e93807fdd2be20896e17a8b4bf95f51a427df98afa066aa5b802f68332c27484  docker-compose.yaml
```
{% endif %}

{% include messages/warning.html
    content="<b>Warning:</b> If md5sum is not correct, the downloaded file has been corrupted. Retry the download step or ask for support on <a href='https://community.passbolt.com'>our community forum</a>."
%}

{% if product == 'pro' %}
**Step {{ stepNumber }}{% assign stepNumber = stepNumber | plus:1 %}.** Create a `subscription_key.txt` file containing your subscription key.
{% endif %}

**Step {{ stepNumber }}{% assign stepNumber = stepNumber | plus:1 %}.** Configure environment variables in docker-compose.yaml file to customize your instance.

For more information on which environment variables are available on Passbolt, please check the [passbolt environment variable reference](/configure/environment/reference.html){:target="_blank"}.

**Step {{ stepNumber }}{% assign stepNumber = stepNumber | plus:1 %}.** Start your containers

```
docker-compose up -d
```

**Step {{ stepNumber }}{% assign stepNumber = stepNumber | plus:1 %}.** Create first admin user

```bash
$ docker-compose exec passbolt su -m -c "/usr/share/php/passbolt/bin/cake \
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
