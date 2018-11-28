/**
 * Check if table data are sorted correctly by the given column.
 *
 * @param {String}   tableData       data that are in the table
 * @param {String}   columnName      which column has been used for sorting
 * @param {Function} retrieveRowData (optional) function that will retrieve data
 *                                   related to the given column from each table row
 */
module.exports = (tableData, columnName, retrieveRowData = elem => elem[columnName]) => {
    const values = tableData.map(retrieveRowData);
    const actual = values.join(' > ');
    const expected = values.slice().sort().join(' > ');

    expect(actual).to.equal(expected, 'Incorrect order');
};
