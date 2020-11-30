import isEnabled from '../support/check/isEnabled';

import getInputSelector from '../support/lib/getInputSelector';

/**
 * Represents a single input/textbox in the OpenLMIS System.
 */
export default class Input {

    constructor(label, selector = getInputSelector(label)) {
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

    isDisabled() {
        isEnabled(this.selector, true);
    }

    isEmpty() {
        this.hasValue('');
    }

    hasValue(expected) {
        expect(browser.$(this.selector).getValue()).to.equal(expected);
    }

}
