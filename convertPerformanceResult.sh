#!/bin/bash

sudo chmod 777 -R build/performanceResults
sudo chmod 777 -R resources/assets

sudo cp -vr resources/assets/ build/performanceResults/
sudo node node_modules/htmlify-csv convert build/performanceResults/StepPerformanceResults.csv --output=build/performanceResults/StepPerformanceResults.html
