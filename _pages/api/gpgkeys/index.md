---
title: GPG Keys
layout: api
category: api
slug: gpgkeys
permalink: /api/gpgkeys/index.html
---

In order to encrypt information for it’s clients your passbolt server needs their public keys saved in it’s keychain. The keychain lives on the server’s filesystem and is accessed by the web server user. The gpgkeys endpoints let you query the saved keys.

## The GPGKey object

<table class="table-parameters">
    <tbody>
        <tr>
            <td>
                Attribute
            </td>
            <td>
                Type
            </td>
            <td>
                Description
            </td>
            <td>
                Format
            </td>
        </tr>
        <tr>
            <td>
                id
            </td>
            <td>
                String
            </td>
            <td>
                Unique ID of the group in UUID format.
            </td>
            <td>
                UUID
            </td>
        </tr>
        <tr>
            <td>
                created
            </td>
            <td>
                String
            </td>
            <td>
                Datetime when the record was created
            </td>
            <td>
                <a 
                            href="https://en.wikipedia.org/wiki/ISO_8601&amp;sa=D&amp;ust=1554900189888000">ISO
                            8601</a>Datetime format<br/>
                2014-02-01T09:28:56.321-10:00
            </td>
        </tr>
        <tr>
            <td>
                key_created
            </td>
            <td>
                String
            </td>
            <td>
                Datetime when the key was created
            </td>
            <td>
                <a 
                            href="https://en.wikipedia.org/wiki/ISO_8601&amp;sa=D&amp;ust=1554900189888000">ISO
                            8601</a>Datetime format<br/>
                2014-02-01T09:28:56.321-10:00
            </td>
        </tr>
        <tr>
            <td>
                bits
            </td>
            <td>
                Number
            </td>
            <td>
                How many bits does the key have
            </td>
            <td>
                e.g.2048
            </td>
        </tr>
        <tr>
            <td>
                deleted
            </td>
            <td>
                Boolean
            </td>
            <td>
                Whether the group has been deleted
            </td>
            <td>
                true/false
            </td>
        </tr>
        <tr>
            <td>
                modified
            </td>
            <td>
                String
            </td>
            <td>
                Datetime when the group was last modified
            </td>
            <td>
                <a
                            href="https://en.wikipedia.org/wiki/ISO_8601&amp;sa=D&amp;ust=1554900189897000">ISO
                            8601</a>&nbsp;Datetime format<br/>
                2014-02-01T09:28:56.321-10:00
            </td>
        </tr>
        <tr>
            <td>
                key_id
            </td>
            <td>
                String
            </td>
            <td>
                Key ID
            </td>
            <td>
                UUID
            </td>
        </tr>
        <tr>
            <td>
                fingerprint
            </td>
            <td>
                String
            </td>
            <td>
                Key fingerprint
            </td>
            <td>
            </td>
        </tr>
        <tr>
            <td>
                type
            </td>
            <td>
                String
            </td>
            <td>
                Key generation algorithm
            </td>
            <td>
            </td>
        </tr>
        <tr>
            <td>
                expires
            </td>
            <td>
                String
            </td>
            <td>
                Datetime when the key expires
            </td>
            <td>
            <a
                            href="https://en.wikipedia.org/wiki/ISO_8601&amp;sa=D&amp;ust=1554900189897000">ISO
                            8601</a>&nbsp;Datetime format<br/>
                2014-02-01T09:28:56.321-10:00
            </td>
        </tr>
    </tbody>
</table>

# GPG Keys:

In order to encrypt information for it’s clients your passbolt server needs their public keys saved in it’s keychain. The keychain lives on the server’s filesystem and is accessed by the web server user. The gpgkeys endpoints let you query the saved keys


## List all GPG keys

You can get a list of all the GPG keys by making a GET request to /gpgkeys.json endpoint.

```
GET /gpgkeys.json
```

### Request Parameters:

The endpoint takes the following parameters


