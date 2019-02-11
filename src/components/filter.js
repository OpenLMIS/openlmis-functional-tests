import Button from './button';
import Input from './input';

import getInputSelector from '../support/lib/getInputSelector';
import getButtonSelector from '../support/lib/getButtonSelector';

/**
 * Represents a single filter on the UI.
 */
export default class Filter {
    /**
     * Constructs and object of the Filter class.
     *
     * @param {string} selector  the selector for the filter
     */
    constructor() {
        this.selector = '//div[contains(@class, "openlmis-table-filters")]';
    }

    get searchButton() {
        return new Button('Search', `${this.selector}//input[normalize-space(@value)="Search"]`);
    }

    /**
     * Open filter popover
     */
    open() {
        new Button('Filter', getButtonSelector('Filter'), false).click();
    }

    /**
     * Finds resources that match filter parameters.
     */
    search() {
        this.searchButton.click();
    }

    /**
     * Enters a value to the given input field.
     *
     * @param {string} name the name of input field
     * @param {string} value the value that should be placed into the input field
     */
    enterValue(name, value) {
        const input = new Input(name, this.selector + getInputSelector(name));
        input.value = value;
    }
}
