/**
 * Finds the datepicker input for the given label.
 *
 * @param {String} label the label next to the date picker
 */
module.exports = label => `//label[normalize-space(text())="${label}"]` +
    `/following-sibling::div[contains(@class, 'openlmis-datepicker')]` +
    `/child::input[contains(@openlmis-datepicker, 'openlmis-datepicker')]`;
