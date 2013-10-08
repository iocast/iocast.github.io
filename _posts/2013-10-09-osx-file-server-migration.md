---
layout: post
title: Mac OS X file server migration
author: iocast
excerpt: How could you migrate a OS X file server from open directory to Microsoft's active directory using rsync and other bash commands.
categories: blog
tags:
- osx
- bash
- rsync
---

Managing a OS X server is sometimes a pain, when it comes to manage ACL permissons on the file system using OS X Server share point application. For example if you want to migrate from one file server to another you need to define all shares and ACLs again or if you want to propagate permissons on a share with explicit ACLs on a sub-directory you are going to overwrite these explicit ACLs.

So to solve these problems and many more I created a little bash script which is able to:

* sync files from a remote server using ```rsync```
* changing the POSIX permissons on the local server after sync
* creating optionally a share point for each folder to be synced
* propagating ACLs on a share point or on a individual directory.

Each of these feature can be used indipendenly. For more information see the project description: [server migration tool](/projects/file-server-migration.html)
