---
title: Bash / Shell
author: iocast
date: 2014-12-22
description: Bash / Shell sheat sheet
type: cheatsheet
comments: true
---


## Programming / Snippets

| Purpose                  | Command                         |
| :----------------------- |:------------------------------- |
| directory of the script  | `DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"` |




### Arrays

#### check string in array

```bash
...
COMMANDS=("install" "upgrade")
command="install"
...
if ! echo echo ${COMMANDS[@]} | grep -q \\${command}\\b
then
  usage
  exit
fi
...
```

### Platform Detection

```bash
# Detect the platform (similar to $OSTYPE)
OS="`uname`"
UNAME="unknown"
case $OS in
  'Linux')
    OS='linux'
    UNAME='Linux'
    ;;
  'Darwin')
    OS='darwin'
    UNAME='Darwin'
    ;;
  *) ;;
esac
```

## Console / Script Handling

### Color and Style the Console Output

```bash
# Black        0;30     Dark Gray     1;30
# Red          0;31     Light Red     1;31
# Green        0;32     Light Green   1;32
# Brown/Orange 0;33     Yellow        1;33
# Blue         0;34     Light Blue    1;34
# Purple       0;35     Light Purple  1;35
# Cyan         0;36     Light Cyan    1;36
# Light Gray   0;37     White         1;37

GREEN='\033[0;32m'
RED='\033[0;31m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color
...
echo -e "${BLUE}removing node${NC}"
...
```


### Script Parameters

```bash
# first argument
command=$1
# default value
version="0.1"

while [ "$2" != "" ]; do
    case $2 in
             --version )    shift
                            version=$2  # set value from input
                            ;;
        -h | --help )       usage
                            exit
                            ;;
        * )                 usage
                            exit 1
    esac
    shift
done
...
```

you can use it like this

```
./<script> install --version 0.2
```

Parameter `version` is optional because we set a default value for it.

### Mutliline Output

```bash
function usage
{
    cat << EOF
usage: ${FILENAME%%.*} [$(IFS='|' ; echo "${COMMANDS[*]}")] [--option value --option etc.]

options:
       --version     value     default version is ${VERSION}
  -h | --help                  this help
EOF
}
```
