## Getting passbolt container

Passbolt containers follow the following tagging:

```bash
<version_number>-<build_number>{{ page.docker_tag }}-debian
```

Nobody is perfect so we also provide a  _latest_ tag for Passbolt containers. However, it is recommended that users pull the tags pointing to specific passbolt versions.

Get passbolt {{ page.passbolt_version }} 2.0.0 docker container:
```bash
$ docker pull passbolt/passbolt:2.0.0{{ page.docker_tag }}-debian
```
