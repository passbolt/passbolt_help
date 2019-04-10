---
title: passbolt and encryption/decryption
layout: api
category: api
slug: encryption
permalink: /api/encryption/index.html
---

Security and privacy are the biggest concerns for a password manager and passbolt is no exception. We use OpenPGP for encrypting/decrypting sensitive information. Various [softwares](https://www.openpgp.org/software/) and [language libraries](https://www.openpgp.org/software/developer/) are available. Passbolt internally uses [OpenPGP.js](https://openpgpjs.org/) in the front-end and a combination of [Php GnuPG](https://www.php.net/manual/en/book.gnupg.php) and [Openpgp-php](https://github.com/singpolyma/openpgp-php) for the server component. 


## Working with OpenPGP Keys

At the time of installation, the passbolt server generates a key pair and stores it in its keyring. Similarly, clients generate their pair of keys during the setup. At the end of the setup the client stores its private key locally and send the public key to the server. When authenticated, it is possible for a user to gather other users public keys, in order to share passwords with them. Prior to sending sensitive data, secrets must be encrypted using the recipient (e.g. another user for example) public key and signed using sender’s. 

This serves two purposes: 



1. Privacy by encrypting the data and
2. Security by confirming the identity of the sender.


### Accessing passbolt server public key

Passbolt server public key is required during the “verify” step of the authentication. This step allows the client to verify the server identity, for example to prevent the unlikely scenario where the domain was seized. Your passbolt server broadcasts its public key at /auth/verify.json


```
GET /auth/verify.json
```

```json
{
    "header": {
        "id": "6f416b88-8062-4e94-ab00-259a4cd2e085",
        "status": "success",
        "servertime": 1554898043,
        "title": "app_auth_verifyGet_success",
        "action": "748dcd10-7d15-5498-9aa6-d26de348ff02",
        "message": "The operation was successful.",
        "url": "\/auth\/verify.json?api-version=v2",
        "code": 200
    },
    "body": {
        "fingerprint": "2FC8945833C51946E937F9FED47B0811573EE67E",
        "keydata": "-----BEGIN PGP PUBLIC KEY BLOCK-----\nComment: GPGTools - https:\/\/gpgtools.org\n\nmQINBFYuIFQBEACpYmcjzX1XC0LPJCMOY\/LwxIB3lGfL5+X5kJSfLpWDYKa0XFXv\nKuSa6H6LSZGd0nqlLFs1CJoTVQCNVhOBHZWs06Ihs1\/+U\/t8z1DRhj85Zao9J6tT\nHNaK+8oDzWmumaOqseVs+3NDLotjqmiUPWpm6WH1iigL8DzotHSu7x75MZGDM9U1\nEMVR38SmJPzcYtQQQBOsg1+HK92TMdSHUc\/ILAVUQmH0mlr2EJH7meQtrae3qR4h\nYfYTXh1xtFhS1JSCmbR\/mCtUJxo12kid6mrU8d8X1xqZ\/Q\/Yvs8hit8YJgHAVWZZ\nW+07sygUonXx4QNwWxIKVznMOM0+k9iNRleT17P2oF0xWjZcc5YTY0h65PU8XcZ0\nvNTeQlZcXfGw05U51yZJ3r215dmkZmfyeh3u2Ep\/Na\/SVlPjBSCULw4rpCGjq\/Oy\nx2KOJb9iQhhynXU7FLk9xzbtrFz5X88x7YamtF9mfnxug5QT0bRNNQdaB+nGKqiz\nTT4vrFxIz8toMI8+ZaNtRLzpcc0uZQ6Q7huO63wZUbgF9NyYiZDvrt626PpuiC5o\nDDh3eLcYgFvzUEfBef\/q\/F7x8JUA6HvSiBI\/kTDq87WqvDEt9Nbl+05fym77EjMZ\n7rTIwg\/XWCDVXn9\/t7\/1DIZ\/a1MufRMf4M7Bcc\/Whj13b\/Z01Vio3IbHkwARAQAB\ntDBQYXNzYm9sdCBTZXJ2ZXIgVGVzdCBLZXkgPG5vLXJlcGx5QHBhc3Nib2x0LmNv\nbT6JAj0EEwEKACcFAlYuIFQCGwMFCQeGH4AFCwkIBwMFFQoJCAsFFgIDAQACHgEC\nF4AACgkQ1HsIEVc+5n5gRRAAkaboFX9uxfsuSkCLC6y7pHBKj4cBdkickYMGkoPs\n5g+waWri5PZYJ02dVCALOOhOZgibPGx7wWU5o\/ARwm4j61r8HiPcUx\/GSnh9N3KB\n6yjPdILeedFV62H0LDJZt1B1SoWLr2Ak9flBqdEO2BkbAbHScot5f1cYn7swLv0T\n5Gdm0XOYXC\/DumC0F0sRYQy\/YqtPESOnQp2tdRRmwswBqWOn4gWJymDJGpDaiuAF\nMQw2czXbjc18iZMp4dkxhSU16QpVWRU2ipNz\/qNz4QKLKq\/V21TXKCA\/ZCIqt9UF\nO12OPAXl7280+O2K\/yu1V5Bj+C7o2qNy2Cw59Gz1RXn0qTu\/xcnTwDl3eRVJnFSV\nGRzFjyCYCxAkCvRWwTsjLhdBpAmOzb\/Kku11ZlbVv\/qlrlI3RY9xVzBjCV7BRpHa\n329a27H5682gPlmRZ3cj4aOjQqvldnC6l6sgQLFmGeF82aJuPiRY2HDxIBulr4OD\ncnTmmMV\/63j9Myq8cHcXvRfKifYb+YujbgX2ay1wcNKIaIy0HGCCd49ENOCaqxi6\n1CWAeGik7G8Kuy4fU6D4ez7w0KCgIOKIoye5B9kc0O+LJmvYHojU86OsqX5o3rRA\nxmynv4NLxVxDVIXI4gLNom2RCQl32WMltvMfxkbvDixJUliwgTTdEKyLzL5r1oj6\nd6G5Ag0EVi4gVAEQAOauznYrLUcWCcZBOnasJ4xxwuSBUgpXxVTbyQQK5XfWpj97\n23+48gThjr0JM\/L6XxNaaMlqP\/Uuncza\/uPNT2RojGyihs3tUdGp4HVb5N+dIMQE\n46XeUwmkxtcVkCNMwXTS1VIwBlf1r\/x1NagmOPuiOAmN7ReiCCbAkPo0JIstpHvK\nZ\/2H4uGj18tmJaL2pKzOUambTK8owCzhjIzzWMdL2kAadGqqNG8WYVI6Fk8iDYe6\nyBt4Hje5PUkg88ExxiVb2bjAl\/gJ2AlU33cDwjXkL1kdnUUZLdXbnGydgWAG1Uwl\nLb0HSCka0ppAQ\/mrI5Bwnt4d9msw3luF3wYz1BLlXhuXVL\/V\/FwL4hAXT9jUlApg\nxrZQSRL35N3vTDzcTYUDcATsGi\/j3FnVy7pwjhI3VIsnOw02xQP6rQPcjG6rVJnB\nBJzc3i9ge6NZDsWYsOBe5M6+cpYFzxq3SJZyx8ubZRv6XlhHnd6HCFDjGYzgg5kU\nip0wk9ytPiJovhDKtZOtnQyPOEgOCibWQPOk\/pDEdxX6tRWo9YWawxQ1T\/kKpt93\nvMZ2DkP+CAE2kgaDaDT25UHZ+LwRmiF1J2jGjU6t8+DApDq0anFs\/9xR+JaVMet9\nuLRtmeS0BZBfYNKjHCdYFWEO6Kal4Dwu0EIdeI8jH404CHLY6CkrM6v+gWppABEB\nAAGJAiUEGAEKAA8FAlYuIFQCGwwFCQeGH4AACgkQ1HsIEVc+5n69vg\/9GNV+hnCj\nVK6Av7joUzBiTkQkSpt1Bonwa816PoYo65F1bNJ+Vs+IIa\/ZWN0UOFlYLKMOetlX\nXNjcHDzlFUKHwir2irFP59fklXFEIX42wyKyVZBP0CRTcYFjo5xGqCec0\/Oi2job\ni5V8NkG7gqXYqsdPMqiyWD+1NjcGWu4ei3SeXiet0yHfyOffWXwnT2dJP\/AXCaLa\n\/wkaPFf7RsZPw6+J6Y7TiIr\/WP\/TU\/qqr36O8ooNyzL6tr9q1BSY8d4bwcmyj1vX\n8sZgXeqZYxS\/QryKn1TAu\/pRuxtAJS1oxhL8RL9IcXaEdaUrFZVfLzrJI7vYmxRy\n94y4gyfW37fl0kgsxndJ\/VsOoZLSSTkeRvhjHx4plhp2J3MXIaBzBH2aZWGaC8YZ\nblyhxu5j4gwEavQalHiYwUtbaJHNcFlWngYsMjnAI21oQwFDbmKYl2OjsuTF09\/B\n\/iBFvBjQtDfca1OpPt26RSWsRMS7z762uUxS5mFAiniUG6YpGcopBjbNAe40oKMe\nM9zoAzYKo6HzeBPz1O8mLpDyn3O+W6lnXwm7em0+nX5fhRamiopIRHSzv10Pvoqk\n1iPSOfkLLATK6gp2eNR8dwWC0gIRzsZXEXjG2wqyQ5MpRgTLTrraEck1dDCBM2fC\nWoyDz96l\/88asc2mV7bg82Zp0zo1iZvPeUw=\n=skmC\n-----END PGP PUBLIC KEY BLOCK-----\n"
    }
}
```