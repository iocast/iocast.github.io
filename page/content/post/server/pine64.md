---
title: My new Server
author: iocast
date: 2017-02-20
draft: true
description: balblbal
image: cover.jpg
categories:
- Server
---




What is the DSI port?

The LCD Panel port is a 4 lane MIPI DSI up to 1920×1200@60fps. It provides connectivity to an LCD panel and turns the Pine A64 into a computer or tablet.

DSI - Display Serial Interface, 4 lanes MiPi, up to 1080P
TP - Touch Panel Port, SPI with interrupt
CSI - CMOS Camera Interface up to 5 mega pixel


What model of the LCD panel is compatible for the Pine A64?

We currently offer a 7 inch color active matrix 1024 x 600 LCD panel with 24 chip LED backlight.



http://wiki.pine64.org/index.php/Main_Page#Datasheets_for_Components_and_Peripherals
4 Lane MIPI DSI touch panel screen

http://files.pine64.org/doc/datasheet/pine64/FY07024DI26A30-D_feiyang_LCD_panel.pdf
MIPI 30 pin ? (page 20)

http://files.pine64.org/doc/datasheet/pine64/HK70DR2459-PG-V01.pdf
TP 6 pin ? (page 9)











```bash
sudo -i
/usr/local/sbin/pine64_update_uboot.sh
/usr/local/sbin/pine64_update_kernel.sh
resize_rootfs.sh
reboot
```




[2]	Change hostname permanently.
root@debian:~# hostnamectl set-hostname dlp
# show settings
root@debian:~# hostnamectl
   Static hostname: dlp
         Icon name: computer-vm
           Chassis: vm
        Machine ID: 5f47b11299ed4689a48a7f78197e452a
           Boot ID: bdeed3b6c079405bb45d79eff3e870a5
    Virtualization: vmware
  Operating System: Debian GNU/Linux 8 (jessie)
            Kernel: Linux 3.16.0-4-amd64
      Architecture: x86-64








How To Change Your Hostname on Debian

Step 1: Login to your VPS

Locate the IP address of your Vultr VPS and login as the root user.

ssh root@server

Step 2: Edit /etc/hostname

Open the /etc/hostname file with your favorite text editor. For example:

nano /etc/hostname

Update the hostname in this file. Then save the file, and exit the text editor.

Step 3: Edit /etc/hosts

Open the /etc/hosts file with your favorite text editor. For example:

nano /etc/hosts

Change the first line and replace your old hostname with the new one. Save the file and exit the editor.

Step 4: Run hostname.sh

Run the following command to update your hostname:

/etc/init.d/hostname.sh start

Step 5: Check your hostname

Run the following command to check your new hostname:

hostname

The new hostname will be displayed in your ssh terminal.

Step 6: (Optional) Change reverse DNS

Visit https://my.vultr.com/, then navigate to your VPS. Click on the IPv4 tab. You will see an "Update" button in the "Reverse DNS" column. Click this button to update the reverse DNS address. By default it will read:

x.x.x.x.vultr.com
It is common to replace x.x.x.x.vultr.com with the DNS name of your server, which may be related to its hostname.












ChangeLanguage

How to change the language of your Debian system

* First, you have to set environment variables such as LANG, LANGUAGE, LC_CTYPE, LC_MESSAGES to your local language. Usually LANG (or LC_ALL) is sufficient. (shamelessly stolen from Claws Mail doc ;) Check what you have at present with:

# env | grep LANG
* Second, you may also need to reconfigure your locales.

To do this, as root:

First: issue on a root terminal #export LANG=(the two letter code for your country).UTF-8 That is, for the Spanish language it would be:

# export LANG=es_ES.UTF-8
Second: reconfigure locales issuing the following command:

# dpkg-reconfigure locales
A window will ask you to select the languages (you select with SPACE) you want to have available. Choose your own.

Changes may not show immediately, a reboot will be needed.

(Please feel free to modify these instructions if you know better. Thanks.)







Generating locales
Missing locales are generated with locale-gen:

locale-gen en_US.UTF-8
Alternatively a locale file can be created manually with localedef:[1]

localedef -i en_US -f UTF-8 en_US.UTF-8
Setting Locale Settings
The locale settings can be set (to en_US.UTF-8 in the example) as follows:

export LANGUAGE=en_US.UTF-8
export LANG=en_US.UTF-8
export LC_ALL=en_US.UTF-8
locale-gen en_US.UTF-8
dpkg-reconfigure locales
The dpkg-reconfigure locales command will open a dialog under Debian for selecting the desired locale. This dialog will not appear under Ubuntu. The Configure Locales in Ubuntu article shows how to find the information regarding Ubuntu.
