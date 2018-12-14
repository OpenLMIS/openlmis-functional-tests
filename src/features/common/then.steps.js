import { defineSupportCode } from 'cucumber';

import HomePage from '../../pages/home.page';

import AlertModal from '../../components/alert-modal';
import Input from '../../components/input';
import Checkbox from '../../components/checkbox';

import waitForNotification from '../../support/action/waitForNotification';

import checkSelectValue from '../../support/check/checkSelectValue';

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
        (name, value) => new Input(name).hasValue(value)
    );

    Then(
        /^Value of the "([^"]*)" should be an empty value$/,
        name => new Input(name).isEmpty()
    );

    Then(
        /^checkbox with label "([^"]*)" should be checked$/,
        label => new Checkbox(label).isSelected()
    );

    Then(
        /^checkbox with label "([^"]*)" should be unchecked$/,
        label => new Checkbox(label).isNotSelected()
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
        name => new Input(name).isDisabled()
    );
});
