## System requirements

* Docker CE

## Optional system requirements

* MySQL < 8.x or MariaDB as separated containers or host installation.
* docker-compose if you plan to use a docker-compose.yml file to run passbolt container.
* rng-tools/haveged for faster filling of container entropy pool. These tools come handy in cases where GnuPG complains about no entropy is available to perform some operation (generate keys, encrypt, sign...) inside the docker container. [Important considerations](https://security.stackexchange.com/questions/39992/is-it-safe-to-use-rng-tools-on-a-virtual-machine)
