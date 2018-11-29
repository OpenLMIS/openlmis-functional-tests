/**
 * Check if input with the given label is enabled.
 *
 * @param {String}  label the label of the input
 * @param {boolean} value the expected value of the input disabled attribute
 */
module.exports = (label, value) => {
    expect(browser
        .element(`//label[normalize-space(text())="${label}"]/following-sibling::*//*[self::input or self::textarea]`)
        .isEnabled())
        .to.equal(value);
};
