{% include messages/warning.html
    content="This release introduces some new dependencies and database changes. Make sure you follow 
    the minor [update documentation](https://help.passbolt.com/hosting/update) to roll out this new version."
    link="https://help.passbolt.com/hosting/update"
    ask="Read the doc"
%}
<br>

This new release of Passbolt Pro Edition ships with “passwords activity”, 
which takes care of providing the activity history corresponding to a password. 
With it, it is possible to track who created / edited / accessed or shared a password, and when. 
You can find this new section in the right sidebar after selecting a password.

{% include articles/figure.html
    url="/assets/img/help/2019/04/LU_resource_activity_screenshot.png"
    legend="Audit log: resource activity screenshot"
    width="574px"
%}

Password activity lays the foundations of the “Audit Log” feature which will follow in the coming weeks.

This release also ships with the much awaited “quick access” and “auto-fill” features. 
It is now possible to access your passwords directly from the browser extension, 
and have your forms auto-filled in a click.

{% include articles/figure.html
    url="/assets/img/help/2019/04/LU_quick_access_screenshot.png"
    legend="Quick access screenshot"
%}

“Quick access” will keep evolving in the coming weeks with some improvements on the “auto-fill” part, 
or the possibility to add / edit a password directly from it.

The Ldap connector also comes with a few improvements, most notably the possibility to test the connection
 and browse the objects returned by the directory before actually using the synchronization.
 
{% include articles/figure.html
 url="/assets/img/help/2019/04/AD_ldap_test_settings_screenshot.png"
 legend="Ldap: test settings screenshot"
 width="475px"
%}

This release also includes an upgrade to the latest cakephp version : [3.7](https://bakery.cakephp.org/2018/12/08/cakephp_370_released.html), which means that passbolt is now compatible for 
most parts with PHP 7.3. We will keep supporting 7.0 until the next Debian stable release, 
but we invite you to switch to 7.2 as soon as possible.

Another improvement is the possibility to disable import / export manually, by adding some configuration in passbolt.php.
 ```php
 'plugins' => [
     'export' => [
         'enabled' => false,
     ]
 ]
 ```

Finally the Passbolt OpenAPI specifications are also available. You can find the API specifications in a swagger compatible format 
[on this new repository](https://github.com/passbolt/passbolt_openapi_specs). It will be updated soon with a more detailed documentation, including code examples, to ease the learning curve.

## Passbolt Web Extension
### Added
- PB-3: Quickaccess: Simplified app to access passwords from the browser extension

## Passbolt API
### Added
- PB-1: Audit Logs - Browse the resources and see the activity logs to see who is doing what on them

### Improved
- PASSBOLT-3327: LDAP: Improve administration UI
- PASSBOLT-3328: LDAP: Add test connection option
- PB-2: Upgrade to CakePHP 3.7
- PB-60: Performance - Add index on tags table
- PB-95: Implement Import / Export enable switch

### Fixed
- PASSBOLT-3409: LDAP: Fix "error should be explicit when ldap module is not installed"
- PASSBOLT-3443: LDAP: Fix "in settings, username and password should not be compulsory fields"
- PASSBOLT-2121: Fix passbolt should run in a subdirectory

