## Install or reconfigure passbolt

If you don't have passbolt installed please check on the [hosting section](/hosting/install) for more information
on how to install passbolt on debian.

If you have already installed passbolt or you are using our already packaged [virtual machine](/hosting/install/pro/vm.html) or [Digital Ocean image](/hosting/install/ce/digital-ocean) then
you want to execute the following command to start the configuration process for SSL:

```
sudo dpkg-reconfigure passbolt-{{ product }}-server
```

If you are reconfiguring passbolt you most likely want to say 'NO' to the mariadb setup question and go for the nginx setup
