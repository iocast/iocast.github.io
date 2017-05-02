#!/bin/bash

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
NC='\033[0m' # No Color


FILENAME=`basename "$0"`
HUGO_VERSION="0.20.6"
COMMANDS=("install" "upgrade")
ARCH='64bit'
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"


# Detect the platform (similar to $OSTYPE)
OS="`uname`"
UNAME="unknown"
case $OS in
  'Linux')
    OS='Linux'
    UNAME='Linux'
    ;;
  'Darwin')
    OS='macOS'
    UNAME='Darwin'
    ;;
  *) ;;
esac



function usage
{
    cat << EOF
usage: ${FILENAME%%.*} [$(IFS='|' ; echo "${COMMANDS[*]}")]

options:
       --version      value     default verion is ${DB_VERSION}
 -h | --help                    this help
EOF
}


function install_hugo_linux
{
    curl -fsSLO "https://github.com/spf13/hugo/releases/download/v${hugo_version}/hugo_${hugo_version}_${OS}-${ARCH}.tar.gz" && \
    sudo mkdir -p /usr/local/hugo/bin && \
    sudo tar -xzf "hugo_${hugo_version}_${OS}-${ARCH}.tar.gz" -C /usr/local/hugo/bin --exclude-from ${DIR}/exclude && \
    sudo rm -rf "hugo_${hugo_version}_${OS}-${ARCH}.tar.gz"
}

function remove_hugo_linux
{
    sudo rm -rf /usr/local/hugo
}



command=$1
hugo_version=${HUGO_VERSION}
hugo_folder="hugo_${HUGO_VERSION}_${OS}_${ARCH}"


while [ "$2" != "" ]; do
    case $2 in
             --version )      shift
                              hugo_version=$2
                              ;;
        -h | --help )         usage
                              return
                              ;;
        * )                   usage
                              return
    esac
    shift
done



if [ -z "$command" ]; then usage; return; fi


if ! echo echo ${COMMANDS[@]} | grep -q \\${command}\\b
then
  usage
  return
fi



if [ "${command}" = "install" ]
then
  echo -e "${GREEN}installing Hugo version ${hugo_version}${NC}"

  case $UNAME in
    'Linux')
      install_hugo_linux
      ;;
    *) ;;
  esac

  echo -e "${GREEN}done${NC}"
  return
fi


if [ "${command}" = "upgrade" ]
then
  echo -e "${GREEN}upgrading Hugo version to ${hugo_version}${NC}"

  case $UNAME in
    'Linux')
      remove_hugo_linux
      install_hugo_linux
      ;;
    *) ;;
  esac

  echo -e "${GREEN}done${NC}"
  return
fi


