This release also includes 3 fixes found during an independent security audit
conducted by french security researcher Jose-Alexandre Mayan. You can learn more about these
fixes on the dedicated [security incident page](https://www.passbolt.com/incidents/20190211_multiple_vulnerabilities).

The team also wanted to thank everyone who reported issues and helped us investigate them further, especially
Ricardo Marinho, Marc-Daniell Hess, Christoph Grabmer and Eric Wright.

## Passbolt Web Extension
### Improvement
- PASSBOLT-3347: When the extension requires the users to enter their master password, the popup should be displayed with no delay
- PASSBOLT-3313: As GM adding a user to a group I should see the loading popup when the extension is processing/requesting the API
- PASSBOLT-3312: As GM adding a user to a group I should see a relevant feedback in case of network/proxy errors
- PASSBOLT-3316: As LU Sharing a password I should see a loading feedback when the extension is requesting the API
- PASSBOLT-3318: As LU I should retrieve a secret when I'm copying it
- PASSBOLT-3319: As LU I should retrieve a secret when I'm editing it
- PASSBOLT-3403: As LU I should retrieve secrets when I'm exporting the associated passwords

## Passbolt API
### Added
- PASSBOLT-2995: As LU I should be able to copy the permalink of a password

### Improved
- PASSBOLT-3403: As LU I should export only selected passwords
- PASSBOLT-3397: Remove the list of secrets from the API request while loading the list of passwords
- PASSBOLT-3319: As LU I should retrieve a secret when I'm editing it
- PASSBOLT-3318: As LU I should retrieve a secret when I'm copying it
- PASSBOLT-3317: Display significant information as soon as possible while opening the application
- PASSBOLT-3312: As GM adding a user to a group I should see a relevant feedback in case of network/proxy errors
- PASSBOLT-3314: Improve the performance of the application by adding missing indexes
- PASSBOLT-2974: As LU I should be able to follow links targeting passwords from my emails

### Fixed
- PASSBOLT-3363: Fix the web installer should not use the exec php primitive to create/import the gpg server key
- PASSBOLT-3370: Fix auth verify error should not leak data
- PASSBOLT-3368: Fix html injection in email
