import isEnabled from '../support/check/isEnabled';
import waitForDisplayed from '../support/action/waitForDisplayed';
import getTextAreaSelector from '../support/lib/getTextAreaSelector';

/**
 * Represents a single text area in the OpenLMIS System.
 */
export default class TextArea {

    constructor(id, selector = getTextAreaSelector(id)) {
        this.selector = selector;
    }

    set value(value) {
        browser.$(this.selector).setValue(value);
    }

    clear() {
        browser.clearElement(this.selector);
    }

    click() {
        browser.$(this.selector).click();
    }

    isEditable() {
        isEnabled(this.selector);
    }

    isUneditable() {
        isEnabled(this.selector, true);
    }

    hasValue(expected) {
        expect(browser.$(this.selector).getValue()).to.equal(expected);
    }

    waitForIsVisible() {
        waitForDisplayed(this.selector);
    }

}
