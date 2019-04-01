We’ll need to change the passbolt configuration to make him use https instead of http,
and force the redirection to https:

```shell
$ {{include.editor_name}} /var/www/passbolt/config/passbolt.php
```

Set fullBaseUrl to https
```
'App' => [
    'fullBaseUrl' => 'https://passbolt.dev',
],
``` 

Set ssl.force config parameter to true, instead of false. You can also remove the line as it will be set to true by default.
```
'ssl' => [
    'force' => true,
],
``` 