---
title: Debian
author: iocast
date: 2014-12-22
draft: true
description:
type: cheatsheet
---


# show dependencies
apt-cache rdepends kodi




sudo -i
chmod 0600 /etc/network/interfaces
wpa_passphrase <ssid>
> <passphrase>


network={
        ssid="<ssid>"
        #psk="<passpharase"
        psk=<wpa-psk>



vim /etc/network/interfaces

# Primary Ethernet Interface (If Running GUI You May Want To Comment Out This Part For The Network Manager)
# Primary Ethernet Set To DHCP
auto eth0
iface eth0 inet dhcp

# Primary Ethernet Set To Static Example
# auto eth0
# iface eth0 inet static
#       address         192.168.1.
#       netmask         255.255.255.0
#       network         192.168.1.0
#       broadcast       192.168.1.255
#       gateway         192.168.1.1
#       dns-nameservers 4.2.2.1 4.2.2.2 8.8.8.8

# Wireless Interfaces wlan0 & wlan1 (8723bs has two intefaces)
# You May Want To Disable wlan1 To Avoid Confusion While Running GUI
# iface wlan1 inet manual

auto wlan0
iface wlan0 inet dhcp
        wpa-ssid <ssid>
        wpa-psk <wpa-psk>


ifup wlan0






vim /etc/network/interfaces

# Primary Ethernet Interface (If Running GUI You May Want To Comment Out This Part For The Network Manager)
# Primary Ethernet Set To DHCP
auto eth0
iface eth0 inet static
        address 10.0.1.2
        netmask 255.255.255.0
        gateway 10.0.1.1


# Primary Ethernet Set To Static Example
# auto eth0
# iface eth0 inet static
#       address         192.168.1.
#       netmask         255.255.255.0
#       network         192.168.1.0
#       broadcast       192.168.1.255
#       gateway         192.168.1.1
#       dns-nameservers 4.2.2.1 4.2.2.2 8.8.8.8

# Wireless Interfaces wlan0 & wlan1 (8723bs has two intefaces)
# You May Want To Disable wlan1 To Avoid Confusion While Running GUI
# iface wlan1 inet manual

auto wlan0
iface wlan0 inet dhcp
        wpa-ssid <ssid>
        wpa-psk <wpa-psk>





        aptitude update
        aptitude full-upgrade

        aptitude search ~c
        aptitude purge ~c



        The solution is to "purge" all packages which are in the "config-files" state. With aptitude you can do aptitude purge ~c (or aptitude purge ?config-files). Replace "purge" by "search" if you only want to see a list of the affected packages.



        Install Samba Server

        # apt-get install samba
        Install Samba Client

        # apt-get install samba-client


        Add Samba users
        Samba uses it's own password system so users need to be added by root. Note that the users have to exist in /etc/passwd

        # smbpasswd -a me
        # smbpasswd -a you
        You will be prompted for a password for each of those users.

        To list existing Samba users:

        pdbedit -w -L
