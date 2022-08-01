The Account Recovery feature needs an OpenPGP key pair in order to encrypt and decrypt user's private key password.
As it is manipulating sensitive information, passbolt requires the ORK to follow some security requirements.
If those requirements are not met, passbolt refuses the key.

## Minimum requirements

The minimum requirements are the following:

- The algorithm used is __RSA__
- The key length is minium __4096__ bits
- The private key should be protected by a strong password

Please notice that the last requirement cannot be checked on passbolt side. The reason is because during the setup of the account recovery, only the public key is given, not the private one.

## Generate the OpenPGP Organization Recovery Key (ORK)

In order to have full control on the key generation, the option `--full-generate-key` is our best friend.

```shell
$ gpg --full-generate-key
```

This runs the key generation in a step-by-step interactive way allowing us to specify every bits we need.

1. Select the right algorithm: __RSA__
2. Select the key size: __4096__
3. Select the expiration time: __0__ (for no expiration)
4. A user name
5. A user email
6. A comment (not required)
7. Confirm the choice or User id and comment
8. Define a password for the private key: a strong password is strongly recommanded

A key pair is generated and the console outputs a message containing a key __identifier__ of 16 characters. This identifier is required for the next step.

Here is an example of an output from the console where we can find the identifier:

```shell
gpg: key 0123456789ABCDEF marked as ultimately trusted
```

Regarding the expiration time, it is possible to use a key with an expiration date but, it is important to know that passbolt won't give a notification when the key is about to expire. So it's the responsibility of the administrator to rotate the key before the expiration occurs.

### Exporting the keys

#### Exporting the public key

The keys are stored on the machine at this step. They need to be exported to be used.

In the following command, replace __$identifier__ with the identifier obtained in the previous step.
```shell
gpg --armor --export $identifier > public.key
```

This command exports the public key of the previously generated key pair and copies it in a file named __public.key__ (the file name is not that important, we can use whatever we prefer).
The public key is required to set up the organization account recovery policy.

#### Exporting the private key

The private key should be place in a secure place and to avoid problems, a backup should be configured as well.

In the following command, replace __$identifier__ with the identifier obtained in the previous step.

```shell
gpg --armor --export-secret-keys $identifier > private.key
```

This command exports the private key that was previously generated and copies it in a file named __private.key__. 
This key is required whenever the organization account policy is changed to ensure that only a person having access to the key is doing the operation.
Also, it is required when the ORK is being changed as it is used to sign the new ORK in that case.