import { defineSupportCode } from 'cucumber';

import HomePage from '../../pages/home.page';

import AlertModal from '../../components/alert-modal';

import waitForNotification from '../../support/action/waitForNotification';

import checkInputValue from '../../support/check/checkInputValue';
import verifyCheckboxValue from '../../support/check/verifyCheckboxValue';
import checkSelectValue from '../../support/check/checkSelectValue';
import checkInputEnable from '../../support/check/checkInputEnable';

defineSupportCode(({ Then }) => {
    Then(
        /^the offline mode should be enabled$/,
        () => HomePage.isOffline()
    );

    Then(
        /^the offline mode should be disabled$/,
        () => HomePage.isOnline()
    );

    Then(
        /^I should see a successful notification saying "([^"]*)?"$/,
        message => waitForNotification(message)
    );

    Then(
        /^Value of the "([^"]*)" should be "([^"]*)"$/,
        (name, value) => checkInputValue(name, value)
    );

    Then(
        /^Value of the "([^"]*)" should be an empty value$/,
        name => checkInputValue(name, '')
    );

    Then(
        /^checkbox with label "([^"]*)" should be checked$/,
        label => verifyCheckboxValue(label, true)
    );

    Then(
        /^checkbox with label "([^"]*)" should be unchecked$/,
        label => verifyCheckboxValue(label, false)
    );

    Then(
        /^Value of the "([^"]*)" list should be "([^"]*)"$/,
        (name, value) => checkSelectValue(name, value)
    );

    Then(
        /^Value of the "([^"]*)" list should be an empty value$/,
        name => checkSelectValue(name, '')
    );

    Then(
        /^I should not see "([^"]*)?" tab under "([^"]*)?"$/,
        (tab, parent) => HomePage.checkIfScreenIsNotVisibleInNavbar(tab, parent)
    );

    Then(
        /^I should get an error message$/,
        () => new AlertModal().waitForIsVisible()
    );

    Then(
        /^The "([^"]*)" input should be disabled$/,
        name => checkInputEnable(name, false)
    );
});
