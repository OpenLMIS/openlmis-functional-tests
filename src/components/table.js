import Button from './button';

import waitForVisible from '../support/action/waitForVisible';
import chooseSelectOptionInTable from '../support/action/chooseSelectOptionInTable';
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
     * @param {String} buttonLabel  the button label
     * @param {String} columnName   inform in which column the button exists (optional)
     */
    click(columnValues, buttonLabel, columnName = 'Actions') {
        const previousColumns = `${this.selector}` +
            `//th[normalize-space(text())="${columnName}"]` +
            '//preceding-sibling::*';
        const selector = `${this.createColumnSelector(columnValues)}` +
            `//following-sibling::td[count(${previousColumns}) + 1 - ${columnValues.length}]` +
            `//button[normalize-space(text())="${buttonLabel}"]`;

        new Button(buttonLabel, selector).click();
    }

    /**
     * Finds a select dropdown in the given column.
     *
     * @param {Array} columnValues  an array that contains expected values in a row
     * @param {String} columnName   inform in which column the button exists
     */
    getSelectInputSelector(columnValues, columnName = '') {
        const previousColumns = `${this.selector}` +
            `//th[normalize-space(text())="${columnName}"]` +
            '//preceding-sibling::*';
        return `${this.createColumnSelector(columnValues)}` +
            `//following-sibling::td[count(${previousColumns}) + 1 - ${columnValues.length}]` +
            `//span[contains(@class, "select2-selection")]`;
    }

    clickSelectInput(columnValues, columnName = '') {
        const selector = this.getSelectInputSelector(columnValues, columnName);
        browser.element(`${selector}`).click();
    }

    unselectOption(columnValues, columnName = '') {
        const selector = this.getSelectInputSelector(columnValues, columnName);
        chooseSelectOptionInTable(selector);
    }

    selectOption(columnValues, option, columnName = '') {
        const selector = this.getSelectInputSelector(columnValues, columnName);
        chooseSelectOptionInTable(selector, option);
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
