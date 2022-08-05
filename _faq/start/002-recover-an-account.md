---
title: How to recover an account?
slug: account-recover
layout: faq
category: start
permalink: /faq/start/:slug
date: 2022-08-02 00:00:00 Z
---

## Recover an account with the recovery kit

The recovery kit can be used if you are setting up passbolt on a new machine because you lost, upgraded or reinstalled 
the previous one. This procedure can also be used to configure passbolt on an additional machine.

### Requirements 

You can follow this procedure if you are meeting the following requirements:

- You are in possession of an active account;
- You are in possession of your recovery kit, it contains a copy of the private key associated to your account;
- You remember your passphrase.

If you lost your recovery kit or your passphrase and you subscribed to the account recovery program, checkout this
[documentation](#recover-account-recovery-program).

### Procedure

**Step 1.** In order to recover you will need to go to your domain URL and add `/recover` at the end of the url,
for example `https://yourpassbolt.com/recover`.
**Step 2.** Complete the form by providing your email address.

**Step 3.** Follow the link in your mailbox. 

**Step 4.** Follow the recovery steps, which is much like the initial setup. You will need to import your private key.

**Step 5.** Enter your passphrase to login!

## <a name="recover-account-recovery-program"></a> Recover an account with the account recovery program

Account recovery is a feature introduced with passbolt v3.6.0 that as for aim to help users to recover their accounts
in case of recovery kit or passphrase loss. To know more about account recovery, checkout [this documentation](/configure/account-recovery).

### Requirements

You can follow this procedure if you are meeting the following requirements:
- You are in possession of an active account;
- Your organisation is running passbolt Pro > v3.6.0 or passbolt Cloud (coming soon).
- You subscribed to the account recovery program while installing passbolt for the first time or via in your user settings workspace.

### Procedure

There are 2 ways to start the procedure:

1. Assuming the browser extension is configured but the passphrase is lost: users can, at any time, click on the “help, I lost my passphrase” link in the sign in screen. An email will be sent to them to start the procedure.

{% include articles/figure.html
url="/assets/img/help/2022/07/account-recovery-help-lost-passphrase.png"
legend="Login screen with the account recovery feature"
width="550px"
%}

2. Assuming users are configuring Passbolt for a new browser or a new browser profile: during the process, they will be prompted to provide a recovery kit and its passphrase. If one of the information is missing, users can click on the “help, I lost my private key” link. Users will receive an email to start the procedure.

{% include articles/figure.html
url="/assets/img/help/2022/07/account-recovery-help-lost-private-key.png"
legend="Recover screen with the help link"
width="550px"
%}

### How does the account recovery procedure look like

1. Users have asked for an account recovery and just received an email to start. The email contains a link that brings the users to the account recovery request page. Pay attention that at this moment, the browser being used must be the one on which the browser extension has to be configured to access the application. If the browser or profile is changed during the process users will be blocked at some point and might need to restart from the beginning.

2. Users are prompted to provide a new passphrase and set their security token. Please note that the chosen passphrase is not a temporary one and will be the new passphrase to sign in. It’s the same for the security token.

3. After these steps, an email is sent to the administrators to tell them that an account recovery has been requested. Users need to wait for them to accept the account recovery request (they could also reject it if they wish and users won’t be able to finish the recovery process).

4. If they reject or accept the request an email is sent to inform the users about their choice. If it’s accepted, the email contains a link that users can follow to go on with the account recovery procedure.

5. At this step, users are asked to provide the passphrase they chose previously. If they don’t remember it, they’re still able to request for another account recovery from the interface. After entering the right passphrase, the browser extension will sign the users in after ensuring they have downloaded their new recovery kit.
