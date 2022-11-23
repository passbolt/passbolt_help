
## helm install

The easiest and recommended way to deploy your passbolt helm chart is to use helm install.

{% assign stepNumber = 1 %}

**Step {{ stepNumber }}{% assign stepNumber = stepNumber | plus:1 %}.** Set up our helm repo

```bash
helm repo add passbolt-repo https://download.passbolt.com/charts
```

**Step {{ stepNumber }}{% assign stepNumber = stepNumber | plus:1 %}.** Download the default values.yaml file

```bash
wget <some link to values.yaml file here>
```


**Step {{ stepNumber }}{% assign stepNumber = stepNumber | plus:1 %}.** Configure values file to customize your instance.

You can find a complete list of the values included with Passbolt in the table below on this page.

The `APP_FULL_BASE_URL` environment variable is set by default to [https://passbolt.local](https://passbolt.local), using a self-signed certificate.

Update this variable with the server name you plan to use. You will find at the bottom of this documentation links about how to set your own SSL certificate.

If you are creating your own gpg keys the following commands can help convert them into a base64 encoded single line string which is what the values.yaml file expects.

```bash
gpg --armor --export-secret-keys <email you created keys with>  | base64 -w 0
gpg --armor --export <email you created keys with> | base64 -w 0
```

You must configure also SMTP settings to be able to receive notifications and recovery emails.

For more information on which environment variables are available on passbolt, please check the [passbolt environment variable reference](/configure/environment/reference.html){:target="_blank"}.

Additionally the following charts are used by Passbolt and you can adjust the values under their respective headings in values.yaml

{% include hosting/helm/helm-required-charts.md %}

**Step {{ stepNumber }}{% assign stepNumber = stepNumber | plus:1 %}.** Run helm install

```
helm install -f values.yaml my-passbolt passbolt-repo
```


At this point, you should have a working docker setup running on the **latest** tag. However, it is recommended that users [pull the tags pointing to specific passbolt versions](https://hub.docker.com/r/passbolt/passbolt/tags){:target="_blank"} when running in environments other than testing.
