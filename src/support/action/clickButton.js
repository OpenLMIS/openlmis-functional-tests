/**
 * Clicks the button (or input) with the given text.
 *
 * @param {String} text the text on the button (or input)
 */
module.exports = (text) => {
    browser.element('//input[normalize-space(@value)="' + text + '"] | //button[normalize-space(text())="' + text + '"]').click();
};
