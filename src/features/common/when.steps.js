import { defineSupportCode } from 'cucumber';

import Button from '../../components/button';
import Action from '../../components/action';
import Input from '../../components/input';
import Checkbox from '../../components/checkbox';
import Radiobox from '../../components/radiobox';

import homePage from '../../pages/home.page';

import waitForVisible from '../../support/action/waitForVisible';
import chooseSelectOption from '../../support/action/chooseSelectOption';
import offlineMode from '../../support/action/offlineMode';
import switchToPage from '../../support/action/switchToPage';
import sortBy from '../../support/action/sortBy';
import pause from '../../support/action/pause';

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
        (value, label) => {
            const input = new Input(label);
            input.value = value;
        }
    );

    When(
        /^I enter an empty value as "([^"]*)?"$/,
        (label) => {
            const input = new Input(label);
            input.value = '';
        }
    );

    When(
        /^I select "([^"]*)?" as "([^"]*)?"$/,
        (option, label) => new Radiobox(label, option).click()
    );

    When(
        /^I select "([^"]*)?" checkbox$/,
        label => new Checkbox(label).click()
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

    When(
        /^I click on the "([^"]*)?" tab$/,
        name => homePage.clickTabInNavbar(name)
    );

    When(
        /^I wait "([^"]*)?" seconds for UI adjustment$/,
        seconds => pause(seconds * 1000)
    );

});
