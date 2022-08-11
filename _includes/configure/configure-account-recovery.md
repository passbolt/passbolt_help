<figure>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/b-VwI5fCdwE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</figure>

## Requirements

You can follow this procedure if you are meeting the following requirements:

- You are running passbolt Pro > v3.6.0 or passbolt Cloud (coming soon).
- You have an active administrator account

## How does it work?

Account recovery is a feature introduced with passbolt v3.6.0 that as for aim to help users to recover their accounts
in case of recovery kit or passphrase loss.

Depending on the organisation policy, all users will be able to deposit an encrypted backup of their private keys in
passbolt. Backups that can only be unlocked cryptographically by the organisation administrators having in their possession
the organisation recovery key. 

## <a name="enable-account-recovery"></a> Enable account recovery

In order to configure account recovery for your organisation, go to administration setting workspace *Administration* > *Account recovery*.

### Choose the organisation policy

By default, account recovery is disabled. To enable it choose among the proposed policies the one that suits best your 
organization.

{% include articles/figure.html 
    url="/assets/img/help/2022/08/account-recovery-administration-settings-choose-policy.png"
    legend="Account recovery administration settings choose policy" 
    width="550px"
%}

- __Mandatory__: as its name states, users have to subscribe to the program no matter their preferences. New users will be forced to subscribe to the program while registering for the first time while existing users will be prompted to subscribe after signing in to the application.

- __Opt-out__: users have the choice to subscribe or reject the program, but they are subscribed by default. Users will be able to set their preferences while registering for the first time while existing users will be prompted to subscribe after signing in to the application.

- __Opt-in__: as the *opt-out* option, users have the choice to subscribe or reject the program, but they are not subscribed by default. New users will be able to set their preferences while registering for the first time and existing users will be able to set their preference via their settings workspace. 

- __Disable__: as the name states, the program is disabled and nobody will be able to use it.

### Set the organisation key

Once you have chosen the organisation policy the next step is to set an organisation key. This key will be used to encrypt
the escrow of the organisation users private keys. 

#### Import the organisation key

This method is the recommended one as it will keep your organisation key isolated from passbolt until the moment you
need it. 

{% include articles/figure.html
url="/assets/img/help/2022/07/account-recovery-administration-setting-ORK-import.png"
legend="Account recovery administration settings ORK import screen"
width="450px"
%}

In order to be accepted, the organisation key should meet these requirements:

- The key should be public gpg key
- The key should use the algorithm RSA 
- The key should have a length of 4096 bits

If you do not know how to generate an OpenPGP key, checkout the following documentation: [how to generate an OpenPGP key](/faq/start/generate-openpgp-key).

#### Generate the organisation key

If you cannot generate an OpenPGP key on your own, we got your back. In the import recovery key dialog, 
click on the “Generate” tab. From there you will find a tool that will help you to generate your organisation key.

{% include articles/figure.html 
    url="/assets/img/help/2022/07/account-recovery-administration-setting-ORK-generation.png"
    legend="Account recovery administration settings organisation generation screen" 
    width="450px"
%}

{% include messages/warning.html
content="**Attention**: Passbolt will prompt you to save the generated key on your computer. Keep this backup offline in a safe place, it will be
required later to update the organisation policy as well as to approve the users' recovery requests."
%}

### Apply the policy

Once the organisation policy and the organisation key were imported, you can apply the changes. Click on the “save 
settings” button, you will be prompted to review the settings. It is advised to do a careful check here before continuing.

{% include articles/figure.html 
    url="/assets/img/help/2022/07/account-recovery-administration-settings-summary-review-dialog.png"
    legend="Account recovery administration settings summary review dialog" 
    width="450px"
%}

## Disable account recovery

In order to disabled account recovery for your organisation, go to administration setting workspace *Administration* > *Account recovery*.

{% include articles/figure.html
url="/assets/img/help/2022/08/account-recovery-administration-settings-disable-policy.png"
legend="Account recovery administration settings disable policy"
width="650px"
%}

Select the policy "Disable" and click on the "Save settings" button on top of the screen. You will be prompted to
review the changes and then to provide the organisation key currently in use. This extra check will prevent attackers to 
disable then enable again the feature with an organisation key of their own.

{% include articles/figure.html
url="/assets/img/help/2022/08/account-recovery-administration-settings-provide-organisation-key.png"
legend="Account recovery administration settings provide organization key"
width="450px"
%}

{% include messages/warning.html
content="**Attention**: By disabling account recovery, you will truncate all the relative data. If you decide to 
enable it again you and the all the users will have to start everything from scratch."
%}

## Update account recovery

In order to update the settings, go to administration setting workspace *Administration* > *Account recovery*.

Select the policy of your choice and update the organisation key if necessary as explained in the section 
[enable account recovery](#enable-account-recovery).

Once you have made your changes, click on the "Save settings" button on top of the screen. You will be prompted to
review the changes and to provide the organisation key currently in use. This extra check will prevent attackers to 
disable then enable again the feature with an organisation key of their own.

{% include articles/figure.html
url="/assets/img/help/2022/07/account-recovery-administration-settings-summary-review-dialog.png"
legend="Account recovery administration settings summary review dialog"
width="450px"
%}
