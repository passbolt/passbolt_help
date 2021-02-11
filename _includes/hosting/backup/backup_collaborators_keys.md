## What about the secret keys of my collaborators?

Every user private key should also be backed up, this is however not something we/you can automate easily for now (passbolt might provide a functionality for this in the future). We believe it is best if this is the responsibility of the end user. There is a dedicated step during the extension setup to that purpose.

As an administrator you should stress the importance of backing up secret keys to other users. For example this warning could be part of the initial information message sent to introduce passbolt to new users.

It is possible that having users back up their own keys may not be realistic or desirable in your case. In this case you can opt in for an alternative strategy such as setting up the account with/for them and taking a backup of the secret keys then. In the worst case scenario you could automate the process by installing a script on your users machine that would make that backup for you.
