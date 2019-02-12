/**
 * Finds the select dropdown for the given column values and column name
 *
 * @param {string} columnValues  an array that contains expected (and nested) values in a row
 * @param {string} columnName  name of the column, informs in which column the dropdown exists
 */
module.exports = (columnValues, columnName) => {
    const previousColumns =
        `//table//th[normalize-space(text())="${columnName}"]` +
        '//preceding-sibling::*';

    const columnSelector = columnValues.reduce(
        (previous, current) => `${previous}//following-sibling::td` +
            `${current ? `//div[contains(text(), "${current}")]` : ''}`,
        `//table//*`);

   return `${columnSelector}` +
        `//ancestor::td//following-sibling::td[count(${previousColumns}) + 1 - ${columnValues.length}]`;
}