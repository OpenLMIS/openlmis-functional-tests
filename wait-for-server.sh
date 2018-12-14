#!/bin/bash

SERVICES="auth cce diagnostics fulfillment hapifhir notification referencedata report requisition stockmanagement"
BASE_URL=`egrep -o "baseUrl: '(.+)'" wdio.conf.js | awk '{print substr($0, 11, length($0) - 11)}'`

for SERVICE in ${SERVICES}; do
    for ATTEMPT in `seq 0 60`; do
        echo "DEBUG: Waiting ${ATTEMPT} seconds and checking if the ${SERVICE} is available"
        sleep ${ATTEMPT}

        STATUS=`curl --write-out "%{http_code}\n" --silent --output /dev/null "${BASE_URL}/${SERVICE}"`

        if [ "${STATUS}" == "200" ]; then
            echo "INFO: Service ${SERVICE} is available"
            break
        else
            echo "ERROR: Request failed"
        fi
    done
done

echo "DEBUG: Waiting another 60 seconds for right assignment regeneration"
sleep 60
