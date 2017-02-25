---
title: Minimal Kodi Installation
author: iocast
date: 2017-02-20
draft: true
description: balblbal
image: cover.png
categories:
- Server
---

```bash
#get root, needed to pretty much do anything.
sudo -i

#get software, will pull in over a Gb. See notes.
apt-get install kodi xorg xserver-xorg dbus-x11 alsa-utils openssh-server usbmount lirc


lirc not needed if not using a remote. Installing lirc will bring up a ncurses menu , have to manually select your IR remote. Wihout lirc it uses kernel only which makes remote emulate a keyboard, not much use.

openssh-server not needed but makes setting up easier as can cut n paste below bits in more easily via an ssh connection.

usbmount only needed if wanting to mount media via usb.

dbus-x11 provides dbus-launch needed with systemd unit file.


#needed to get alsa (sound) and proper graphics card drivers to be seen/used by kodi.
usermod -a -G audio,video kodi

#set these two options for xwrapper else wont start.
echo -e "allowed_users=anybody\nneeds_root_rights=yes" >> /etc/X11/Xwrapper.config

#add ntfs ability to usbmount so can auto mount
sed -i "s/vfat/ntfs vfat/" /etc/usbmount/usbmount.conf
```


```bash
# get root privileges
sudo -i

# install stuff
aptitude install kodi xinit xorg-server xserver-xorg-video-fbturbo dbus-x11

# Another option is to add a loginless and passwordless user. You can do so by running
adduser --disabled-password --disabled-login --gecos "" kodi

# Then, assign it to the following groups in order to give it the permissions it needs.
usermod -a -G cdrom,audio,video,plugdev,users,dialout,dip,input kodi
```




```
vim /etc/systemd/system/kodi.service
```

```
[Unit]
Description = Kodi Media Center

# if you don't need the MySQL DB backend, this should be sufficient
After = systemd-user-sessions.service network.target sound.target

# if you need the MySQL DB backend, use this block instead of the previous
# After = systemd-user-sessions.service network.target sound.target mysql.service
# Wants = mysql.service

[Service]
User = kodi
Group = kodi
Type = simple
#PAMName = login # you might want to try this one, did not work on all systems
ExecStart = /usr/bin/xinit /usr/bin/dbus-launch --exit-with-session /usr/bin/kodi-standalone -- :0 -nolisten tcp vt7
Restart = on-abort
RestartSec = 5

[Install]
WantedBy = multi-user.target

```



Enable the new `systemd` service

```
systemctl enable kodi
```



1.2 Add Custom Actions to PolicyKit

Make sure the following packages are installed.
sudo apt-get install policykit-1 upower acpi-support consolekit

Now run "pkaction" and verify that the following are present.
org.freedesktop.upower.suspend
org.freedesktop.consolekit.system.stop

Create a file /var/lib/polkit-1/localauthority/50-local.d/custom-actions.pkla with the following contents:

[Actions for xbmc user]
Identity=unix-user:xbmc
Action=org.freedesktop.upower.*;org.freedesktop.consolekit.system.*;org.freedesktop.udisks.*
ResultAny=yes
ResultInactive=no
ResultActive=yes


NOTES:
(1) You may have to comment out the existing 20-xbmclive.pkla as well until this issue is resovled: [1]
(2) With xbmc Eden on Ubuntu 12.04 it was necessary to change in the above "ResultInactive=no" to "ResultInactive=yes".


Add polkit entry for systemd's logind
Create this polkit file, (this allows the poweroff/shutdown menu to be available in kodi)

```
vim /etc/polkit-1/localauthority/50-local.d/kodi.pkla
```

```
[kodi user]
Identity=unix-user:kodi
Action=org.freedesktop.login1.*
ResultAny=yes
ResultInactive=no
ResultActive=yes
```


vim /etc/X11/Xwrapper.config

change to
allowed_users=anybody
