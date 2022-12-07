[Official RedHat Documentation](https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/7/html/system_administrators_guide/ch-configuring_ntp_using_ntpd)

On Red Hat Entreprise Linux, you have two choices in terms of NTP installation `chrony` which is installed by default on some version of Red Hat Entreprise Linux 7 or `ntpd`.

Chrony should be considered as best match for the systems which are frequently suspended or otherwise intermittently disconnected from a network.

The NTP daemon (ntpd) should be considered for systems which are normally kept permanently on.

#### Install `chrony` on RedHat

As mentionned previously, chrony suite is installed by default on some versions of Red Hat Entreprise Linux 7, to ensure that it is, run the following command as `root`:

```
yum install chrony
```

The default location for the chrony daemon is */usr/sbin/chronyd*. The command line utility will be installed to */usr/bin/chronyc*. 

To check the status of `chrony`, issue the following command:
```
systemctl status chronyd
```

The output should be something like this:
```
chronyd.service - NTP client/server
  Loaded: loaded (/usr/lib/systemd/system/chronyd.service; enabled)
  Active: active (running) since Wed 2013-06-12 22:23:16 CEST; 11h ago
```

If that is not the case, in order to start chrony, issue the following command as `root`:
```
systemctl start chronyd
```

To check if chrony is synchronized, make use of the `tracking` command:
```
chronyc tracking
```

The output should be something like this:
```
Reference ID  : CB00710F (foo.example.net)
Stratum     : 3
Ref time (UTC) : Fri Jan 27 09:49:17 2017
System time   : 0.000006523 seconds slow of NTP time
Last offset   : -0.000006747 seconds
RMS offset   : 0.000035822 seconds
Frequency    : 3.225 ppm slow
Residual freq  : 0.000 ppm
Skew      : 0.129 ppm
Root delay   : 0.013639022 seconds
Root dispersion : 0.001100737 seconds
Update interval : 64.2 seconds
Leap status   : Normal
```