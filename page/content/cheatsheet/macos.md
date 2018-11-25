---
title: MacOS
author: iocast
date: 2017-10-09
description: MacOS sheat sheet
type: cheatsheet
comments: true
group: "*nix"
---


## Finding Files

```bash
sudo find / -iname "*search-string*"
sudo find / -ipath "*search-string*"
```

## Network

See which process is listen on a specific port

```bash
ps -eaf | grep `lsof -t -i:3000`
```
