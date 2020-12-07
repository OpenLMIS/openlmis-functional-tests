/**
 * Switch to another page.
 *
 * @param {String} page the number of a page to open.
 */
module.exports = (pageNumber) => {
    browser.execute((page) => { $(`ul a:contains('${page}')`).click(); }, pageNumber);
};
