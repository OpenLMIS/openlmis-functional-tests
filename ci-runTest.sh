#!/bin/bash

cleanup() {
    docker-compose down -v
}
trap cleanup EXIT

exitTrap() {
    exit $?
}
trap exitTrap ERR

/bin/bash wait-for-server.sh
docker-compose pull
docker-compose run --no-deps funtest -c 'yarn clean'
docker-compose run funtest
/bin/bash convertPerformanceResult.sh