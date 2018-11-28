import checkCheckboxValue from './checkCheckboxValue';

/**
 * Check if checkbox is checked (true) or unchecked (false).
 *
 * @param {string}  label the label of the checkbox input
 * @param {boolean} value whether checkbox should be checked or not
 */
module.exports = (label, value) => {
    expect(checkCheckboxValue(label))
        .to.equal(value);
};
