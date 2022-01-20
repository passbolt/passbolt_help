---
title: How to use docker rootless images
slug: how-to-use-rootless-images
layout: faq
category: hosting
permalink: /faq/hosting/:slug
date: 2021-12-30 00:00:00 Z
---

Our docker-compose.yml example uses root images. If you want to use non-root images, choose [one from available docker tags](https://hub.docker.com/r/passbolt/passbolt/tags?name=non-root){:target="_blank"} as **image** and update **ports** option.

root images uses 80 and 443 ports:

```
version: '3.7'
services:
  db:
    ...
  passbolt:
    image: passbolt/passbolt:latest-ce
    ...
    ports:
      - 80:80
      - 443:443
```

non-root images uses 8080 and 4433 so you need to map ports 80 and 443 to them:

```
version: '3.7'
services:
  db:
    ...
  passbolt:
    image: passbolt/passbolt:latest-ce-non-root
    ...
    ports:
      - 80:8080
      - 443:4433
```

non-root images also uses a different path to handle ssl certificates:

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
```

You can know more about how to setup https on docker on the [https configuration section](/configure/https/).