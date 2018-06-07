import getButtonSelector from '../lib/getButtonSelector';

/**
 * Clicks the button (or input) with the given text.
 *
 * @param {String} text the text on the button (or input)
 */
module.exports = (text) => {
    browser.element(getButtonSelector(text)).click();
};
