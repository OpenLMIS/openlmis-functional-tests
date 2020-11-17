const glob = require('glob');

const steps = glob.sync('src/features/**/*.steps.js');
const features = glob.sync('src/features/**/*.feature');
const recordScreen = require('record-screen');
const fs = require('fs-extra');

const recordingsDir = process.env.RECORDINGS_DIR ? process.env.RECORDINGS_DIR : 'build/recordings';
const consoleLogDir = process.env.CONSOLE_LOG_DIR ? process.env.RECORDINGS_DIR : 'build/consolelogs';
const SOME_FEATURE_TESTS_FAILED = 1;
const DEFAULT_DISPLAY_ID = '0';

const getRecordingName = (feature) => `${recordingsDir}/xxxx.mp4`;
const getConsoleLogFileName = (scenario) => `${consoleLogDir}/${scenario.feature.name}.txt`;

let recordings = {};
let consoleLogs = [];
let proxy = null;
let beforeScenario = () => {};


//
// =====
// Hooks
// =====
// WebdriverIO provides a several hooks you can use to interfere the test process in order to
// enhance it and build services around it. You can either apply a single function to it or
// an array of methods. If one of them returns with a promise,
// WebdriverIO will wait until that promise is resolved to continue.
//
exports.hooks = {
    /**
     * Gets executed once before all workers get launched.
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     */
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
    /**
     * Gets executed before a worker process is spawned & can be used to initialize specific service
     * for that worker as well as modify runtime environments in an async fashion.
     * @param  {String} cid    capability id (e.g 0-0)
     * @param  {[type]} caps   object containing capabilities for session
     * @param  {[type]} specs  specs to be run in the worker process
     * @param  {[type]} args   object that will be merged with the main
     *                         configuration once worker is initialized
     * @param  {[type]} execArgv list of string arguments passed to the worker process
     */
    // onWorkerStart: function (cid, caps, specs, args, execArgv) {
    // },
    /**
     * Gets executed just before initializing the webdriver session and test framework.
     * It allows you to manipulate configurations depending on the capability or spec.
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that are to be run
     */
    // beforeSession: function (config, capabilities, specs) {
    // },
    /**
     * Gets executed before test execution begins. At this point you can access to all global
     * variables like `browser`. It is the perfect place to define custom commands.
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that are to be run
     */
    // before: function (capabilities, specs) {
    // },
    before: function (capabilities, specs) {
        /**
         * Setup the Chai assertion framework
         */
        var chai = require('chai');

        global.expect = chai.expect;
        global.assert = chai.assert;
        global.should = chai.should();
    },
    /**
     * Gets executed before the suite starts.
     * @param {Object} suite suite details
     */
    // beforeSuite: function (suite) {
    // },
    /**
     * This hook gets executed _before_ every hook within the suite starts.
     * (For example, this runs before calling `before`, `beforeEach`, `after`)
     *
     * (`stepData` and `world` are Cucumber-specific.)
     *
     */
    // beforeHook: function (test, context, stepData, world) {
    // },
    /**
     * Hook that gets executed _after_ every hook within the suite ends.
     * (For example, this runs after calling `before`, `beforeEach`, `after`, `afterEach` in Mocha.)
     *
     * (`stepData` and `world` are Cucumber-specific.)
     */
    // afterHook:function(test,context,{error, result, duration, passed, retries}, stepData,world) {
    // },
    /**
     * Function to be executed before a test (in Mocha/Jasmine) starts.
     */
    // beforeTest: function (test, context) {
    // },
    /**
     * Runs before a WebdriverIO command is executed.
     * @param {String} commandName hook command name
     * @param {Array} args arguments that the command would receive
     */
    // beforeCommand: function (commandName, args) {
    // },
    /**
     * Runs after a WebdriverIO command gets executed
     * @param {String} commandName hook command name
     * @param {Array} args arguments that command would receive
     * @param {Number} result 0 - command success, 1 - command error
     * @param {Object} error error object, if any
     */
    // afterCommand: function (commandName, args, result, error) {
    // },
    /**
     * Function to be executed after a test (in Mocha/Jasmine)
     */
    // afterTest: function (test, context, {error, result, duration, passed, retries}) {
    // },
    /**
     * Hook that gets executed after the suite has ended.
     * @param {Object} suite suite details
     */
    // afterSuite: function (suite) {
    // },
    /**
     * Gets executed after all tests are done. You still have access to all global variables from
     * the test.
     * @param {Number} result 0 - test pass, 1 - test fail
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that ran
     */
    // after: function (result, capabilities, specs) {
    // },
    /**
     * Gets executed right after terminating the webdriver session.
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that ran
     */
    // afterSession: function (config, capabilities, specs) {
    // },
    /**
     * Gets executed after all workers have shut down and the process is about to exit.
     * An error thrown in the `onComplete` hook will result in the test run failing.
     * @param {Object} exitCode 0 - success, 1 - fail
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {<Object>} results object containing test results
     */
    // onComplete: function (exitCode, config, capabilities, results) {
    // },
    /**
     * Gets executed when a refresh happens.
     * @param {String} oldSessionId session ID of the old session
     * @param {String} newSessionId session ID of the new session
     */
    // onReload: function (oldSessionId, newSessionId) {
    // },
    /**
     * Cucumber-specific hooks
     */
    // beforeFeature: function (uri, feature, scenarios) {
    // },
    // beforeScenario: function (uri, feature, scenario, sourceLocation) {
    // },
    // beforeStep: function ({uri, feature, step}, context) {
    // },
    // afterStep: function ({uri, feature, step}, context, {error, result, duration, passed}) {
    // },
    // afterScenario: function (uri, feature, scenario, result, sourceLocation) {
    // },
    // afterFeature: function (uri, feature, scenarios) {
    // }
    beforeFeature: function (uri, feature, scenarios) {
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

    afterFeature: function (uri, feature, scenarios) {
        let scenarioRecordingName = getRecordingName(feature);
        recordings[scenarioRecordingName].stop();
        if (!recordings[scenarioRecordingName].shouldKeep) {
            fs.unlinkSync(scenarioRecordingName);
        }

        delete recordings[scenarioRecordingName];
    },

    afterStep: function ({uri, feature, step}, context, {error, result, duration, passed}) {
//        if (result.status !== 'passed') {
//            //console.log(stepResults.step.scenario.feature);
//            let scenarioRecordingName = getRecordingName(result.step.scenario.feature);
//            recordings[scenarioRecordingName].shouldKeep = true;
//        }

       // let scenario = result.step.scenario;
    },

    //
    // Gets executed after all tests are done. You still have access to all
    // global variables from the test.
    after: function (result, capabilities, specs) {
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
};
