import isEnabled from '../support/check/isEnabled';
import isVisible from '../support/check/isDisplayed';
import waitForDisplayed from '../support/action/waitForDisplayed';

import getDatePickerInputSelector from '../support/lib/getDatePickerInputSelector';
import getFullMonthName from '../support/lib/getFullMonthName';

/**
 * Represents a single datepicker input in the OpenLMIS System.
 */
export default class DatePicker {

    get datePickerDropdownSelector() {
        return `//div[contains(@class, 'datepicker-dropdown')]`;
    }

    constructor(label, selector = getDatePickerInputSelector(label)) {
        this.selector = selector;
    }

    get clearButton() {
        return browser.$(this.datePickerDropdownSelector + `//th[contains(@class, 'clear')]`);
    }

    set value(value) {
        browser.$(this.selector).setValue(value);
    }

    clearInput() {
        browser.clearElement(this.selector);
    }

    clickClearButton() {
        this.clearButton.click();
    }

    open() {
        browser.$(this.selector).click();
    }

    isEnabled() {
        isEnabled(this.selector);
    }

    isDisabled() {
        isEnabled(this.selector, true);
    }

    isEmpty() {
        this.hasValue('');
    }
    
    isOpen() {
        isVisible(this.datePickerDropdownSelector);
    }

    isNotOpen() {
        isVisible(this.datePickerDropdownSelector, true);
    }

    hasValue(expected) {
        expect(browser.$(this.selector).getValue()).to.equal(expected);
    }

    setDateInFuture(numberOfDays = 1) {
        const tomorrow = new Date();
        tomorrow.setDate(new Date().getDate() + numberOfDays ? numberOfDays : 1);

        this.value = [tomorrow.getDate(), tomorrow.getMonth() + 1, tomorrow.getFullYear()].join('/');
    }

    selectTodayDate() {
        this.open();
        browser.$(this.datePickerDropdownSelector + '//td[contains(@class, "today")]').click();
    }

    isDateSelected(date) {
        const dateParts = date.split('/');
        const dayLabel = dateParts[0];
        const monthYearLabel = getFullMonthName(dateParts[1] - 1) + ' ' + dateParts[2];

        this.isOpen();
        isVisible(this.datePickerDropdownSelector + '//td[@class = "active day"][normalize-space(text())="' + dayLabel + '"]');
        isVisible(this.datePickerDropdownSelector + '//th[@class = "datepicker-switch"][normalize-space(text())="' + monthYearLabel + '"]');
    }

    isDayEnabled(dayLabel) {
        isVisible(this.datePickerDropdownSelector + '//td[@class = "day"][normalize-space(text())="' + dayLabel + '"]');
    }

    isDayDisabled(dayLabel) {
        isVisible(this.datePickerDropdownSelector + '//td[@class = "disabled day"][normalize-space(text())="' + dayLabel + '"]');
    }

    closeDatePicker() {
        browser.$(`//h1[normalize-space(text())="Logistics Management Information System"]`).click();
        this.waitForDatePickerToClose();
    }

    waitForDatePickerToClose() {
        waitForDisplayed(this.datePickerDropdownSelector, true);
    }
}
