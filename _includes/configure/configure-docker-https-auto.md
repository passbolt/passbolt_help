{% include messages/warning.html
    content="If you are migrating your passbolt instance from HTTP to HTTPS, you must ensure <b>all of your users have a backup of their private key</b>.<br />
    As for passbolt browser extension, domain will change from HTTP to HTTPS, it will trigger <b><a href='/faq/start/account-recover'>an account recovery</a></b>."
%}

{%
    include messages/warning.html
    content="**Important requirement:** This tutorial assumes your machine has a valid domain name assigned in
    order to work with let's encrypt."
%}

## Requirements

* [docker setup with docker-compose](/hosting/install/{{ product }}/docker.html)
* A domain name reachable over the internet

### Add traefik service to handle https

If you have followed [our installation documentation](/hosting/install/{{ product }}/docker.html), you should have defined **db** and **passbolt** services for your passbolt stack.

To handle HTTPS setup with Let's Encrypt, add a traefik service as follow:

```
version: '3.7'
services:
  db:
    ...
  passbolt:
    ...
  traefik:
    image: traefik:2.6
    restart: always
    ports:
      - 80:80
      - 443:443
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock:ro
      - ./traefik.yaml:/traefik.yaml:ro
      - ./conf/:/etc/traefik/conf
      - ./shared/:/shared
```

Traefik will:
* act as a proxy in front of passbolt service, that's why we defined ports 80 and 443.
* handle Let's Encrypt certificates renew.

### configuration files

Create a **traefik.yaml** configuration file with this content (replace yourname@domain.tld with your email for Let's Encrypt):

```
global:
  sendAnonymousUsage: false
log:
  level: INFO
  format: common
providers:
  docker:
    endpoint: 'unix:///var/run/docker.sock'
    watch: true
    exposedByDefault: true
    swarmMode: false
  file:
    directory: /etc/traefik/conf/
    watch: true
api:
  dashboard: false
  debug: false
  insecure: false
entryPoints:
  web:
    address: ':80'
    http:
      redirections:
        entryPoint:
          to: websecure
          scheme: https
          permanent: true
  websecure:
    address: ':443'
certificatesResolvers:
  letsencrypt:
    acme:
      email: yourname@domain.tld
      storage: /shared/acme.json
      caServer: 'https://acme-v02.api.letsencrypt.org/directory'
      keyType: EC256
      httpChallenge:
        entryPoint: web
      tlsChallenge: {}
```

Create a **conf** folder:

```
mkdir conf
```

In the **conf** folder, create 2 files:

**conf/headers.yaml**:

```
http:
  middlewares:
    SslHeader:
      headers:
        FrameDeny: true
        AccessControlAllowMethods: 'GET,OPTIONS,PUT'
        AccessControlAllowOriginList:
          - origin-list-or-null
        AccessControlMaxAge: 100
        AddVaryHeader: true
        BrowserXssFilter: true
        ContentTypeNosniff: true
        ForceSTSHeader: true
        STSIncludeSubdomains: true
        STSPreload: true
        ContentSecurityPolicy: default-src 'self' 'unsafe-inline'
        CustomFrameOptionsValue: SAMEORIGIN
        ReferrerPolicy: same-origin
        PermissionsPolicy: vibrate 'self'
        STSSeconds: 315360000
```

**conf/tls.conf**:

```
tls:
  options:
    default:
      minVersion: VersionTLS12
      sniStrict: true
      curvePreferences:
        - CurveP521
        - CurveP384
      cipherSuites:
        - TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256
        - TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384
        - TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305_SHA256
```

**traefik.yaml**, **conf/headers.yaml** and **conf/tls.yaml** will be mounted inside traefik container.

### Handle passbolt with Traefik

To make Traefik redirect incoming requests to passbolt, edit the **passbolt** service as follow:

**Step 1.** As traefik will handle HTTPS connexion, remove the ports definition for passbolt service

**Step 2.** Add docker labels to make Traefik aware of passbolt service

```
version: '3.7'
services:
  db:
    ...
  passbolt:
    ...
    labels:
      traefik.enable: "true"
      traefik.http.routers.passbolt-http.entrypoints: "web"
      traefik.http.routers.passbolt-http.rule: "Host(`passbolt.domain.tld`)"
      traefik.http.routers.passbolt-http.middlewares: "SslHeader@file"
      traefik.http.routers.passbolt-https.middlewares: "SslHeader@file"
      traefik.http.routers.passbolt-https.entrypoints: "websecure"
      traefik.http.routers.passbolt-https.rule: "Host(`passbolt.domain.tld`)"
      traefik.http.routers.passbolt-https.tls: "true"
      traefik.http.routers.passbolt-https.tls.certresolver: "letsencrypt"
  traefik:
    ...
```

{% include messages/warning.html
    content="Ensure you have correctly set your domain name (replace passbolt.domain.tld with your own in the example above)."
%}

## non-root images

If you are using non-root images, add `loadbalancer.server.port` label to make traefik aware of the to be used port for passbolt service:

```
version: '3.7'
services:
  db:
    ...
  passbolt:
    ...
    labels:
      ...
      traefik.http.services.passbolt-https.loadbalancer.server.port: 8080
```

## That's it

Launch `docker-compose up -d` and you should be able to reach passbolt with HTTPS and a Let's Encrypt certificate.
The renewal of the certificate will be handled automatically by Traefik daemon.
