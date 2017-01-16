---
title: Windows general
author: iocast
date: 2014/12/22
excerpt: Windows general commands
layout: cheatsheet
---


[TOC]

## Desktop

For all the command in this section I used **command line prompt**.

### Sharing

remove a network share

	net use /delete <drive name or network path>


## Server

For all the command below I used **PowerShell**.

### Sharing

**list** of all connected users

```powershell
Get-SmbSession
```

for **command line** use

```powershell
net session
```

**closing** a session can be done using the session id, computer name or user name as follow:

```powershell
Close-SmbSession -SessionId 171798691989
Close-SmbSession –ClientComputerName \\192.168.0.20
Close-SmbSession –ClientUserName Domain\Username
```


## Miscellaneous

### Synchronization

**mirror**

	:::bat
	robocopy <source> <destination> /MIR /XD "<source>/<path>/<to>/<folder>"

`XD`
: exluding directories
