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
[ "$(sha256sum passbolt-repo-setup.{{ product }}.sh | awk '{print $1}')" = "{% if product == 'ce' %}aefee8175e3dc2a992e0b614c3dd81ca1d666e59e0a9909967c52b88e348da59{% else %}0ff97de3fec532cb0297002ae4c0f836da3b0631232634ddea751c8b3d67c049{% endif %}" ] && sudo bash ./passbolt-repo-setup.{{product }}.sh || echo "Bad checksum. Aborting" && rm -f passbolt-repo-setup.{{ product }}.sh
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
{% endif %}