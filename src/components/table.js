import retrieveTableData from '../support/lib/retrieveTableData';
import checkTableSort from '../support/check/checkTableSort';

/**
 * Represents a single action user can take on the UI. Adds waiting for the loading modal to fade.
 */
export default class Table {
    /**
     * Constructs and object of the Action class.
     * @param {Function} action  the function to be executed.
     */
    constructor(selector) {
        this.selector = selector;
    }

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
