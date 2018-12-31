import createColumnSelector from './createColumnSelector';

/**
 * Finds the select dropdown for the given column values and column name.
 *
 * @param {String} columnValues  an array that contains expected values in a row
 * @param {String} columnName   inform in which column the button exists
 */
module.exports = (columnValues, columnName) => {
    const previousColumns =
        `//table//th[normalize-space(text())="${columnName}"]` +
        '//preceding-sibling::*';
    return `${createColumnSelector(columnValues)}` +
        `//following-sibling::td[count(${previousColumns}) + 1 - ${columnValues.length}]` +
        `//span[contains(@class, "select2-selection")]`;
}
