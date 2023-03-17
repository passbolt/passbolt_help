
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


**Step {{ stepNumber }}{% assign stepNumber = stepNumber | plus:1 %}.** Configure values file to customize your instance {% if product == 'pro' %} and enable the Pro install {% endif %}.


The `APP_FULL_BASE_URL` environment variable is set by default to [https://passbolt.local](https://passbolt.local), using a self-signed certificate.

Update this variable with the server name you plan to use. You will find at the bottom of this documentation links about how to set your own SSL certificate.

{% if product == 'pro' %}
As the `values.yaml` file is set up for CE by default you'll need to adjust the [tag](https://hub.docker.com/r/passbolt/passbolt/tags) for the Passbolt image to pro. You can find this on line 59 of `values.yaml`.
```
    # -- Overrides the image tag whose default is the chart appVersion.
    tag: 3.11.1-1-pro
```
 It is recommended to just change ce to pro but you can use any of the tags that you want to.

The next thing you will need to do is uncomment the two lines dealing with the subscription key. You can find these on lines 88 and 90.

```

# -- Pro subscription key in base64 only if you are using pro version
subscriptionKey:
# -- Configure passbolt subscription key path
subscription_keyPath: /etc/passbolt/subscription_key.txt
```
For subscription key it expects the key to be base64 encoded. Yes, the one supplied to you by us is already base64 encoded once, but you'll need to do that again and put that in as the value for `subscriptionKey`.

{% endif %}

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
