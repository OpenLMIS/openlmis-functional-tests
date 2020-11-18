// first, some pre-work to set variables for our later wdio.config.js

// workaround from https://github.com/webdriverio/wdio-cucumber-framework/issues/79
const glob = require('glob');

const steps = glob.sync('src/features/**/*.steps.js');
const features = glob.sync('src/features/**/*.feature');
const recordScreen = require('record-screen');
const fs = require('fs-extra');

// configure proxy usage based on env setting - workaround for Taurus not supporting multiple
// wdio.conf.js files
const bmpPresent = process.env.BMP_PRESENT;
const recordingsDir = process.env.RECORDINGS_DIR ? process.env.RECORDINGS_DIR : 'build/recordings';
const consoleLogDir = process.env.CONSOLE_LOG_DIR ? process.env.RECORDINGS_DIR : 'build/consolelogs';
const SOME_FEATURE_TESTS_FAILED = 1;
const DEFAULT_DISPLAY_ID = '0';

const getRecordingName = (feature) => `${recordingsDir}/${feature.name}.mp4`;
const getConsoleLogFileName = (scenario) => `${consoleLogDir}/${scenario.feature.name}.txt`;

let recordings = {};
let consoleLogs = [];
let proxy = null;
let beforeScenario = () => {};

if (bmpPresent) {
    proxy = {
        proxyType: 'MANUAL',
        httpProxy: 'bmp:9091',
        sslProxy: 'bmp:9091',
    };

    const request = require('request');
    beforeScenario = (scenario) => {
        request({
            method: 'PUT',
            url: 'http://bmp:9090/proxy/9091/har/pageRef',
            form: {
                pageTitle: scenario.name,
            },
        }, (err, response, body) => {
            if (err != null) {
                console.log(`Error body: ${body}`);
            }
        });
    };
}

let featureDuration = 0;
let scenarioDuration = 0;
let stepDuration = 0;

// Data which will write in a file.
let dataResult = "";
let stepObjects = [];
let scenarioObjects = [];
let featureObjects = [];

