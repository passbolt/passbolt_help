---
title: Docker Secrets
slug: docker-secrets
layout: faq
category: hosting
permalink: /faq/hosting/:slug
date: 2023-01-16 00:00:00 Z
---
This page should give you the information necessary to successfully use [Docker Secrets](https://docs.docker.com/engine/swarm/secrets/) with your Passbolt installation.

{% include messages/notice.html
    content="<b>Notice:</b> To use Docker Secrets you must be using [Docker Swarm](https://docs.docker.com/engine/swarm/)!"
%}


### Supported environment variables
List of [environment variables](/configure/environment/reference.html){:target="_blank"} that can be received as docker secret and the matching docker secret path environment variable:

| PASSBOLT ENV VAR                         | DOCKER SECRET ENV VAR                                                     | 
| ---------------------------------------- | ------------------------------------------------------------------------- | 
| DATASOURCES_DEFAULT_PASSWORD             | DATASOURCES_DEFAULT_PASSWORD_FILE                                         |
| DATASOURCES_DEFAULT_HOST                 | DATASOURCES_DEFAULT_HOST_FILE                                             |
| DATASOURCES_DEFAULT_USERNAME             | DATASOURCES_DEFAULT_USERNAME_FILE                                         |
| DATASOURCES_DEFAULT_DATABASE             | DATASOURCES_DEFAULT_DATABASE_FILE                                         |
{: .table-parameters }


### Supported secret files
List of file that contains secret data and the matching docker secret path environment variable:

| FILE PATH                                |  DOCKER SECRET ENV VAR                                                    |
| ---------------------------------------- | ------------------------------------------------------------------------- |
| etc/passbolt/gpg/serverkey.asc           | PASSBOLT_GPG_SERVER_KEY_PUBLIC_FILE                                       | 
| /etc/passbolt/gpg/serverkey_private.asc  | PASSBOLT_GPG_SERVER_KEY_PRIVATE_FILE                                      | 
| /etc/ssl/certs/certificate.crt           | PASSBOLT_SSL_SERVER_CERT_FILE                                             | 
| /etc/ssl/certs/certificate.key           | PASSBOLT_SSL_SERVER_KEY_FILE                                              |
{: .table-parameters }

### Examples 
#### Inject DATASOURCES_DEFAULT_PASSWORD variable usign docker secrets
Following the docker secrets documentation for docker compose we have the following docker-compose.yaml example:
```
services:

   passbolt:
     ... 
     environment:
       DATASOURCES_DEFAULT_PASSWORD_FILE: /run/secrets/db_password
     secrets:
       - db_password
     ...

secrets:
   db_password:
     file: db_password.txt
```
 
In this example we want to inject the content of ‘db_password.txt’ in the DATASOURCES_DEFAULT_PASSWORD environment variable inside the passbolt container.

To do so we create the secret and call it db_password in this snippet:
```
secrets:
   db_password:
     file: db_password.txt
```

Once we have this, we use this secret on the  passbolt service:
```
services:
   passbolt:
     ... 
     secrets:
       - db_password
     ...
```

Finally, we have to check which environment variable we have to set in order to get the content of the secret file in the DATASOURCES_DEFAULT_PASSWORD var. So we check in the Supported environment variables section to get the correct variable (DATASOURCES_DEFAULT_PASSWORD_FILE in this case) and set it on the passbolt container environment with the path that points to the secret name:
```
services:
   passbolt:
     ... 
     environment:
       DATASOURCES_DEFAULT_PASSWORD_FILE: /run/secrets/db_password
```

#### Inject /etc/ssl/certs/certificate.pem file using docker secrets
```
services:

   passbolt:
     ... 
     environment:
       PASSBOLT_SSL_SERVER_CERT_FILE: /run/secrets/ssl_cert
     secrets:
       - ssl_cert
     ...

secrets:
   ssl_cert:
     file: ssl_cert.pem
```

In this example we want to inject the contents of ‘ssl_cert.pem’ in the ‘/etc/ssl/certs/certificate.pem’ file inside the passbolt container. 

To do so, we create a docker secret and call it ssl_cert with the contents of ssl_cert.pem:
```
secrets:
   ssl_cert:
     file: ssl_cert.pem
```


Then we inject the secret in the passbolt service:
```
services:
   passbolt:
     ... 
     secrets:
       - ssl_cert
     ...
```
And finally, we go to the Supported secret files section to get which environment variable is the one that points to the path I want to fill ( PASSBOLT_SSL_SERVER_CERT_FILE which points to ‘/etc/ssl/certs/certificate.crt’):
```
services:
   passbolt:
     ... 
     environment:
       PASSBOLT_SSL_SERVER_CERT_FILE: /run/secrets/ssl_cert
```
