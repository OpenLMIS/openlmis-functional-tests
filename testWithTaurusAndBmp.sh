#!/usr/bin/env sh
bzt wdio.yml

curl -X GET http://bmp:9090/proxy/9091/har > build/openlmis.har
