{% if upgrade_from_ce_to_pro != 'yes' %}
## Package repository setup

{% endif %}

For easier installation and update tasks Passbolt provides a package repository that you need to setup
before you download Passbolt {{ product | upcase }} and install it.

**Step 1.** Download our dependencies installation script:

```
wget https://raw.githubusercontent.com/passbolt/passbolt-dep-scripts/main/passbolt-repo-setup.{{ product }}.sh
```

**Step 2.** Ensure that the script is valid and execute it:

```
[ "$(sha256sum passbolt-repo-setup.{{ product }}.sh | awk '{print $1}')" = "{% if product == 'ce' %}ce96ab921e2fa448d48da018e3be0e9646791629dffb13707bbc49b55c739490{% else %}4840c6c322bf39e76ae3169d8c4b02395d0e5d8e7ba7aa1de4c8c0433ba30db0{% endif %}" ] && sudo bash ./passbolt-repo-setup.{{product }}.sh || echo "Bad checksum. Aborting" && rm -f passbolt-repo-setup.{{ product }}.sh
```

{% if upgrade_from_ce_to_pro != 'yes' %}
## Install passbolt official linux package

```
sudo {{ distributionPackage }} install passbolt-{{product}}-server
```

{% if distributionPackage == 'dnf' or distributionPackage == 'yum' %}

During the installation, you will be asked to accept the Passbolt repository GPG key. You must ensure the fingerprint is exactly the same as the one below:

```
Importing GPG key 0xC155581D:
 Userid     : "Passbolt SA package signing key <contact@passbolt.com>"
 Fingerprint: 3D1A 0346 C8E1 802F 774A EF21 DE8B 853F C155 581D
 From       : https://download.passbolt.com/pub.key
```
{% endif %}
{% if distributionPackage == 'zypper' %}

During the installation, you will be asked to accept passbolt GPG repository key. You must ensure the fingerprint is exactly the same as the one below:

```
  Repository:       Passbolt Server
  Key Fingerprint:  3D1A 0346 C8E1 802F 774A EF21 DE8B 853F C155 581D
  Key Name:         Passbolt SA package signing key <contact@passbolt.com>
  Key Algorithm:    RSA 2048
```

If the fingerprint matches, trust always by answering **a** to this question:

```
Do you want to reject the key, trust temporarily, or trust always? [r/t/a/?] (r):
```

Then, you will be asked for PHP repository GPG key, ensure the fingerprint is correct and trust it always:

```
  Repository:       php
  Key Fingerprint:  55CF 98B4 BB5B C6CC 2E24 748F 82EE 4011 CBCA 8BB5
  Key Name:         devel:languages:php OBS Project <devel:languages:php@build.opensuse.org>
  Key Algorithm:    DSA 1024
```

Finally, verify and trust openSUSE PHP extensions repository GPG key:

```
  Repository:       php-extensions-x86_64
  Key Fingerprint:  A85C D7EF 5242 1152 9A7F 994A 9B41 A048 1AF1 B065
  Key Name:         server:php:extensions OBS Project <server:php:extensions@build.opensuse.org>
  Key Algorithm:    RSA 2048
```


{% endif %}
{% endif %}