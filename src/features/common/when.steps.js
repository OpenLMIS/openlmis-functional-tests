import { defineSupportCode } from 'cucumber';

import waitForVisible from '../../support/action/waitForVisible';
import fillInput from '../../support/action/fillInput';
import clickRadioInput from '../../support/action/clickRadioInput';
import chooseSelectOption from '../../support/action/chooseSelectOption';
import clickButton from '../../support/action/clickButton';
import offlineMode from '../../support/action/offlineMode';

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
        /^I select "([^"]*)?" as "([^"]*)?"$/,
        (option, label) => clickRadioInput(label, option)
    );

    When(
        /^I select "([^"]*)?" from the "([^"]*)?" list$/,
        (option, label) => chooseSelectOption(label, option)
    );

    When(
        /^I click on the "([^"]*)?" button$/,
        name => clickButton(name)
    );

    When(
        /^I refresh page$/,
        () => {
            browser.refresh();
            waitForVisible('//h2');
        }
    );
});
