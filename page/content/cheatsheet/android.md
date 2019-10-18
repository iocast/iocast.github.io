---
title: Android
author: iocast
date: 2014-12-22
description: Bash / Shell sheet sheet
type: cheatsheet
comments: true
draft: true
group: ""
---


# ADB

## commands

devices

```bash
$ adb devices -l
```

remote connection

```bash
$ adb connect <ip[:port]>
```

## Screen Mirror

```bash
$ scrcpy -s <from adb devices>
````
