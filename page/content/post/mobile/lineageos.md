---
draft: true
title: LineageOS
author: iocast
date: 2019-04-06
description: hmmm
categories:
- mobile
tags:
- lineageos
---

based on https://www.androidauthority.com/lineageos-install-guide-893303/

# Flash LineageOS

Boot into TWRP and tap `Wipe` and then `Format Data`.

![Format Data](twrp_wipe.png "Format Data")

After you get **Successful** tap `Back` and tap on `Advanced Wipe`. Check the three checkboxes `Dalvik / ART Cache`, `System` and `Cache`.

// TODO Screenshots
![Advanced wipe](twrp_wipe_advanced.png "Advanced wipe")

`Swipe to Wipe` to start the process.

Tap `Back` until you are on the TWRP main menu. Tap `Install` and select the place where you have your LineageOS archive. Select the archive and deselect all checkboxes.

![Install OS](twrp_install_os.png "Install OS")

Once it is successfull you can either `Wipe cache/dalvik` and `Reboot` or install additional applications like GApps. Once you have installed everything, do not forget to `Wipe cache/dalvik` and `Reboot` into your new OS.

