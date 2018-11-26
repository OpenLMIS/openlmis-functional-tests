/**
 * Check if checkbox is checked (true) or unchecked (false).
 *
 * @param {string}  label the label of the checkbox input
 * @param {boolean} value whether checkbox should be checked or not
 */
module.exports = (label, value) => {
    console.log(browser.element(`//label[contains(text()[normalize-space()], "${label}")]/child::input`).isSelected());
    expect(browser.element(`//label[contains(text()[normalize-space()], "${label}")]/child::input`).isSelected())
        .to.equal(value);
};
