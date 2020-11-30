import { defineSupportCode } from 'cucumber';

import Button from '../../components/button';
import Action from '../../components/action';
import Input from '../../components/input';
import Checkbox from '../../components/checkbox';
import Radiobox from '../../components/radiobox';
import DatePicker from '../../components/date-picker';
import loadingModal from '../../components/loading-modal';

import homePage from '../../pages/home.page';

import getButtonSelector from '../../support/lib/getButtonSelector';
import waitForDisplayed from '../../support/action/waitForDisplayed';
import chooseSelectOption from '../../support/action/chooseSelectOption';
import offlineMode from '../../support/action/offlineMode';
import switchToPage from '../../support/action/switchToPage';
import sortBy from '../../support/action/sortBy';
import pause from '../../support/action/pause';
import scroll from '../../support/action/scroll';

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
        /^I click on the "([^"]*)?" button without waiting for loading modal$/,
        name => new Button(name, getButtonSelector(name), false).click()
    );

    When(
        /^I refresh page$/,
        () => {
            browser.refresh();
            waitForDisplayed('//h2');
        }
    );

    When(
        /^I go to the "([^"]*)?" page$/,
        pageNumber => {
            new Action(() => {
                switchToPage(pageNumber);
                loadingModal.waitForHide();
            }).execute();
            
        }
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

    When(
        /^I click on the "([^"]*)?" datepicker$/,
        label => new DatePicker(label).open()
    );

    When(
        /^I select today's date on "([^"]*)?" datepicker$/,
        label => new DatePicker(label).selectTodayDate()
    );

    When(
        /^I enter "([^"]*)" date on "([^"]*)" datepicker$/,
        (date, label) => {
            const datepicker = new DatePicker(label);
            datepicker.value = date;
            datepicker.closeDatePicker();
        }
    );

    When(
        /^I click clear button on "([^"]*)" datepicker$/,
        label => new DatePicker(label).clickClearButton()
    );

    When(
        /^I scroll to bottom$/,
        () => scroll('bottom')
    );
});
