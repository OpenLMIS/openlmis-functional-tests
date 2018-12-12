import Button from './button';

import waitForVisible from '../support/action/waitForVisible';
import checkTableSort from '../support/check/checkTableSort';

import retrieveTableData from '../support/lib/retrieveTableData';

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
     * @param {Number} columnNumber inform in which column the button exists (starts from one!)
     * @param {String} buttonLabel  the button label
     */
    click(columnValues, columnNumber, buttonLabel) {
        const selector = `${this.createColumnSelector(columnValues)}` +
            `//following-sibling::td[${columnNumber - columnValues.length}]` +
            `//button[normalize-space(text())="${buttonLabel}"]`;

        new Button(buttonLabel, selector).click();
    }

    /**
     * Checks if a row with expected values exists in the table.
     *
     * @param {Array} columnValues an array that contains expected values in a row
     */
    waitFor(columnValues, hidden) {
        const selector = this.createColumnSelector(columnValues);
        waitForVisible(selector, hidden);
    }

    createColumnSelector(columnValues) {
        return columnValues.reduce(
            (previous, current) => `${previous}//following-sibling::td` +
                `${current ? `[normalize-space(text())="${current}"]` : ''}`,
            `${this.selector}//*`);
    }
}
