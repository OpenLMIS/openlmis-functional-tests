/**
 * Finds the input with radio type for the given label.
 *
 * @param {String} label  the label next to the radio group
 * @param {String} option the label next to the input
 */
module.exports = (label, option) => `//legend[normalize-space(text())="${label}"]` +
    `/../label/text()[normalize-space(.)="${option}"]/preceding-sibling::input`;
