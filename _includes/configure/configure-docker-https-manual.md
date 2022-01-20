{% include messages/warning.html
    content="If you are migrating your passbolt instance from HTTP to HTTPS, you must ensure <b>all of your users have a backup of their private key</b>.<br />
    As for passbolt browser extension, domain will change from HTTP to HTTPS, it will trigger <b><a href='/faq/start/account-recover'>an account recovery</a></b>."
%}

## Requirements

* [docker setup with docker-compose](/hosting/install/{{ product }}/docker.html)

## HTTPS configuration

You need to bind-mount your certificates inside passbolt container to use them.

Create a certs folder and put your certificates there:

```
mkdir certs
mv /path/to/your/certificate.crt certs/cert.pem
mv /path/to/your/certificate.key certs/key.pem
```

The bind-mount configuration will differ depending which passbolt image you are using.

### standard images

If you are using standard passbolt image, add your certificates in the volumes definition of the passbolt service and ensure ports are well mapped:

```
version: '3.7'
services:
  db:
    ...
  passbolt:
    ...
    volumes:
      ...
      - ./certs/cert.pem:/etc/ssl/certs/certificate.crt:ro
      - ./certs/key.pem:/etc/ssl/certs/certificate.key:ro
    ports:
      - 80:80
      - 443:443
```

Ensure your **APP_FULL_BASE_URL** environment variable starts with **https://**

### rootless images

If you are using rootless images, [tagged as non-root](https://hub.docker.com/r/passbolt/passbolt/tags?name=non-root){:target="_blank"}, the bind-mount path will be different as well as port mapping:

```
version: '3.7'
services:
  db:
    ...
  passbolt:
    ...
    volumes:
      ...
      - ./certs/cert.pem:/etc/passbolt/certs/certificate.crt:ro
      - ./certs/key.pem:/etc/passbolt/certs/certificate.key:ro
    ports:
      - 80:8080
      - 443:4433
```

Like standard images, ensure your **APP_FULL_BASE_URL** environment variable starts with **https://**