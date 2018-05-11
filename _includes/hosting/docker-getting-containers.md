## Getting passbolt container

Passbolt containers follow the following tagging:

```bash
<version_number>-<build_number>{{ page.docker_tag }}-debian
```

Nobody is perfect so we also provide a  _latest_ tag for Passbolt containers. Through all this documentation pages we make use of the latest tag so users will get the last version of passbolt.
However, it is recommended that users pull the tags pointing to specific passbolt versions when running in environments other than testing.

Get passbolt {{ page.passbolt_version }} latest docker container:
```bash
$ docker pull passbolt/passbolt:latest{{ page.docker_tag }}
```
