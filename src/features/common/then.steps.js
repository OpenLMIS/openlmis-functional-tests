var {Then} = require('cucumber');

import HomePage from '../../pages/home.page';

import AlertModal from '../../components/alert-modal';
import Input from '../../components/input';
import Checkbox from '../../components/checkbox';

import waitForNotification from '../../support/action/waitForNotification';
import waitForErrorNotification from '../../support/action/waitForErrorNotification';

import checkSelectValue from '../../support/check/checkSelectValue';
import DatePicker from '../../components/date-picker';

Then(
    /^the offline indicator should be visible$/,
    () => HomePage.isOffline()
);

Then(
    /^the offline indicator should not be visible$/,
    () => HomePage.isOnline()
);

Then(
    /^I should see a successful notification saying "([^"]*)?"$/,
    message => waitForNotification(message)
);

Then(
    /^I should see an error notification saying "([^"]*)?"$/,
    message => waitForErrorNotification(message)
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

Then(
    /^I should see "([^"]*)" datepicker empty$/,
    label => new DatePicker(label).isEmpty()
);

Then(
    /^I should see opened "([^"]*)" datepicker$/,
    label => new DatePicker(label).isOpen()
);

Then(
    /^I should see today's date on "([^"]*)" datepicker input$/,
    label => {
        const today = new Date();
        new DatePicker(label).hasValue([
            getDoubleDigitNumber(today.getDate()), 
            getDoubleDigitNumber(today.getMonth() + 1), 
            today.getFullYear()
        ].join('/'));
    }
);

Then(
    /^I should see "([^"]*)" date on "([^"]*)" datepicker$/,
    (date, label) => {
        const datePicker = new DatePicker(label);
        datePicker.open();
        datePicker.isDateSelected(date);
    }
);

Then(
    /^I should not see "([^"]*)" datepicker opened$/,
    label => new DatePicker(label).isNotOpen()
);

Then(
    /^I should see "([^"]*)" day disabled on "([^"]*)" datepicker$/,
    (day, label) => {
        const datepicker = new DatePicker(label);
        datepicker.open();
        datepicker.isDayDisabled(day);
        datepicker.closeDatePicker();
    }
);

Then(
    /^I should see "([^"]*)" day enabled on "([^"]*)" datepicker$/,
    (day, label) => {
        const datepicker = new DatePicker(label);
        datepicker.open();
        datepicker.isDayEnabled(day);
        datepicker.closeDatePicker();
    }
);

function getDoubleDigitNumber(numberText) {
    numberText = new String(numberText);
    return numberText.length === 1 ? '0' + numberText : numberText;
}