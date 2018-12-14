/**
 * Finds the text area with the given id.
 *
 * @param {String} id the label next to the input (or textbox)
 */
module.exports = id => `//textarea[contains(@id, ${id})]`;
