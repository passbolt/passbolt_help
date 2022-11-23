---
title: Troubleshoot Helm
slug: troubleshoot-helm
layout: faq
category: hosting
permalink: /faq/hosting/:slug
date: 2022-11-23 00:00:00 Z
---

Connect yourself inside passbolt docker container (replace passbolt-container-name with your own):

```
$ docker exec -ti passbolt-container-name bash
```

All troubleshooting commands must be launched as `www-data` user. It is the case if you are running non-root docker images but for root images, switch as `www-data` user:

```
su -s /bin/bash www-data
```

Then to be able to launch some commands, you must retrieve PASSBOLT_GPG_SERVER_KEY_FINGERPRINT environment variable:

```
export PASSBOLT_GPG_SERVER_KEY_FINGERPRINT="$(gpg \
  --home $GNUPGHOME\
  --list-keys \
  ${PASSBOLT_KEY_EMAIL:-passbolt@yourdomain.com} | \
  grep -Ev "^(pub|sub|uid|^$)" | tr -d ' ')"
```

### Healthcheck

```
./bin/cake passbolt healthcheck
```

### Send a test email

```
./bin/cake passbolt send_test_email \
  --recipient=youremail@domain.com
```

### Datacheck

```
./bin/cake passbolt datacheck --hide-success-details
```

### Database migrations status

```
./bin/cake migrations status
```

## database container

To connect into mysql container console (replace db-container-name with your own):

```
docker exec -ti db-container-name bash -c \
  'mysql -u${MYSQL_USER} -p${MYSQL_PASSWORD} ${MYSQL_DATABASE}'
```