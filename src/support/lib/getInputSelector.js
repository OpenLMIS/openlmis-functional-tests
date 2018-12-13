/**
 * Finds the input (or textbox) for the given label.
 *
 * @param {String} label the label next to the input (or textbox)
 */
module.exports = label => `//label[normalize-space(text())="${label}"]` +
    '/following-sibling::*//*[self::input or self::textarea]';
