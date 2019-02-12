/**
 * Finds the select dropdown for the given label.
 *
 * @param {String} label the label next to the select dropdown
 */
module.exports = label => `//label[contains(text()[normalize-space()], "${label}")]` + 
    '/following-sibling::div//child::span[contains(@class, "select2")]';