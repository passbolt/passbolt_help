
## 1. Getting started with Passbolt Pro VM

### 1.1 Download

Download the ova and the SHA512SUM.txt:

- [Passbolt Pro VM](https://www.passbolt.com/pro/download/vm/debian/latest)
- [SHA512SUM.txt](https://www.passbolt.com/pro/download/vm/debian/latest-checksum)

Import the ova file using virtualbox, vmware (ESXi >= 6.0) or any other platform that supports import OVA files.

Once imported, it is highly recommanded to check if the VM is actually running in 64 bits. In order to do that, just open VM's settings and it should show on which version it is running on. Now, you should be able to boot the VM and just point to the VM ip address with their web browser to initiate the passbolt install process.

### 1.2 Credentials

The appliance performs some actions on the first boot:
- Creates ssh host keys
- Enables ssh
- Creates a set of random mariadb credentials for the mariadb server installed on the appliance
- Creates an empty database where passbolt can be installed.

For the first login the appliance comes with the following ssh default credentials:

```bash
VM login credentials:
username: passbolt
password: admin
```

The `passbolt` user is part of `sudo` group. There is no root password, so you cannot
login in as root. You can however create a shell as root with the default user:
```
sudo -s
```

{% if migrate == false %}
### 1.3. HTTPS setup process:

Passbolt Pro VM uses passbolt debian package.  Depending on your needs there are two different options to setup nginx and SSL using the debian package:

- [Auto (Using Let's Encrypt)](/configure/https/{{ product }}/ova/auto.html)
- [Manual (Using user-provided SSL certificates)](/configure/https/{{ product }}/debian/manual.html)
{% endif %}