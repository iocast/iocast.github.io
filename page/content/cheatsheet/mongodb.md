---
title: MongoDB
author: iocast
date: 2018-10-01
draft: true
description:
type: cheatsheet
group: "database"
---

# User Management

**create user**

open the MongoDB shell

```bash
$ mongo
```

create an admin user

https://docs.mongodb.com/manual/reference/built-in-roles/


```bash
> use admin
> db.createUser({
...   "user": "admin",
...   "pwd": "e2eS2J5EY7HueC7e",
...   "roles": [
...     {"role": "dbOwner", "db": "admin" },
...     {"role": "userAdmin", "db": "admin" },
...     {"role": "userAdminAnyDatabase", db: "admin" },
...     {"role": "clusterAdmin", "db": "admin" },
...     {"role": "dbAdminAnyDatabase", db: "admin" },
...     {"role": "readWriteAnyDatabase", db: "admin" }
...   ]
... })
Successfully added user: {
        "user" : "admin",
        ...
```

list all users
db.getUsers()

drop user
db.dropUser("userName")


admin user

use admin
db.createUser({
  "user": "admin",
  "pwd": "e2eS2J5EY7HueC7e",
  "roles": ["root"]
})


app user kirke
use kirke
db.createUser(
  {
    user: "app",
    pwd: "mrgBU85Mc6Qq7E5Z",
    roles: [ { role: "readWrite", db: "kirke" }  ]
  }
)
db.createUser({
  "user": "reporting",
  "pwd": "42qBaEZLS69is7yU",
  "roles": [
    {"role": "read", "db": "kirke"}
  ]
})


use kirke-staging
db.createUser(
  {
    user: "app",
    pwd: "mrgBU85Mc6Qq7E5Z",
    roles: [ { role: "readWrite", db: "kirke-staging" }  ]
  }
)
db.createUser({
  "user": "reporting",
  "pwd": "42qBaEZLS69is7yU",
  "roles": [
    {"role": "read", "db": "kirke-staging"}
  ]
})



app user disciplinam
use disciplinam
db.createUser(
  {
    user: "app",
    pwd: "ewBtA2YN8f5A34kK",
    roles: [ { role: "readWrite", db: "disciplinam" } ]
  }
)


create a read-only user for e.g. reporting.

```bash
> use anyDB
> db.createUser({
...   "user": "reporting",
...   "pwd": "test",
...   "roles": [
...     {"role": "read", "db": "anyDb" }
...   ]
... })
Successfully added user: {
        "user" : "reporting",
        ...
```

start the server with `auth` flag

```bash
$ mongod --auth --port 27017
```

or add the following lines to your MongoDB config file.

```ini
security:
    authorization: enabled
```