// wdio config
exports.config = {
    //
    // ==================
    // Specify Test Files
    // ==================
    // Define which test specs should run. The pattern is relative to the
    // directory from which `wdio` was called. Notice that, if you are calling
    // `wdio` from an NPM script (see https://docs.npmjs.com/cli/run-script)
    // then the current working directory is where your package.json resides, so
    // `wdio` will be called from there.
    //
    specs: features,
    // Patterns to exclude.
    exclude: [
        // 'path/to/excluded/files'
    ],
    //
    // ============
    // Capabilities
    // ============
    // Define your capabilities here. WebdriverIO can run multiple capabilities
    // at the same time. Depending on the number of capabilities, WebdriverIO
    // launches several test sessions. Within your capabilities you can
    // overwrite the spec and exclude options in order to group specific specs
    // to a specific capability.
    //
    // First, you can define how many instances should be started at the same
    // time. Let's say you have 3 different capabilities (Chrome, Firefox, and
    // Safari) and you have set maxInstances to 1; wdio will spawn 3 processes.
    // Therefore, if you have 10 spec files and you set maxInstances to 10, all
    // spec files will get tested at the same time and 30 processes will get
    // spawned. The property handles how many capabilities from the same test
    // should run tests.
    //
    maxInstances: 1,
    //
    // If you have trouble getting all important capabilities together, check
    // out the Sauce Labs platform configurator - a great tool to configure your
    // capabilities: https://docs.saucelabs.com/reference/platforms-configurator
    //
    capabilities: [{
        // maxInstances can get overwritten per capability. So if you have an
        // in-house Selenium grid with only 5 firefox instance available you can
        // make sure that not more than 5 instance gets started at a time.
        maxInstances: 1,
        //
        browserName: 'chrome',
        chromeOptions: {
          args: [
            '--disable-infobars',
            '--window-size=1920,1080',
            '--no-sandbox',
            '--disable-gpu',
            '--disable-setuid-sandbox',
            '--disable-dev-shm-usage'
          ]
        },
        proxy,
    }],
    //
    // ===================
    // Test Configurations
    // ===================
    // Define all options that are relevant for the WebdriverIO instance here
    //
    // By default WebdriverIO commands are executed in a synchronous way using
    // the wdio-sync package. If you still want to run your tests in an async
    // way e.g. using promises you can set the sync option to false.
    sync: true,
    //
    // Level of logging verbosity: silent | verbose | command | data | result |
    // error
    logLevel: 'error',
    //
    // Enables colors for log output.
    coloredLogs: true,
    //
    // Saves a screenshot to a given path if a command fails.
    screenshotPath: './build/errorShots/',
    //
    // Set a base URL in order to shorten url command calls. If your url
    // parameter starts with '/', then the base url gets prepended.
    baseUrl: 'https://functional-test.openlmis.org',
    //
    // Default timeout for all waitFor* commands.
    waitforTimeout: 10000,
    //
    // Default timeout in milliseconds for request
    // if Selenium Grid doesn't send response
    connectionRetryTimeout: 90000,
    //
    // Default request retries count
    connectionRetryCount: 3,
    //
    // Initialize the browser instance with a WebdriverIO plugin. The object
    // should have the plugin name as key and the desired plugin options as
    // properties. Make sure you have the plugin installed before running any
    // tests. The following plugins are currently available:
    // WebdriverCSS: https://github.com/webdriverio/webdrivercss
    // WebdriverRTC: https://github.com/webdriverio/webdriverrtc
    // Browserevent: https://github.com/webdriverio/browserevent
    // plugins: {
    //     webdrivercss: {
    //         screenshotRoot: 'my-shots',
    //         failedComparisonsRoot: 'diffs',
    //         misMatchTolerance: 0.05,
    //         screenWidth: [320,480,640,1024]
    //     },
    //     webdriverrtc: {},
    //     browserevent: {}
    // },
    //
    // Test runner services
    // Services take over a specific job you don't want to take care of. They
    // enhance your test setup with almost no effort. Unlike plugins, they don't
    // add new commands. Instead, they hook themselves up into the test process.
    services: ['devtools', 'selenium-standalone'],
    //
    // Framework you want to run your specs with.
    // The following are supported: Mocha, Jasmine, and Cucumber
    // see also: http://webdriver.io/guide/testrunner/frameworks.html
    //
    // Make sure you have the wdio adapter package for the specific framework
    // installed before running any tests.
    framework: 'cucumber',
    //
    // Test reporter for stdout.
    // The only one supported by default is 'dot'
    // see also: http://webdriver.io/guide/testrunner/reporters.html
    reporters: ['spec', 'junit'],
    reporterOptions: {
        junit: {
            outputDir: './build/',
        },
    },
    //
    // If you are using Cucumber you need to specify the location of your step
    // definitions.
    cucumberOpts: {
        // <boolean> show full backtrace for errors
        backtrace: false,
        // <string[]> filetype:compiler used for processing required features
        compiler: [
            'js:babel-register',
        ],
        // <boolean< Treat ambiguous definitions as errors
        failAmbiguousDefinitions: true,
        // <boolean> invoke formatters without executing steps
        // dryRun: false,
        // <boolean> abort the run on first failure
        failFast: true,
        // <boolean> Enable this config to treat undefined definitions as
        // warnings
        ignoreUndefinedDefinitions: false,
        // <string[]> ('extension:module') require files with the given
        // EXTENSION after requiring MODULE (repeatable)
        name: [],
        // <boolean> hide step definition snippets for pending steps
        snippets: true,
        // <boolean> hide source uris
        source: true,
        // <string[]> (name) specify the profile to use
        profile: [],
        // <string[]> (file/dir) require files before executing features
        require: steps,
        // <string> specify a custom snippet syntax
        snippetSyntax: undefined,
        // <boolean> fail if there are any undefined or pending steps
        strict: true,
        // <string> (expression) only execute the features or scenarios with
        // tags matching the expression, see
        // https://docs.cucumber.io/tag-expressions/
        tagExpression: 'not @Pending',
        // <boolean> add cucumber tags to feature or scenario name
        tagsInTitle: false,
        // <number> timeout for step definitions
        timeout: 170000,
    },

    //
    // =====
    // Hooks
    // =====
    // WebdriverIO provides several hooks you can use to interfere with the test
    // process in order to enhance it and to build services around it. You can
    // either apply a single function or an array of methods to it. If one of
    // them returns with a promise, WebdriverIO will wait until that promise got
    // resolved to continue.
    //
    // Gets executed once before all workers get launched.
    onPrepare: function onPrepare() {
        if (fs.existsSync(recordingsDir)) {
            fs.removeSync(recordingsDir);
        }
        if (fs.existsSync(consoleLogDir)) {
            fs.removeSync(consoleLogDir);
        }
        fs.mkdirSync(recordingsDir);
        fs.mkdirSync(consoleLogDir);
      },
    //
    // Gets executed before test execution begins. At this point you can access
    // all global variables, such as `browser`. It is the perfect place to
    // define custom commands.
    before: function before() {
        /**
         * Setup the Chai assertion framework
         */
        const chai = require('chai');

        global.expect = chai.expect;
        global.assert = chai.assert;
        global.should = chai.should();
    },
    //
    // Hook that gets executed before the suite starts
    // beforeSuite: function beforeSuite(suite) {
    // },
    //
    // Hook that gets executed _before_ a hook within the suite starts (e.g.
    // runs before calling beforeEach in Mocha)
    // beforeHook: function beforeHook() {
    // },
    //
    // Hook that gets executed _after_ a hook within the suite starts (e.g. runs
    // after calling afterEach in Mocha)
    // afterHook: function afterHook() {
    // },
    //
    // Function to be executed before a test (in Mocha/Jasmine) or a step (in
    // Cucumber) starts.
    // beforeTest: function beforeTest(test) {
    // },
    //
    // Runs before a WebdriverIO command gets executed.
    // beforeCommand: function beforeCommand(commandName, args) {
    // },
    //
    // Runs after a WebdriverIO command gets executed
    // afterCommand: function afterCommand(commandName, args, result, error) {
    // },
    //
    // Function to be executed after a test (in Mocha/Jasmine) or a step (in
    // Cucumber) starts.
    // afterTest: function afterTest(test) {
    // },
    //
    // Hook that gets executed after the suite has ended
    // afterSuite: function afterSuite(suite) {
    // },
    beforeScenario,

    beforeFeature: (feature) => {
        let scenarioRecordingName = getRecordingName(feature);

        recordings[scenarioRecordingName] = recordScreen(scenarioRecordingName, {
            resolution: '1920x1080', // Display resolution
            display: process.env.DISPLAY_ID ? process.env.DISPLAY_ID : DEFAULT_DISPLAY_ID,
            fps: 60
        });

        recordings[scenarioRecordingName].promise
            .then(result => {
                process.stdout.write(result.stdout);
                process.stderr.write(result.stderr);
            })
            .catch(error => console.error(error))
    },

    afterFeature: (feature) => {
        let featureObject = {
            name: feature.name,
            duration: featureDuration,
            scenarios: scenarioObjects
        }
        featureObjects.push(featureObject);
        scenarioObjects = [];
        featureDuration = 0;

        let scenarioRecordingName = getRecordingName(feature);
        recordings[scenarioRecordingName].stop();
        if (!recordings[scenarioRecordingName].shouldKeep) {
            fs.unlinkSync(scenarioRecordingName);
        }

        delete recordings[scenarioRecordingName];
    },

    afterStep: (stepResults) => {
        let stepObject = {
            name: stepResults.step.name,
            duration: stepResults.duration
        }
        stepObjects.push(stepObject);

        if (stepResults.status !== 'passed') {
            //console.log(stepResults.step.scenario.feature);
            let scenarioRecordingName = getRecordingName(stepResults.step.scenario.feature);
            recordings[scenarioRecordingName].shouldKeep = true;
        }

        let scenario = stepResults.step.scenario;
        const logs = browser.log('browser');
        logs.value.forEach(log => {
            consoleLogs.push({
                scenario: scenario,
                stepName: stepResults.step.name,
                date: new Date(log.timestamp).toLocaleString(),
                message: log.message,
            });
        });
        stepDuration = stepResults.duration;
        scenarioDuration += stepDuration;
    },

    afterScenario: (scenario) => {
        let scenarioObject = {
            name: scenario.name,
            duration: scenarioDuration,
            steps: stepObjects
        }
        scenarioObjects.push(scenarioObject);
        stepObjects = [];

        featureDuration += scenarioDuration;
        scenarioDuration = 0;
    },
    //
    // Gets executed after all tests are done. You still have access to all
    // global variables from the test.
    after: function after(result, capabilities, specs) {
        dataResult += 'TEST TYPE,NAME,DURATION[ms]\n'
        let featureName = featureObjects[0].name;
        let fileName = featureName+'.csv';
        featureObjects.forEach(function(feature) {
            dataResult += 'FEATURE,' + feature.name + ',' + feature.duration + '\n';
            feature.scenarios.forEach(function(scenario) {
                dataResult += 'SCENARIO,' + scenario.name + ',' + scenario.duration + '\n';
                scenario.steps.forEach(function(step) {
                    dataResult += 'STEP,' + step.name + ',' + step.duration + '\n';
                });
            });
        });


        fs.writeFile('build/performanceResults/'+fileName, dataResult, (err) => {
            if (err) {
                return console.log(err);
            }
        });
        if (result === SOME_FEATURE_TESTS_FAILED) {

            let stringLogs = consoleLogs.map(log => {
                return `[${log.date}] [${log.scenario.name}][${log.stepName}]: ${log.message}`;
            });

            let featureLogFileName = getConsoleLogFileName(consoleLogs[0].scenario);
            fs.writeFile(featureLogFileName, stringLogs.join('\n\n'), function (err) {
                if (err) {
                    return console.log(err);
                }
            });
        }

    },
    //
    // Gets executed after all workers got shut down and the process is about to
    // exit. It is not possible to defer the end of the process using a promise.
    // onComplete: function onComplete(exitCode) {
    // }
};
