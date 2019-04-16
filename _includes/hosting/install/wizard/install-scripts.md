
{% include articles/figure.html 
    url="/assets/img/help/2018/04/execute-install-script.png" 
    legend="execute the install script" 
    width="586px" 
%}

### Do you want to install a local mariadb server on this machine?

- **Yes**: if you are not planning on using an external mysql / mariadb server.
- **No**: if you have a mysql / mariadb server installed somewhere else and want to use it for passbolt.

The script will then ask you for the database details: root password, database name, and password.

### Hostname

To configure your webserver, the script needs to know under which hostname or ip it is going to run. Enter here
the address (domain, hostname or ip) at which you are planning to access your passbolt after installation.

example: my-passbolt.acme.com

### SSL Setup

- **manual**: (recommended) choose manual if you have your own ssl certificates.
- **auto**: this option will issue a SSL certificate automatically through [Let's Encrypt](https://letsencrypt.org). 
Use this option only if you have a domain name that is reachable by the outside world, or it will not work.
- **none**: choose this option if you don't want your webserver to run https. This is not recommended.

### Common GnuPG issues

On virtualized environments GnuPG will most likely not be able to find enough entropy to generate a key. 
Therefore, Passbolt will not run properly. The script needs to know if you want to help fix this issue by installing
 Haveged.

Haveged is a useful too to fix entropy issues, however it can have security implications. Make sure you understand 
the risks before answering yes to this question.

{% include hosting/install/warning-gpg-key-generation.html %}

For each question, depending on your answer, some more precisions can be asked. Just answer the questions and go 
with the flow.

Your environment is now ready to support passbolt.

{% include articles/figure.html 
    url="/assets/img/help/2018/04/end-install-script.png" 
    legend="completion of the install script" 
    width="586px" 
%}
