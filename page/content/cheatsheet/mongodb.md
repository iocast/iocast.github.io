---
title: MongoDB
author: iocast
date: 2018-10-01
draft: false
description:
type: cheatsheet
group: "database"
---

# User Management

## Create

open the MongoDB shell

```bash
$ mongo -u <user> -p <password> --authenticationDatabase <db>
```

Optional parameters

`-u`
: Username

`-p`
: Password

`--authenticationDatabase`
: Check user against this database


and create a user.

```bash
> db.createUser({
...   "user": "admin",
...   "pwd": "password",
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

To create an admin user

```javascript
// admin user
db.createUser({
  "user": "admin",
  "pwd": "e2eS2J5EY7HueC7e",
  "roles": ["root"]
})
```

or for other option please consider the [documentation](https://docs.mongodb.com/manual/reference/built-in-roles/).

If you need a read-only user for e.g. reporting you can do it like this.

```bash
# connect to database
> use anyDB
# create user
> db.createUser({
...   "user": "reporting",
...   "pwd": "test",
...   "roles": [
...     {"role": "read", "db": "anyDb" }
...   ]
... })
# response
Successfully added user: {
        "user" : "reporting",
        ...
```

## Auth

If you work with users you have to start MongoDB with `--auth` flag.

```bash
$ mongod --auth --port 27017
```

or add the following lines to your MongoDB config file.

```yaml
security:
    authorization: enabled
```


## List

```javascript
// list all users
db.getUsers()
```

## Delete / Drop

```javascript
// drop a user
db.dropUser("userName")
```
