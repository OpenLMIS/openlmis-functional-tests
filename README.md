# OpenLMIS Functional end-to-end (E2E) test suite

The tests contained here represent the functional end-to-end (E2E) test suite of the
OpenLMIS [Ref Distro](http://github.com/openlmis/openlmis-ref-distro).  

This test suite has these goals:

* Verifies high-level functional OpenLMIS feature requirements.
* Living documentation for feature acceptance.
* Reports on suitability of OpenLMIS feature use in high-latency (i.e. typical last mile) networks.

## Tech Stack

1. Taurus in Docker - Dockerized environment for running tests, and defining test context
  (iterations, provisioning, etc).  Also supports virtual display for headless testing.
1. Cucumber - Allows our tests to be written in human-readable prose and how tabular data is input.
1. JUnit - reporting on test cases ran.
1. Webdriver.io - Node.js wrapper of Selenium's WebDriver.  Allows our code for WebDriver to be
  written in Javascript and includes a basic REPL.
1. ES6 - Pages and steps are defined in ECMAScript 6.
1. Selenium WebDriver - Drives browser so that a Selenium test may use a browser directly though
  an API.
1. BrowserMob-Proxy - Captures all network traffic for reporting on connections, payload size,
  timing, etc.  Also used to simulate slow networks.
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

To run single feature:
1. Start (once before): `yarn run local-webserver`
1. Test: `yarn run wdio --spec src/path/to/feature/featureName.feature`

Use [REPL](http://webdriver.io/guide/usage/repl.html) (Install and Start first):
1. Start Selenium: `yarn run selenium-standalone start`
1. Run REPL: `yarn run wdio repl`

### Reports

* Feature acceptance: `./build/WDIO.xunit...xml`
* Network Requests (HAR): `./build/openlmis.har`
  * Paste results to [HAR Viewer](http://www.softwareishard.com/har/viewer/)

## Development

Tests are broken down by:

1. Features - human readable, behavior driven, acceptance definitions.
1. Steps - the definition of each step of a feature.
1. Pages - encapsulating the "how" of what a page allows a user to do.

### Features

Features are written in [Gherkin](https://cucumber.io/docs/reference) to describe the high-level
acceptance criteria for a particular piece of user expected behavior.  Each feature may have one or
more scenarios which outline specific uses of that feature.

Features are in `src/features/featureName/` (where featureName is the name of the feature):
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

Steps are located alongside their features in `src/features/featureName/`:
* Break given, when, then into seperate files.
* Append `.steps.js` to the end of the filename.  e.g. `given.steps.js`.
* Don't declare the same step definition more than once.  Steps in Cucumber are in a global
  namespace - even though the step definition files are located near their `.feature`, no two
  features may declare the same step definition.

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

## Do and Don't

There are some stuff that you should avoid while writing functional tests that might result in the test being stable
rather than failing randomly.

### Executing an action

Remember that some actions might result in opening a loading modal, which will block the UI and make user unable to
do any action. Functional tests are not smart enough to remember about that out of the box so we've created a class
representing an action, which will take care of waiting for the action to finish as well as the modal to close. In
order to use it all you need to do is:

Given:
```javascript
function yourAction() {
  //do something
}
```

Don't:
```javascript
yourAction();
```

Do:
```javascript
new Action(() => yourAction()).execute();
```

### Modeling interactions with a new component
When adding interaction with a new component try to extract the logic to a separate class so it can be easily reused
later by other tests. Let's use button as an example

Don't:
```javascript
class SomeViewPage {

  function clickButtonA() {
    browser.element('///button[normalize-space(text())="A"]').click();
  }

}
```

Do:
```javascript
class Button {
  constructor(label) {
    this.label = label;
  }

  function click() {
    browser.element(`///button[normalize-space(text())="${this.label}"]`).click()).execute();
  }
}

class Page {
  get buttonA() {
    return new Button('A');
  }

  function actionA() {
    this.buttonA.click();
  }
}
```


## Attribution

This testing project was based off of the boilerplate WebDriver.io project:
[cucumber-boilerplate](https://github.com/webdriverio/cucumber-boilerplate), to which we thank for
the head-start.
