---
title: SAP Transactions
author: iocast
date: 2014-12-22
draft: false
description: SAP transactions
type: cheatsheet
---


## Development


Trx Code    | Purpose
----------- | ----------------------------
`/h`        | Dynpro debugging
`/ha`       | ABAP debugging
`/hs`       | System debugging
`SAT`       | Profiling


## Table Management


Trx Code     | Purpose
------------ | -----------------------------
`SM30`       | Table view (customizing / transport )
`SE14`       | Delete table entries


## Services (Gateway / OData)

Trx Code                 | Purpose
------------------------ | -----------------------------
`SEGW`                   | SAP Gateway Service Builder
`/IWFND/ERROR_LOG`       | SAP Gateway Error Log
`/IWFND/MAINT_SERVICE`   | Activate and Maintain Services
`/IWFND/GW_CLIENT`       | SAP Gateway Client
`SXI_MONITOR`            | XI: Message Monitoring
`SXMB_MONI`              | Integration Engine - Monitoring



### Caches

Open Transaction `SE38` and the programming `/UI2/INVALIDATE_CLIENT_CACHES` for clearing the client caches or `/UI2/INVALIDATE_GLOBAL_CACHES` for the global UI2 caches.

