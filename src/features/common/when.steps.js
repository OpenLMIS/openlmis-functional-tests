import { defineSupportCode } from 'cucumber';

import Button from '../../components/button';
import Action from '../../components/action';

import waitForVisible from '../../support/action/waitForVisible';
import fillInput from '../../support/action/fillInput';
import clickRadioInput from '../../support/action/clickRadioInput';
import clickCheckboxInput from '../../support/action/clickCheckboxInput';
import chooseSelectOption from '../../support/action/chooseSelectOption';
import offlineMode from '../../support/action/offlineMode';
import switchToPage from '../../support/action/switchToPage';
import sortBy from '../../support/action/sortBy';

defineSupportCode(({ When }) => {

    When(
        /^I enable offline mode$/,
        () => offlineMode(true)
    );

    When(
        /^I disable offline mode$/,
        () => offlineMode(false)
    );

    When(
        /^I enter "([^"]*)?" as "([^"]*)?"$/,
        (value, label) => fillInput(label, value)
    );

    When(
        /^I enter an empty value as "([^"]*)?"$/,
        label => fillInput(label, '')
    );

    When(
        /^I select "([^"]*)?" as "([^"]*)?"$/,
        (option, label) => clickRadioInput(label, option)
    );

    When(
        /^I select "([^"]*)?" checkbox$/,
        label => clickCheckboxInput(label)
    );

    When(
        /^I select "([^"]*)?" from the "([^"]*)?" list$/,
        (option, label) => chooseSelectOption(label, option)
    );

    When(
        /^I select nothing from the "([^"]*)?" list$/,
        label => chooseSelectOption(label)
    );

    When(
        /^I click on the "([^"]*)?" button$/,
        name => new Button(name).click()
    );

    When(
        /^I refresh page$/,
        () => {
            browser.refresh();
            waitForVisible('//h2');
        }
    );

    When(
        /^I go to the "([^"]*)?" page$/,
        pageNumber => new Action(() => switchToPage(pageNumber)).execute()
    );

    When(
        /^I sort list by "([^"]*)?"$/,
        sortOption => new Action(() => sortBy(sortOption)).execute()
    );

});
