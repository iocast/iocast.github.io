---
title: Linux
author: iocast
date: 2014-12-22
description: Linux general commands
type: cheatsheet
comments: true
group: "*nix"
---

# User & Group Management


Purpose            | Command
------------------ | -------------------------------
new group          | `groupadd sambashare`
new user           | `useradd -m -g users -G sambashare -s /bin/bash unix_user`
change password    | `passwd unix_user`
rename user				 | `usermod -l newUsername oldUsername` and change home folder `usermod -d /home/newHomeDir -m newUsername`
change to root  	 | `sudo -i`
remove user        | `deluser --remove-home username`


## User with `sudo` rights

```bash
useradd --create-home --gid users --shell /bin/bash userName
passwd userName
visudo -f /etc/sudoers.d/sudoers

# User privilege specification
userName    ALL=(ALL:ALL) ALL
```

# Samba Management

Purpose            | Command
------------------ | -------------------------------
new user           | `pdbedit -a -u samba_user`
change password    | `smbpasswd samba_user`
list users         | `pdbedit -w -L`


# File and Directory Handling

## Find & Remove

specific files

```bash
find <path> -name '<file-name>' -delete
```

If something ''more portable'' needed then you're better off with

```bash
find <directory name> -name '*.pyc' -exec rm {} \;
```

## File Manipulation

search the line which begins with `var feature server` and replaces the whole line with `var featureserver = "http://featureserver.org/fs"`

```bash
sed -e 's%^var featureserver.*%var featureserver = "http://featureserver.org/fs"%g' featureserver.org/assets/js/map.js > ${tmp}/website/assets/js/map.js
```

template command is as follow, where the first character after `s` is used as separator and afterwards it comes a regex. Use `-i` to do an ''in place'' replacement (no need for pipe)

```bash
sed -ie 's/$search_for/$replace_with/g' $file
```

### '\r': command not found

```bash
# Error message
-bash: '\r': command not found
```

Remove trailing `\r` character that causes this error:

```bash
sed -i 's/\r$//' filename
```

Option `-i` is for in-place editing, we delete the trailing `\r` directly in the input file. Thus be careful to type the pattern correctly.



## Folder size

`-h`
: human readable file size

`-s`
: sum all subfolders

```bash
du <directory>
```

## Compression

```bash
tar -cvzf <file.tar.bz2> --exclude-vcs --exlude='*.svn' folder/
```

## Extraction

```bash
tar -zxvf <file.tar.bz2>
```

## Errors

When you get a error that the command is not found (e.g. `-bash: $'\r': command not found`) and you are sure everything is correct, then it has something to do with the file format or the characters.

**Error:** `-bash: $'\r': command not found`

Remove trailing \r character that causes this error:

```bash
sed -i 's/\r$//' filename
```
Option `-i` is for in-place editing, we delete the trailing `\r` directly in the input file. Thus be careful to type the pattern correctly.





## Synchronization

Synchronization

```bash
#! /bin/bash
rsync -av --delete <from> <to> > <log> &
```


## Cloning
burning image to disk (also usb drives)

optional use `bs=8192`

```bash
dd if=<path>.iso of=<disk>
```


# Job / Programs

Keep job running despite of a logout

```bash
nohup <command> &
```


# System information

```bash
dmidecode -t [bios, system, baseboard, chassis, processor, memory, cache, connector, slot] | more
```

# Packages

getting installed packages including version number

```bash
time dpkg -l | perl -lane 'print "$F[1] : $F[2]" if m/^ii/'
```


# Network

## WiFi


```bash
wpa_passphrase <ssid>
# reading passphrase from stdin 
```

Enter your passphrase and confirm with enter. It will output the network configuration.

```ini
network={
        ssid="<ssid>"
        #psk="<passphrase>"
        psk="<wpa-psk>"
```

Open the file `/etc/network/interfaces`

```bash
nano /etc/network/interfaces
```

and change it as follow with the information provided by `wpa_passphrase`.

Check on wich interface your WiFi is connected.

```bash
ifconfig
```

shows you alle interfaces.


```ini
# Primary Ethernet Set To DHCP
auto eth0
iface eth0 inet dhcp

# Wireless Interfaces wlan0 Set To DHCP using WPA2-PSK
auto wlan0
iface wlan0 inet dhcp
        wpa-ssid <ssid>
        wpa-psk <wpa-psk>
```

Now you can start the WiFi

```bash
ifup wlan0
```


# TODO
current used image version
uname -r 

list all unused images
sudo dpkg --list 'linux-image*'|awk '{ if ($1=="ii") print $2}'|grep -v `uname -r`

sudo apt-get purge linux-image-4.4.0-108-generic

sudo apt-get autoremove

sudo update-grub

---------------------------------


Case II: Can't Use apt i.e. /boot is 100% full


sudo dpkg --list 'linux-image*'|awk '{ if ($1=="ii") print $2}'|grep -v `uname -r`


sudo rm -rf /boot/*-4.4.0-{108,109,112,116,119,121,124}-*


sudo apt-get -f install

sudo apt-get autoremove

sudo update-grub

sudo apt-get update
