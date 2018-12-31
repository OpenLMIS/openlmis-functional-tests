/**
 * Creates a selector for column with given column values.
 *
 * @param {String} columnValues  an array that contains expected values in a row
 */
module.exports = (columnValues) => {
    return columnValues.reduce(
        (previous, current) => `${previous}//following-sibling::td` +
            `${current ? `[normalize-space(text())="${current}"]` : ''}`,
        `//table//*`);
}