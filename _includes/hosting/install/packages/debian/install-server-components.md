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
[ "$(sha256sum passbolt-repo-setup.{{ product }}.sh | awk '{print $1}')" = "{% if product == 'ce' %}84a7ecf5d42a729f6e015de72f9aef1fabbae13e133ff802491bb9d18950d1d6{% else %}215b8bc3e2e78d720f6c47079f0aae36eb64c257de5b3fc86aefb391f8cf24a9{% endif %}" ] && sudo bash ./passbolt-repo-setup.{{product }}.sh || echo "Bad checksum. Aborting" && rm -f passbolt-repo-setup.{{ product }}.sh
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