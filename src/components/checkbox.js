import Input from './input';

import checkSelected from '../support/check/checkSelected';
import getCheckboxSelector from '../support/lib/getCheckboxSelector';

/**
 * Represents a single checkbox in the OpenLMIS System.
 */
export default class Checkbox extends Input {

    constructor(label, selector = getCheckboxSelector(label)) {
        super(label, selector);
    }

    get selected() {
        return browser.isSelected(this.selector);
    }

    isSelected() {
        checkSelected(this.selector);
    }

    isNotSelected() {
        checkSelected(this.selector, true);
    }

}
