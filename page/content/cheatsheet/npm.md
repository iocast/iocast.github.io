---
title: MacOS
author: iocast
date: 2017-10-09
description: MacOS sheat sheet
type: cheatsheet
comments: true
---

`prepublishOnly` ensures that the library is always built before we publish to npm.

more flags here  https://docs.npmjs.com/misc/scripts

needed dev libraries

babel-cli provides the command babel.
babel-preset-env is the Babel preset we use for transpilation.

for tests use
babel-register lets AVA execute the tests via Babel.


```json
{
  "name": "@iocast/koa-i18next",
  "version": "0.0.0",
  "description": "i18next middleware for koa",
  "main": "lib",
  "scripts": {
    "build": "babel src --out-dir dist",
    "prepublishOnly": "npm run build",
    "patch": "npm version patch && npm publish",
    "minor": "npm version minor && npm publish",
    "major": "npm version major && npm publish",
    "postpublish": "git push origin master --follow-tags"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/iocast/koa-i18next.git"
  },
  "author": "iocast",
  "license": "MIT",
  "bugs": {
    "url": "https://github.com/iocast/koa-i18next/issues"
  },
  "homepage": "https://github.com/iocast/koa-i18next#readme",
  "keywords": [
    "koa",
    "i18next",
    "middleware"
  ],
  "devDependencies": {
    "babel-cli": "^6.26.0"
  }
}
```
