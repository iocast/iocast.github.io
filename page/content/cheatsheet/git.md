---
title: Git
author: iocast
date: 2014-12-22
description: Git commands
type: cheatsheet
group: ""
---

```bash
git submodule update --init
```

# Settings
## Username

in a local git repo


```git
git config user.name "iocast"
git config user.email "iocast@me.com"
```

or for global settings

```git
git config --global user.name "iocast"
git config --global user.email "iocast@me.com"
```

# General

download from git repository (normally branch 'master')

```bash
git clone <remote_repo>
```

download specific branch

```bash
git clone -b <branch> <remote_repo>
```

commit changes (check if you are on the correct branch)

```bash
git commit -m "message"
```

## Push / Pull

send branch to repository/server

```bash
git push origin <branch>
```

get branch from repository/server (update)

```bash
git pull origin <branch>
```

resetting local repository

```bash
git reset --hard origin/master
```

## Branching

list all branches

Options:

`-a`
: lists all branches
`-r`
: lists all remote branches

```bash
git branch [options]
```

create local branch

```bash
git branch develop
```

delete a branch (origin - server)

```bash
git branch -d develop
git push origin --delete develop
```

switch branch to work on it

```bash
git checkout develop
```

push branch to repository/server

```bash
git push origin <name>
```

## Tagging

first of all switch to master

```bash
git checkout master
```

and if necessary merge from a other branch

```bash
git merge --no-ff <branch>
```

create tag

```bash
git tag -a 1.2 -m "message"
```

push to repository/server

```bash
git push --tags
```

list tags

```bash
git tag
```

change to tag

```bash
git checkout <tag>
```

or make changes based on this tag (e.g. for hotfixes for this specific tag) where the first argument is the new branch name an the second is the tag name

```bash
git checkout -b hotfix-1.3.1 1.3
```

# Release Managment
assume we are working on branch 'develop' an are ready to create a new release.

## Releases

### Creating

Switched to a new branch "release-1.2"

```bash
git checkout -b release-1.2 develop
```

change version number on the notes or other files and commit it

```bash
git commit -a -m "Bumped version number to 1.2"
```

### Working

then modify all files needed for release-1.2 and commit changes (several commits can take place)

```bash
git commit -m "message"
```

### Finishing

Now we can finish this release.
Switch to branch 'master'

```bash
git checkout master
```

merge from the release-1.2 branch and push to repository/server

```bash
git merge --no-ff release-1.2
git push origin master
```

tag as release in branch master and push tag to repository/server

```bash
git tag -a 1.2 -m "message"
git push --tags
```

release banch on our local drive is not needed anymore.
Deleted branch release-1.2

```bash
git branch -d release-1.2
```

## Hot Fixes
Hot fixes are done from the master (or release) branch.

### Creating

Switched to a new branch "hotfix-1.2.1"

```bash
git checkout -b hotfix-1.2.1 master
```

change version number on the notes or other files and commit it

```bash
git commit -a -m "Bumped version number to 1.2.1"
```

### Working

then modify all files needed files for hotfix-1.21 and commit changes (several commits can take place)

```bash
git commit -m "message"
```

### Finishing
Switched to branch 'master'

```bash
git checkout master
```

merge changes

```bash
git merge --no-ff hotfix-1.2.1
```

tag it and push tag to repository/server

```bash
git tag -a 1.2.1 -m "message"
git push --tag
```

switch to develop and merge hotfix into it

```bash
git checkout develop
git merge --no-ff hotfix-1.2.1
```

and delete hotfix

```bash
git branch -d hotfix-1.2.1
```




karma style


http://karma-runner.github.io/0.10/dev/git-commit-msg.html

Format of the commit message:
<type>(<scope>): <subject>

<body>

<footer>
Message subject (first line)
First line cannot be longer than 70 characters, second line is always blank and other lines should be wrapped at 80 characters.

Allowed <type> values:
feat (new feature)
fix (bug fix)
docs (changes to documentation)
style (formatting, missing semi colons, etc; no code change)
refactor (refactoring production code)
test (adding missing tests, refactoring tests; no production code change)
chore (updating grunt tasks etc; no production code change)
Example <scope> values:
init
runner
watcher
config
web-server
proxy
etc.
