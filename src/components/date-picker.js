import isEnabled from '../support/check/isEnabled';
import isVisible from '../support/check/isVisible';
import waitForVisible from '../support/action/waitForVisible';

import getDatePickerInputSelector from '../support/lib/getDatePickerInputSelector';

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
        return browser.element(this.datePickerDropdownSelector + `//th[contains(@class, 'clear')]`);
    }

    set value(value) {
        browser.element(this.selector).setValue(value);
    }

    clearInput() {
        browser.clearElement(this.selector);
    }

    clickClearButton() {
        this.clearButton.click();
    }

    open() {
        browser.element(this.selector).click();
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
        expect(browser.element(this.selector).getValue()).to.equal(expected);
    }

    setDateInFuture() {
        const tomorrow = new Date();
        tomorrow.setDate(new Date().getDate() + numberOfDays ? numberOfDays : 1);

        this.value = [tomorrow.getDate(), tomorrow.getMonth() + 1, tomorrow.getFullYear()].join('/');
    }

    selectTodayDate() {
        this.open();
        browser.element(this.datePickerDropdownSelector + '//td[contains(@class, "today")]').click();
    }

    isDateSelected(date) {
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

        const dateParts = date.split('/');
        const dayLabel = dateParts[0];
        const monthYearLabel = months[dateParts[1] - 1] + ' ' + dateParts[2];

        this.isOpened();
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
        browser.element(`//h1[normalize-space(text())="Logistics Management Information System"]`).click();
        this.waitForDatePickerToClose();
    }

    waitForDatePickerToClose() {
        waitForVisible(this.datePickerDropdownSelector, true);
    }
}
