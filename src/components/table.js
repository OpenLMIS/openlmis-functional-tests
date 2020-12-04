import Button from './button';

import waitForDisplayed from '../support/action/waitForDisplayed';
import checkTableSort from '../support/check/checkTableSort';

import retrieveTableData from '../support/lib/retrieveTableData';
import isDisplayed from '../support/check/isDisplayed';

/**
 * Represents a single table on the UI.
 */
export default class Table {
    /**
     * Constructs and object of the Table class.
     *
     * @param {string} selector  the selector for the table
     */
    constructor(selector = '//table') {
        this.selector = selector;
    }

    /**
     * Gets the table data.
     */
    get data() {
        return retrieveTableData(this.selector);
    }

    /**
     * Verify that data are sorted correctly.
     *
     * @param {String}   columnName      which column has been used for sorting
     * @param {Function} retrieveRowData (optional) function that will retrieve data from table
     */
    sortedBy(columnName, retrieveRowData) {
        checkTableSort(this.data, columnName, retrieveRowData);
    }

    /**
     * Finds a button in the given column and click it.
     *
     * @param {Array} columnValues  an array that contains expected values in a row. Please put
     *                              undefined value for a column for which you don't expect
     *                              a specific value. For example, if there is a table with
     *                              three columns, you know the value of the second column and
     *                              you want to click on a button in the last column, use
     *                              [undefined, your_value].
     * @param {String} buttonLabel  the button label
     * @param {String} columnName   inform in which column the button exists (optional)
     * @param {boolean} waitForHide  informs whether it should wait for modal to close after clicking button, default true (optional) 
     */
    click(columnValues, buttonLabel, columnName = 'Actions', waitForHide = true) {
        const previousColumns = `${this.selector}` +
            `//th[normalize-space(text())="${columnName}"]` +
            '//preceding-sibling::*';
        const selector = `${this.createColumnSelector(columnValues)}` +
            `//following-sibling::td[count(${previousColumns}) + 1 - ${columnValues.length}]` +
            `//button[normalize-space(text())="${buttonLabel}"] | //input[normalize-space(@value)="${buttonLabel}"]`;

        isDisplayed(selector, waitForHide);
        new Button(buttonLabel, selector, waitForHide).click();
    }

    /**
     * Checks if a row with expected values exists in the table.
     *
     * @param {Array} columnValues an array that contains expected values in a row
     */
    waitFor(columnValues, hidden) {
        const selector = this.createColumnSelector(columnValues);
        isDisplayed(selector, hidden);
    }

    createColumnSelector(columnValues) {
        return columnValues.reduce(
            (previous, current) => `${previous}//following-sibling::td` +
                `${current ? `[normalize-space(text())="${current}"]` : ''}`,
            `${this.selector}//*`);
    }
}
