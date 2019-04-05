import createColumnSelector from './createColumnSelector';

/**
 * Finds the check icon for the given column values and column name
 *
 * @param {string} columnValues  an array that contains expected (and nested) values in a row
 * @param {string} columnName  name of the column, informs in which column the dropdown exists
 */
module.exports = (columnValues, columnName) => {
    const previousColumns =
        `//table//th[normalize-space(text())="${columnName}"]` +
        '//preceding-sibling::*';

    return `${createColumnSelector(columnValues)}` +
        `//following-sibling::td[count(${previousColumns}) + 1 - ${columnValues.length} - 1]` +
        '//i[contains(@class, "icon-ok")]';
}