# OpenLMIS Functional end-to-end (E2E) test suite

The tests contained here represent the functional end-to-end (E2E) test suite of the
OpenLMIS [Ref Distro](http://github.com/openlmis/openlmis-ref-distro).  

This test suite has these goals:

* Verifies that high-level functional "happy-path" for OpenLMIS features works.
* Living documentation for feature acceptance.
* Reports on suitability of OpenLMIS feature use in high-latency (i.e. typical last mile) networks.

## Tech Stack

1. Taurus in Docker - Dockerized environment for running tests, and defining test context
  (iterations, provisioning, etc).  Also supports virtual display for headless testing.
1. Cucumber - Allows our tests to be written in human-readable prose, and should help anyone looking
  at functional test coverage to better see how a Requisition grid is being used.
1. JUnit - reporting on test cases ran.
1. Webdriver.io - Node.js wrapper of Selenium's WebDriver.  Allows our code for WebDriver to be
  written in Javascript and includes a basic REPL.
1. ES6 - Pages and steps are defined in ECMAScript 6.
1. Selenium WebDriver - Drives browser so that a Selenium test may use a browser directly though
  an API.
1. BrowserMob-Proxy - Captures all network traffic for reporting on connections, payload size,
  timing, etc.  May also simulate slow networks.
1. Appium (Planned) - API extension to WebDriver for testing mobile (iOS/Android) applications
  (native or hybrid).

## Quick start (running suite)

### Docker - containerized

1. Run tests: `docker-compose run funtest`
1. To cleanup:  `docker-compose down`

### Local by installing dev tools

Install (once):
1. Install [yarn](https://yarnpkg.com).
1. Run: `yarn install`

Test:
1. Start (once before): `yarn run local-webserver`
1. Test: `yarn run wdio`

Use [REPL](http://webdriver.io/guide/usage/repl.html) (Install and Start first):
1. Start Selenium: `yarn run selenium-standalone start`
1. Run REPL: `yarn run wdio repl`

### Reports

* Feature acceptance: `./build/WDIO.xunit...xml`
* Network Requests (HAR): `./build/openlmis.har`

## Development

Tests are broken down by:

1. Features - human readable, behavior driven, acceptance definitions.
1. Steps - the definition of each step of a feature.
1. Pages - encapsulating the "how" of what a page allows a user to do.

### Features

Features are written in [Gherkin](https://cucumber.io/docs/reference) to describe the high-level
acceptance criteria for a particular piece of user expected behavior.  Each feature may have one or
more scenarios which outline specific uses of that feature.

Features are in `src/features/`:
* Define a feature file per feature - ideally one feature per user-story.
* Append the filename with `.feature`.
* Scenarios of a feature are different aspects or uses of that feature.

### Steps

Steps are the definition's behind features.  These steps should be human readable and be free of
page logic (see Page Objects and Selectors).

Steps follow the typical
[given, when, then of BDD](https://martinfowler.com/bliki/GivenWhenThen.html):
* Given: the state of the world before the behavior to test
* When: the behavior to test
* Then: the expected outcome of the behavior.

Steps are in `src/steps`:
* Break given, when, then into seperate files.
* Prepend the step filenames with the name of the feature.  e.g. if the feature is `login.feature`,
  then the steps should be `loginGiven.js`, `loginWhen.js` and `loginThen.js`.

### Page Objects and Selectors

The [Page Object](https://martinfowler.com/bliki/PageObject.html) pattern is used to encapsulate
the actions that a user may take in any particular piece of the workflow.  As part of this each
page object encapsulates selectors and other particulars (e.g. wait, visible, focus, etc) leaving
the Step definitions free of the Page Definitions.  The hope is that not only is Page logic
encapsulated to the Page Objects, but that the step definitions could apply to any UI of OpenLMIS,
such as mobile or web.

Pages:
* Expose an "API" that defines what a user can do: give a username and password, click a button,
  press keys on the keyboard, gesture, etc.
* May be a for a page like a screen, or a page such as a re-usable modal that shows up in multiple
  places.
* Define selectors.
* Workflow agnostic - not the place to define steps.

Pages are in `src/pages`, and should follow the pattern `pageName.page.js` where `pageName` is
the name of the page.

### Validating & cleaning

* Clean test output and installed packages: `yarn clean`
* Validate test style: `yarn run test:validate`

### Data & testing

E2E tests inevitably end up changing the data which the system under test has (i.e. it changes its
state).  A couple of conventions are in use for this suite:

* Tests should presume the existence of demo-data.
* One test might end up changing the data that another relies on.  If this occurs, we should build
  a runtime capability to reset demo-data.

## Attribution

This testing project was based off of the boilerplate WebDriver.io project:
[cucumber-boilerplate](https://github.com/webdriverio/cucumber-boilerplate), to which we thank for
the head-start.
