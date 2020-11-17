const { config: common } = require('./wdio.conf')

exports.config = Object.assign(common, {

  specs: ['./tests/performance.test.js'],

  // If you have trouble getting all important capabilities together, check out the
  // Sauce Labs platform configurator - a great tool to configure your capabilities:
  // https://docs.saucelabs.com/reference/platforms-configurator
  //

  // Test runner services
  // Services take over a specific job you don't want to take care of. They enhance
  // your test setup with almost no effort. Unlike plugins, they don't add new
  // commands. Instead, they hook themselves up into the test process.
  services: ['devtools', 'selenium-standalone'],
  logLevel: 'error',
  maxInstances: 2,
  framework: 'mocha',
  mochaOpts: {
      ui: 'bdd',
      timeout: 30000,
      compilers: ['js:@babel/register']
  },

  // logs
  chromeDriverLogs: common.outputDir
})
