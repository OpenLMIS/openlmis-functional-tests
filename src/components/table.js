import retrieveTableData from '../support/lib/retrieveTableData';
import checkTableSort from '../support/check/checkTableSort';

/**
 * Represents a single table on the UI.
 */
export default class Table {
    /**
     * Constructs and object of the Table class.
     *
     * @param {string} selector  the selector for the table
     */
    constructor(selector) {
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
}
