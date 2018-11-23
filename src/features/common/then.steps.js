import { defineSupportCode } from 'cucumber';

import waitForNotification from '../../support/action/waitForNotification';
import checkInputValue from '../../support/check/checkInputValue';
import AlertModal from '../../components/alert-modal';

import HomePage from '../../pages/home.page';


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
        /^I should not see "([^"]*)?" tab under "([^"]*)?"$/,
        (tab, parent) => HomePage.checkIfScreenIsNotVisibleInNavbar(tab, parent)
    );

    Then(
        /^I should get an error message$/,
        () => new AlertModal().waitForIsVisible()
    );
});
