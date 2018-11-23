/**
 * Fills an input with the given name with the given value.
 *
 * @param {String} label the label of the input
 * @param {String} value the value to fill the input with
 */
module.exports = (label, value) => {
    browser
        .element(`//label[normalize-space(text())="${label}"]/following-sibling::*//*[self::input or self::textarea]`)
        .setValue(value);
};
