[Official Oracle Documentation](https://docs.oracle.com/cd/E26996_01/E18548/html/manager_ntpconfig.html)

To configure Network Time Protocol On Oracle you need to install the NTP package:
```
yum install ntp
```

Once NTP is installed, you will need to start the service and set it to launch automatically upon boot:
```
service ntpd start
chkconfig ntpd on
```

You can check upstream synchronization with the `ntpq` command:
```
ntpq -p
```

The output should be something like this:
```
     remote           refid      st t when poll reach   delay   offset  jitter
==============================================================================
 lists2.luv.asn. 203.161.12.165  16 u   25   64    3    3.495   -3043.1   0.678
 ns2.novatelbg.n 130.95.179.80   16 u   27   64    3   26.633   -3016.1   0.797
 sp1.mycdn.fr    130.234.255.83  16 u   24   64    3    4.314   -3036.3   1.039
```