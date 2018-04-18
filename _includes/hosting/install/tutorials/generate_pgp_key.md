Passbolt API uses an OpenPGP key for the server in order to authenticate and sign the outgoing JSON requests.
{% capture warning_text %}**Note:** Running gpg --gen-key on a virtual machine can take a while because /dev/random does not have enough “randomness” aka entropy. You can speed up the gpg key creation with the **haveged** package to improve the entropy generation :
{% endcapture %}
{% include warning.html content= warning_text %}
```shell
# Only in case of container or VM
$ {{ include.package_manager }} install haveged -y
$ systemctl start haveged
```

Now generate an OpenPGP key

**Important: Currently php-gnupg does not support keys with a passphrase so you will need to leave that field empty.**

```shell
$ gpg --gen-key
```

**Note:** if you do not run this command as `{{ include.webserver_user }}` the result will be stored in `/root/.gnupg`. Thankfully passbolt does import the keys at runtime into the `{{ include.webserver_user }}` keyring if it is not already present.

It’s a good idea to fill in the details properly and not press enter frantically. Make sure you have decent name and email for the key. This will come in handy to identify and verify it down the line.

After creating the key **make sure you note down the fingerprint**, it will be requested later in the install process.
You can get the server key fingerprint as follows:

```shell
$ gpg --list-keys --fingerprint | grep -i -B 2 'SERVER_KEY@EMAIL.TEST'
pub   2048R/28EEB539 2018-04-18
      Key fingerprint = 480E 9564 0F27 6562 39D6  7BF5 8AB6 8641 28EE B539
uid                  firstname lastname <SERVER_KEY@EMAIL.TEST>
```

Copy the public and private keys to the passbolt config location:

```shell
$ gpg --armor --export-secret-keys SERVER_KEY@EMAIL.TEST > /var/www/passbolt/config/gpg/serverkey_private.asc
$ gpg --armor --export SERVER_KEY@EMAIL.TEST > /var/www/passbolt/config/gpg/serverkey.asc
```

We don't want those keys to be readable by anyone, except the webserver.

```shell
$ chmod 640 /var/www/passbolt/config/gpg/serverkey*
```