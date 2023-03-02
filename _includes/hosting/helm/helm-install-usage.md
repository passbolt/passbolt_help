
## Helm install

The easiest and recommended way to deploy your Passbolt Helm chart is to use `helm install`.

{% assign stepNumber = 1 %}

**Step {{ stepNumber }}{% assign stepNumber = stepNumber | plus:1 %}.** Set up our Helm repo

```bash
helm repo add passbolt-repo https://download.passbolt.com/charts/passbolt
```

**Step {{ stepNumber }}{% assign stepNumber = stepNumber | plus:1 %}.** Get a copy of the values file

```bash
wget https://raw.githubusercontent.com/passbolt/charts-passbolt/main/values.yaml
```


**Step {{ stepNumber }}{% assign stepNumber = stepNumber | plus:1 %}.** Configure values file to customize your instance.


The `APP_FULL_BASE_URL` environment variable is set by default to [https://passbolt.local](https://passbolt.local), using a self-signed certificate.

Update this variable with the server name you plan to use. You will find at the bottom of this documentation links about how to set your own SSL certificate.

If you are creating your own gpg keys the following commands can help convert them into a base64 encoded single line string which is what the values.yaml file expects.

```bash
gpg --armor --export-secret-keys <email you created keys with>  | base64 -w 0
gpg --armor --export <email you created keys with> | base64 -w 0
```

You must configure also SMTP settings to be able to receive notifications and recovery emails.

For more information on which environment variables are available on passbolt, please check the [passbolt environment variable reference](/configure/environment/reference.html){:target="_blank"}.

{% include messages/notice.html
    content="<b>Important:</b> By default we have the ingress set to false, you'll need to decide how you want to handle this to access the web page."
%}

Additionally the following charts are used by Passbolt and you can adjust the values under their respective headings in values.yaml

{% include hosting/helm/helm-required-charts.md %}

**Step {{ stepNumber }}{% assign stepNumber = stepNumber | plus:1 %}.** Run helm install

```
helm install -f values.yaml my-passbolt passbolt-repo/passbolt
```


At this point, you should have a working Passbolt setup via Helm running on the most up to date CE version of Passbolt.
