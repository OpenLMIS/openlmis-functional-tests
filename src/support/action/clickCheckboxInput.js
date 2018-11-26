/**
 * Clicks checkbox with given label.
 *
 * @param {String} label  the label of the checkbox
 */
module.exports = (label) => {
    browser.element(`//label[contains(text()[normalize-space()], "${label}")]/child::input`).click();
};