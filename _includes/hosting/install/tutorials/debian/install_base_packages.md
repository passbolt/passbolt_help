No need to install any particular package such as the webserver (apache) during the setup. Let’s stick to the bare minimum for now, as we will do the rest manually.

Since we will need administrator privileges to perform most of the steps, you could either setup sudo for your default user, or log in the terminal as root.
```shell
sudo bash
```

We can install some basic utilities: Git, composer, unzip, make, the linux kernel headers and a compiler, as will all be needed later on.

```shell
$ apt-get install make git-core composer unzip g++ linux-headers-amd64 -y
```