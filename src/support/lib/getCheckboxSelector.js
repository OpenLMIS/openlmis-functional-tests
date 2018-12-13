/**
 * Finds the checkbox input for the given label.
 *
 * @param {String} label the label next to the input
 */
module.exports = label => `//label[contains(text()[normalize-space()], "${label}")]/child::input`;
