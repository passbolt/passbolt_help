{% include messages/warning.html
    content="If you are changing your domain from <b>HTTP to HTTPS</b>, you will unlink the browser extension of all the users.
Before changing the domain, you must ensure that all the users have a copy of their private key to <b><a href='/faq/start/account-recover'>recover their account</a></b>."
%}

If you are reconfiguring passbolt you most likely want to say **'NO'** to the mariadb or havaged setup questions and go for the nginx setup

{% assign ssl_reconfigure = 'true' %}

{% include configure/configure-rpm-package.md %}

Reload nginx after finish the reconfigure to use the SSL configuration.

```bash
sudo systemctl reload nginx
```

Finally, ensure <b>'fullBaseUrl'</b> value in <b>/etc/passbolt/passbolt.php</b> starts with <b>https://</b>.

And that's it you should be able to reach your server on the domain you specified.