---
title: View a group
date: 2019-04-23 14:00:00 Z
layout: api
category: api,groups,read
slug: groups-read
permalink: /api/groups/read
---

It is possible to get data for a single group identified by the unique UUID. 
All you need is to make a `GET` request to `/groups/<groupId>.json`.

```
GET /groups/<groupId>.json?api-version=v2
```

### Possible responses

<table class="table-parameters">
<thead>
  <tr>
   <th>Code
   </th>
   <th>Description
   </th>
  </tr>
</thead>
<tbody>
  <tr>
   <td>200
   </td>
   <td>OK<br/>
   Response includes the group object.
   </td>
  </tr>
  <tr>
   <td>400
   </td>
   <td>Bad Request<br/>
   The groupId supplied is not a valid UUID
   </td>
  </tr>
  <tr>
   <td>403
   </td>
   <td>Authentication Failure<br/>
   The user making the request does not have the Admin role.
   </td>
  </tr>
  <tr>
   <td>404
   </td>
   <td>Not Found<br/>
   The group either does not exist or the user making the request does not have access permission.
   </td>
  </tr>
  </tbody>
</table>

## Examples
### Success response
```json
{
    "header": {
        "id": "0021ec45-b990-4217-81e8-c1818d7554be",
        "status": "success",
        "servertime": 1556046857,
        "title": "app_groups_view_success",
        "action": "f0c5d1cd-b3e3-5494-8fb7-73a427790ce2",
        "message": "The operation was successful.",
        "url": "\/groups\/469edf9d-ca1e-5003-91d6-3a46755d5a50.json?api-version=v2",
        "code": 200
    },
    "body": {
        "id": "469edf9d-ca1e-5003-91d6-3a46755d5a50",
        "name": "Accounting",
        "deleted": false,
        "created": "2016-01-29T13:39:25+00:00",
        "modified": "2016-01-29T13:39:25+00:00",
        "created_by": "d57c10f5-639d-5160-9c81-8a0c6c4ec856",
        "modified_by": "d57c10f5-639d-5160-9c81-8a0c6c4ec856",
        "groups_users": [
            {
                "id": "38804173-18aa-5ec1-99b9-354496374816",
                "group_id": "469edf9d-ca1e-5003-91d6-3a46755d5a50",
                "user_id": "887422c0-bef6-59a7-bbda-84c253ee0848",
                "is_admin": true,
                "created": "2019-04-15T14:11:49+00:00",
                "user": {
                    "id": "887422c0-bef6-59a7-bbda-84c253ee0848",
                    "role_id": "a58de6d3-f52c-5080-b79b-a601a647ac85",
                    "username": "frances@passbolt.com",
                    "active": true,
                    "deleted": false,
                    "created": "2019-04-17T14:45:22+00:00",
                    "modified": "2019-04-17T14:45:22+00:00",
                    "gpgkey": {
                        "id": "82eaeed6-32a9-5e56-af93-6bc362a9d62b",
                        "user_id": "887422c0-bef6-59a7-bbda-84c253ee0848",
                        "armored_key": "-----BEGIN PGP PUBLIC KEY BLOCK-----",
                        "bits": 4096,
                        "uid": "Frances Allen \u003Cfrances@passbolt.com\u003E",
                        "key_id": "477FB14C",
                        "fingerprint": "98DA33350692F21BD5F83A17E8DC5617477FB14C",
                        "type": "RSA",
                        "expires": "2019-07-03T10:48:31+00:00",
                        "key_created": "2015-07-03T10:48:31+00:00",
                        "deleted": false,
                        "created": "2019-04-17T14:45:25+00:00",
                        "modified": "2019-04-17T14:45:25+00:00"
                    },
                    "profile": {
                        "id": "543865d0-5f9b-598d-928b-2811f3cae77f",
                        "user_id": "887422c0-bef6-59a7-bbda-84c253ee0848",
                        "first_name": "Frances",
                        "last_name": "Allen",
                        "created": "2019-04-17T14:45:23+00:00",
                        "modified": "2019-04-17T14:45:23+00:00"
                    },
                    "last_logged_in": ""
                }
            },
            {
                "id": "a932a3ce-82bc-59b6-ac4e-bf325435e534",
                "group_id": "469edf9d-ca1e-5003-91d6-3a46755d5a50",
                "user_id": "620de627-8f07-5427-9149-e2c43219c5aa",
                "is_admin": false,
                "created": "2019-04-15T14:11:49+00:00",
                "user": {
                    "id": "620de627-8f07-5427-9149-e2c43219c5aa",
                    "role_id": "a58de6d3-f52c-5080-b79b-a601a647ac85",
                    "username": "grace@passbolt.com",
                    "active": true,
                    "deleted": false,
                    "created": "2019-04-17T14:45:22+00:00",
                    "modified": "2019-04-17T14:45:22+00:00",
                    "gpgkey": {
                        "id": "d7c9f849-71ba-5940-a3ca-ab26472c06fb",
                        "user_id": "620de627-8f07-5427-9149-e2c43219c5aa",
                        "armored_key": "-----BEGIN PGP PUBLIC KEY BLOCK-----\nComment: GPGTools - https:\/\/gpgtools.org\n\nmQINBFWWaLEBEADEw\/przig4P+MKh4qmtZaSHgOew9REKcjxnVH+sCLxyDej81xQ\nodYWIw3UvRcA5p1\/n+I8PlX5+cOX8nk4NmevM1tPuCEuEs7Cy5s1jJTw57+yhPm4\ntBP5oymugT5COYivo8gi6sJqjkwrIirEUtjEp0h1KdA76kuoh07akPsae184eIxu\n0T1Cjh0iFxqoXolNTB+96N9QtOucd4zdd9iSmAYaJ2rRhQp2AXSvZ6H9FZFFRlYI\n3s0UVDCrT0JhDYIHTYOOQxZsgGAvwHugrn31kWR752F5acj8p9bftS5HeiaatRVl\nYPxZAkZ\/4MMO4g6ssynTVFz3V9p+SbP+NnHijtCPZKp5dyvSEkhk8EsxOEr2Escz\nD7JG5vFZDEXgPsWM9tH41\/poSzCgcdI6s8dfB7i6jVI\/fzJ30ZdE98dRrzyTrVid\negmmwuiMKgBLQvnAuNj2TDUpFrhN9NgA5lIUuaLKatxPyKQvBm1YDzBfhLARIHKV\navdLxWjWxQiHLriQr5LTA7ESWupAIL9frOqPeirl0qwXsw8FGLzKqNJrIjLEgP0K\nerea00B8GIwnGOQR3i8FSNUDPO3v\/39bYINX4beLjHhqn+4boMstkeJ1jXyTAqEQ\nShAQ8eQvh151Eu+3c9KVET9nobnUBv+Si5bJ3Dblp7TU1HMAS3hi7QIX7wARAQAB\ntCFHcmFjZSBIb3BwZXIgPGdyYWNlQHBhc3Nib2x0LmNvbT6JAj0EEwEKACcFAlWW\naLECGwMFCQeGH4AFCwkIBwMFFQoJCAsFFgIDAQACHgECF4AACgkQC9niQJvGpWkC\nsA\/\/RaHeBpzJas8+hSgrGBiak8QdwdJhnxHMr+4vyQokv5cCKKdTxlTJum8+vtZc\nzA5qPLdSUZMwn8GWJfyj03TQxf3SbUYO\/nNKmw+c0MCklXSrhZya8erp+XMTjCRY\n97AuKppVXL6a8lo29xdttzBJBnhRDp3WjBKiseIP5STvNOAQN4k8+untEKZKYQle\n3J4l+9GOrfKOpm7ESdAYabcAL\/iOpvJmc\/9EQfWiId1teeGqXTasn5qD5HhN9Jh3\nzaupLSdhszCnoSdtX0tfbKH5X8VCiaG15SeVoI\/zOv9yI55TsNFKjy378er7+lOR\nUyvmnauZCDP\/OV0ivq98vFUuE+W2CLW4qc8E0dIT7B7OBZUdJFSx1Ixf\/j5Hnnz9\nCh8TCsuDAZiVBSZOGZyL3EdASOpDxZ91YpPhJUgYtr8l70Z\/0IxbuMkNx\/yS3I2l\njl085DUv5rv4S9Ji8vr1TyjLekVMEfL\/NeSSGb6iVSAQlnfU29gBIDGWpznTlYAJ\nH0U3hY38bX88Pc4ChTWD2OEwGfhpFksT8ZxQUmqdJ6n22D861\/HWmi+EmuHq7suQ\nGhz\/hdgcrsK6D\/LQ8qHTzeQiFYJ+8YpnHlHiJY3c\/QxhN7qQ4Ux0quWJ7qK7fyjl\nDjiItBR35SN73MzUF92XFiYMjk9uO8wyqVvTH5oqyNsCmai5Ag0EVZZosQEQAMco\nFPZCbxtbzzxakRJz3J1bf5ubRhPSqFINz9NGe18cU60p59TMBrc4gKwWpXG8iENx\nII7na2Tbj2qSY2VaXE\/VOFtouO72K5kJr6273ovI5xaFWufdCz\/q+PUwXsEAB2lh\nc9GLyS18Qo7jsXgEhq8+xbuAyqFOeLSVhnoc2brRz0voP2qtv\/1UU4+GWILnPzBJ\n0wmF1oiNhmD5mi5Ymfi6yNzl5Wr6qeSO8pCN7oBd9WVI86aXzWUB8cBsUg05uU0a\n97SjDIm2clx0leTINsKPwXXo1XTGqcGPZ5YWdlRX8NlEhtP9fqEbVfDT0wrINTcg\nX0YNS1T3+pFr2f\/Qa8UiBaE9gDq5e8ZymuT6bAMeMIBLDe4fs8ZL2D0EKk9L\/XEj\nkiVIy54\/vTAb\/kNzwPjV+ctGFHaivTXgNIyjW25yQ0EWOfZiz0A1so5XfLTAK1mx\nuFTXsQmHYnkH6KsigBzJv5xfmMMDtoU9AmluYQP\/NaUdQDbV0oBngVwCi1G3QMXi\na+MYvyqQdquprwxATN2Nj7Nj7E1tJP8qQ5RE1RdfZg9ko4fbhfnA8xDa0bRThUN9\nxQQM6bOCzZvZktVIKqG\/ffIuu\/ekqiHxrLibnIRoZPNYqi29YUsC\/XlqMDDw2m1b\n4ouyHVYRsXlJmYopsLd0n0mTyXkH37l7RNb5+utBABEBAAGJAiUEGAEKAA8FAlWW\naLECGwwFCQeGH4AACgkQC9niQJvGpWkVARAAunyNYIjGK8jQJfOjv9hz8Xk5OoF1\nYDpXGj\/tIk8FqLGsuao9P5StaKLHHdQbNEJHaJ+xLHuUCOLD2MpTgpsJ77OtZf5M\nHn8hth+i3fXEskfYQNXkFgcXQjgG2n7l5d\/c+2YZxsuiati+xE0NdUcz7rNR2Pla\nMjqt7fo83lCfJBA1+25S3VW6pqT+rNOS9VUFruoZL5pecxNZS8Xmzg6nnV6zHIyo\nYFSs7cc7VDnP+VtUUN8+epvPxdRPu4uHuwW6XR8G4WPjJjxADACTGkomO7MLHqIs\nfxceXq4VLHnYvf7nvguu9302qZfMXtbYUBVvIxvla1SeyOJnPROQzKaQIxltnxB4\nAEvb6XkoU\/O200MPKPLDLZ5KgES3A56c0VW5BgTENpVMvO4y\/wjderudohJA3LBA\nnprDVhNwAzn0ED7S5T8Q\/sqW\/bYJ2D2ltqlFbn+7EUx6l8Adt5s+GSjRGUZeQlTd\nl1mtR84\/4N+sCfJqdvyz16Vi1IdXeYQL8qTw0iKvP6dddGfd1YOK4Hcop4oFL5+M\n6LYNr+VGPoAnMm2ApyBILFBx3SWVoL7IjegN7xPnyxg2TS6brLDSLx01yj96N32e\nJvtGtxk7uS0EMI+7nv75tGkqXPomWjImQv7spSTq9tG5MRrLgaBgZ9\/Qop\/DuGlA\na09IIZln6LLZOig=\n=jibv\n-----END PGP PUBLIC KEY BLOCK-----\n",
                        "bits": 4096,
                        "uid": "Grace Hopper \u003Cgrace@passbolt.com\u003E",
                        "key_id": "9BC6A569",
                        "fingerprint": "63452C7A0AE6FAE8C8C309640BD9E2409BC6A569",
                        "type": "RSA",
                        "expires": "2019-07-03T10:49:21+00:00",
                        "key_created": "2015-07-03T10:49:21+00:00",
                        "deleted": false,
                        "created": "2019-04-17T14:45:25+00:00",
                        "modified": "2019-04-17T14:45:25+00:00"
                    },
                    "profile": {
                        "id": "d12b4113-9368-5923-9e86-deea9fdca094",
                        "user_id": "620de627-8f07-5427-9149-e2c43219c5aa",
                        "first_name": "Grace",
                        "last_name": "Hopper",
                        "created": "2019-04-17T14:45:23+00:00",
                        "modified": "2019-04-17T14:45:23+00:00"
                    },
                    "last_logged_in": ""
                }
            }
        ]
    }
}
```