<table class="table-parameters">
  <tr>
   <td>Param
   </td>
   <td>Description
   </td>
   <td>Required
   </td>
   <td>Type
   </td>
  </tr>
  <tr>
   <td>api-version
   </td>
   <td>The API version to target
   </td>
   <td>No
   </td>
   <td>String
   </td>
  </tr>
  <tr>
   <td>filter
   </td>
   <td>Filters the result based on child params
   </td>
   <td>No
   </td>
   <td>Array
   </td>
  </tr>
  <tr>
   <td>filter[modified-after]
   </td>
   <td>Will only include comments modified after the given date
   </td>
   <td>No
   </td>
   <td>Unix Timestamp
   </td>
  </tr>
</table>


Example Request:

So a request fetch all the GPG Keys 	



*   That were modified after a given date
*   Using api version v2

Will look like this

```
http://www.passbolt.test/gpgkeys.json?
  filter[modified-after]=1554681600&
  api-version=v2
```
A successful response will have an array of json objects. Each representing a GPG Key.

```json
{
    "header": {
        "id": "09253c7e-19d8-4638-9860-1c5c7fb13ed9",
        "status": "success",
        "servertime": 1554986192,
        "title": "app_gpgkeys_index_success",
        "action": "a8b75aae-cb86-5fda-a8b3-d36ae6155023",
        "message": "The operation was successful.",
        "url": "\/gpgkeys.json?api-version=v2",
        "code": 200
    },
    "body": [
        {
            "id": "0239c721-8b7d-59fc-9bff-69e75aff349c",
            "user_id": "af5e1f70-a0ee-5b76-935b-c846f8a6a190",
            "armored_key": "-----BEGIN PGP PUBLIC KEY BLOCK-----\n\nmQENBFv\/eJgBCADDkW8IYwHmaQXWw5Dce9OzPH4N5NMuhdgli286ADBH3\/Tkfi96\n2SBtcf3sOfw0yNXlFU9F2yv9c+pAsjL+TUveTotCcKp3GflT4qCKbTTj2Vt09m8z\n8nrZUwe05szcWqnCKCh7sBGQlFG3GkiH42QQ7kqE0vuEa08eSYUhBWYsK28hBtUJ\nsXC2iP4sNymC+0DmzpdJ6DjZJUpoHnk77B1IvPAPTDo\/jFH4\/PwAMoi4khPvFjMJ\ngKq40exIL\/a60osYZN1D2KrawEjPRo3jJslrr6F2OwBJ77bTLCScHLxRmE3LOULp\nYhkHx1A6GmVzZoF0BIBTKfWk21lM9BhI7wXxABEBAAG0I1Bhc3Nib2x0IGR1bW15\nIDxkdW1teUBwYXNzYm9sdC5jb20+iQFUBBMBCAA+FiEENlfUAuY5Y5ZX4xTR7Hu+\n\/5sJExsFAlv\/eJgCGwMFCQeGH4AFCwkIBwIGFQoJCAsCBBYCAwECHgECF4AACgkQ\n7Hu+\/5sJExsefQgAkW+m4AAE1skaUol2StivuwDaO5ncpo25YC9+jg8TTRlUq7qq\ncM1Dfys+7G5leOLNrIA98e+Rv3gtlLy3UevGVRN4R3iRhV7A9bgb3o\/rQR2dVI3P\nXEkB2iKGY\/YsmayebzaMwY2rWhYrqJC4VDkAiLP7nC1xFDkBvzGvIxg\/fJWi0eiv\nNbQ\/ztZla1ZctxttNRejDyLWzDgvR0aruv2+rRbO++QzrLEXv\/NThD4Iy8diHM48\nQoVWKwKOgHNorNYi4zeBOycP6KJ3No0oOOvnQ1dMa8EUee7FEgDp9pZ7TKpcC2P0\nFEkjd4HDiLYZ0ppci0VAd4eLKddUbtEoseEYKrkBDQRb\/3iYAQgA1SxFmNm4Byys\n7MFXebJsh9TfYDcS0wnAXKy6frABFS1O\/e35djH5Emr9xKTFVQn9VouJ6jd5WDCg\noplssKLC1izItQePe2p6JLP4p+Zv23MfsluyEEjlHviT\/VOwGCYXuYjKgqrHd\/Uj\nXPKijsrLKH2BIXWB1Zt8gHxS8StL+632SXT3ZONETf7nKKnHosIxa8ATBm9Ncr1Z\naqahQmuOFqqyVw1U34vznBz8Xx009h39oKkJTymUXEzb\/rYCdo6iKLSO6NqpG2Gz\n0H8wl2q6KiG84hcSEFiJ6t9m8U9iq08PxSyV8AUaY950Pa0yI\/8AkX+yxLEXkHNF\ntbptB0fKPQARAQABiQE8BBgBCAAmFiEENlfUAuY5Y5ZX4xTR7Hu+\/5sJExsFAlv\/\neJgCGwwFCQeGH4AACgkQ7Hu+\/5sJExvluggApQcvGqkfyD4Eb115LUmi549IKKWq\n8FFf85MWoZJ0BLNpIiWLBZFIs8dC4GJYSc1TaBlqlPtaHVh4kxlMvmAWGvDJ0AiE\nGVhwE8B5T7pMkFZBIzKPpOPMxBSIue\/\/K2XzxN0yXz+Rae7wpdQlgbcHByZZPnp3\n\/9E46AOwf5WDWu9J3081jIspeoAl4XOOncVi4azCNX8iwPcJVERQnInnpqBEV9qf\nH7sFPO+a9XpBJWjB8mMJzoA3ICWzb0u5YyUpBU6LmHHCGWY+gBDaNKMbRoRUUYyK\neZOICKSe4NoPeN03QbqyJsSV1vynpafS+G+AFfbCGnj0dy6DvWldiSR6kA==\n=OtIW\n-----END PGP PUBLIC KEY BLOCK-----\n",
            "bits": 2048,
            "uid": "Passbolt dummy \u003Cdummy@passbolt.com\u003E",
            "key_id": "9B09131B",
            "fingerprint": "3657D402E639639657E314D1EC7BBEFF9B09131B",
            "type": "RSA",
            "expires": "2022-11-29T05:26:48+00:00",
            "key_created": "2018-11-29T05:26:48+00:00",
            "deleted": false,
            "created": "2019-04-04T12:05:49+00:00",
            "modified": "2019-04-04T12:05:49+00:00"
        },
        {
            "id": "04481719-5d9d-5e22-880a-a6b9270601d2",
            "user_id": "f848277c-5398-58f8-a82a-72397af2d450",
            "armored_key": "-----BEGIN PGP PUBLIC KEY BLOCK-----\nVersion: GnuPG\/MacGPG2 v2.0.22 (Darwin)\nComment: GPGTools - https:\/\/gpgtools.org\n\nmQINBFXHTB8BEADAaRMUn++WVatrw3kQK7\/6S6DvBauIYcBateuFjczhwEKXUD6T\nhLm7nOv5\/TKzCpnB5WkP+UZyfT\/+jCC2x4+pSgog46jIOuigWBL6Y9F6KkedApFK\nxnF6cydxsKxNf\/V70Nwagh9ZD4W5ujy+RCB6wYVARDKOlYJnHKWqco7anGhWYj8K\nKaDT+7yM7LGy+tCZ96HCw4AvcTb2nXF197Btu2RDWZ\/0MhO+DFuLMITXbhxgQC\/e\naA1CS6BNS7F91pty7s2hPQgYg3HUaDogTiIyth8R5Inn9DxlMs6WDXGc6IElSfhC\nnfcICao22AlM6X3vTxzdBJ0hm0RV3iU1df0J9GoM7Y7y8OieOJeTI22yFkZpCM8i\ntL+cMjWyiID06dINTRAvN2cHhaLQTfyD1S60GXTrpTMkJzJHlvjMk0wapNdDM1q3\njKZC+9HAFvyVf0UsU156JWtQBfkE1lqAYxFvMR\/ne+kI8+6ueIJNcAtScqh0LpA5\nuvPjiIjvlZygqPwQ\/LUMgxS0P7sPNzaKiWc9OpUNl4\/P3XTboMQ6wwrZ3wOmSYuh\nFN8ez51U8UpHPSsI8tcHWx66WsiiAWdAFctpeR\/ZuQcXMvgEad57pz\/jNN2JHycA\n+awesPIJieX5QmG44sfxkOvHqkB3l193yzxu\/awYRnWinH71ySW4GJepPQARAQAB\ntB9BZGEgTG92ZWxhY2UgPGFkYUBwYXNzYm9sdC5jb20+iQI9BBMBCgAnBQJVx0wf\nAhsDBQkHhh+ABQsJCAcDBRUKCQgLBRYCAwEAAh4BAheAAAoJEBNTtbFdmwVPW9AQ\nALLeVX4b3hn9qMAIDEK2e8A3IvKhHrGbcX7Sx40fRdadfWbYbkANyCSwvCFUkUYA\nHVBaZvJJatcGDyRToGyx+BQ6EV\/koO9qaZwJu6ux95wlp\/xT3\/TUYTQCfGirJmOr\neJUldqhrYAGca+vKodbZT+SFeoAQXjlqCPSr+CV8dbtx4kXrpbX8V5AJ2pw7GW+d\ne2Ja7I1cdFrejYXEJApk3\/vXbTRdLew8wrdyl1aGXLUgeKh2vRrFaXmBn+zLjmve\n3ZmPWitH2eG5QO0s8kzeXqFZytFTg4SO+yzuP3eS5DMhR\/jNjb0vdPFhmt9f+wqa\nID4rix8g3hXhBWpKxSlm712FqalHbMVueQWS24VTgHHxDK0W3FVVw9o4z2ap94Sb\nMf+uBnLYJHSa\/qIUh\/tq7+rmU5PYtj2lqn9jz33U4CcmEok+fThy8JPam3zYZaB8\n2S5MH2KQMObf\/y4LKZK\/9IvzTWWXlwxxDjPTSxTOupykDYnu+80YHhELzqla6DMB\niMpqvuCENPFqRwhjXXl\/ZOfCcxfLn+WrixXFPHI+ZzoMkJlmgiqkUXzvELUVFiev\nkFIzVhzRDhhnljESqui\/tN9d1mogvNY+dsM3b7jBi9kCeCc+rH1kWru\/dley0B8t\ngVojCUWkndKmVwVEXJT9cIEuz5DkcuI9tylE42dlZa1\/uQINBFXHTB8BEADBVmb5\nbMKAvnRBSEgYSS89F6U0eTPODAp9fbPyC46enRj2wr5RnE+Tpf8C+N094TC\/G86t\nfDERoJM4cLAZFFzvhO41Xj47hhb0cEuVvkGMArgJsA4ow3TIa3r9Zq3VSutb\/9lP\nZLeX2hE1vGSGCLwFi2sP5TB21Zijmt+WQiCVnDbK76K6NpBlJJTOjatSUMlPqbhj\nx7r5vtcsGc6QB+aueaTIHzvvSYzFN1xbPnqr+i1cgP2Ok+2StR\/Ip21D5v9urEr5\nmLE\/+MTVaLAv4WvZRRAGrM\/621YO7YX343uC1jlyQaONIgU5R7DWwhrOQXzQtMJe\n9fSQwOFfJsIRiJzbREwqxsIN5gZQ65OY2Kw6uSDFZMl+Gek\/BXdnyx5lK9pBXOLw\nverRkBoTa2wGvxHmgJFjHhcqf2DltGd19rc+QPpZvqnryWdx3EHfu3Gupj062ElV\nV4XJcEpMgi5YUScBMEsa5\/mtmU6GDaLS7NbhMurTi2yMoRQUDbEepk2trbZHf\/Pc\nCfq\/bO12Azsom00MlBoDl7v9JdStI00RCpQvdcCpJncP5SZI2QiDHPykx4gdXu3+\nTXRbccBK06BGTi1bpqKdBY0asx6F2SEfTgkjFM1JjLKRh2pRO9Rn8AfQ5AJYL6CT\n6IcooqSfz2sN6TsrWZ2\/+wPz6EUoxC4AzTyYcQARAQABiQIlBBgBCgAPBQJVx0wf\nAhsMBQkHhh+AAAoJEBNTtbFdmwVP9RwP\/R1871CX\/PXjwWmAs5q63aFL15ZOs6iw\nWg8fOR3I4ERhWLsXWItEHdHQ8YnXJ0R60HiPafLGy8mgJ8vu0c+wL\/+fBYpxWLfe\n9V66SbMFaAh+LR7H8zngoIJj9WaEClppszX0iY+PI0b+CLbc7rpvjNpqazxUmPw3\ntF4JjlkrPI5MGfaKkkrtP3pWOZhhHLa3xYVBhWIFVpnC7lQoMdcuWEJm0FhKtQxC\n7B9zeo0cC+NtBFl2aWhlOGhzNsXfQxod07DujDP657AYmypOjmWvpr+hO\/4t1kH2\n5PYxQNGnlNHpY5VodZ8oVVtt6GGHkPk\/qdh1aDLgfkkU8MxhL2WzTeohbFm7TWlV\nVxrpDGIM+j2Q4RzXfjJb4VECTKWQWX9a4vAd5cJdW+WOPGM8D7wputc4xp6AiEUR\n0Zn4ASasst4p\/rE7T9DWGR9bfzBWN9uQcRG7VzgXobUyurTXVTysP2TYl9iPLeVg\nWNe5qPiwrqqLCS0TdlAmPGWDdWAU2mfaPEdue+jjt5P7AqJWlumaMzLaLNtxkjkZ\njobTYGzEZb9omwDvejOmnuveJM2ZC2xjMvhddmCNQ1+E\/vCUgdnk33EDxvk+LStE\n+6hQdfPTc6FIhB5ygHBcNLQB\/1Txgj26reuPFKmjLWN2IVKPj2mia4lQHLub9OTl\nGkkO+pcgU1wQ\n=Zopv\n-----END PGP PUBLIC KEY BLOCK-----\n",
            "bits": 4096,
            "uid": "Ada Lovelace \u003Cada@passbolt.com\u003E",
            "key_id": "5D9B054F",
            "fingerprint": "03F60E958F4CB29723ACDF761353B5B15D9B054F",
            "type": "RSA",
            "expires": "2019-08-09T12:48:31+00:00",
            "key_created": "2015-08-09T12:48:31+00:00",
            "deleted": false,
            "created": "2019-04-04T12:05:49+00:00",
            "modified": "2019-04-04T12:05:49+00:00"
        },
    ]
}
```

## Find a GPG Key by ID:

You can also query one single GPG key by making a GET request to /gpgkeys/<gpgKeyId>.json.

```
GET /gpgkeys/<gpgKeyId>.json
```


### Possible Responses:

<table class="table-parameters">
  <tr>
   <td>Code
   </td>
   <td>Description
   </td>
  </tr>
  <tr>
   <td>200
   </td>
   <td>OK

The request was successful. Response includes the single GPG Key object.
   </td>
  </tr>
  <tr>
   <td>400
   </td>
   <td>Bad Request

When gpgKeyId is not valid UUID
   </td>
  </tr>
  <tr>
   <td>404
   </td>
   <td>Not Found

A GPG Key for the given gpgKeyId is not found.
   </td>
  </tr>
</table>