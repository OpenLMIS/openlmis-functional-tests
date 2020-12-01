#!/bin/bash

sudo chmod 777 -R build/performanceResults
sudo chmod 777 -R resources/assets

sudo cp -vr resources/assets/ build/performanceResults/
yarn run performance-report