/**
 * Selects the given option for the radio button with given label.
 *
 * @param {String} label  the label of the input
 * @param {String} option the option to select
 */
module.exports = (label, option) => {
    browser.element('//legend[normalize-space(text())="' + label + '"]/../label/text()[normalize-space(.)="' + option + '"]/preceding-sibling::input').click();
};
