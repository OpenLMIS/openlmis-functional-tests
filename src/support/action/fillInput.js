/**
 * Fills an input with the given name with the given value.
 *
 * @param {String} label the label of the input
 * @param {String} value the value to fill the input with
 * @param {Number} pause how long the browser should wait (in ms) after selected an option (optional)
 */
module.exports = (label, value, pause = 500) => {
    browser
        .element(`//label[normalize-space(text())="${label}"]/following-sibling::*//*[self::input or self::textarea]`)
        .setValue(value);
    browser.pause(pause);
};
