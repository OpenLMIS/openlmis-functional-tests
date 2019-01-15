/**
 * Finds the requisition comment for the given header.
 *
 * @param {string} header the requisition comment header
 * @param {string} info the info about date and author in requisition comment header
 * @param {string} comment the comment text
 */
module.exports = (header, info, comment) => `//article/header/child::div[contains(@class, 'status')` +
    ` and normalize-space(text())="${header}"]/following-sibling::div[contains(@class, 'date')` +
    ` and normalize-space(text())="${info}"]/ancestor::article/div[contains(@class, 'content')` +
    ` and normalize-space(text())="${comment}"]`;
