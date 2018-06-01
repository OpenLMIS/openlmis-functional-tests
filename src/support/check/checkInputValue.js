/**
 * Check if input with the given label has the given value.
 *
 * @param {String} label the label of the input
 * @param {String} value the expected value of the input
 */
module.exports = (label, value) => {
    expect(browser.element('//label[normalize-space(text())="' + label + '"]/following-sibling::*//input').getValue())
        .to.equal(value);
};
