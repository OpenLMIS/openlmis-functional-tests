/**
 * Check if select with the given label has the given selected option.
 *
 * @param {String} label the label of the select
 * @param {String} value the expected selected option of the select
 */
module.exports = (label, value) => {
    const element = browser
        .$(`//label[normalize-space(text())="${label}"]` +
            '/following-sibling::*//*[contains(@class, "select2-selection__rendered")]');
    const text = element.getText().trim();

    // if the select has the selected value then it also have span with the 'x' character
    // after we split the text of rendered element we should get two values: 'x' and
    // an expected value.
    const array = text.split('\n');
    const actual = array.length === 1 ? array[0] : array[1];

    // if no option has been selected, the select has a placeholder
    const expected = value === '' ? 'Select an option' : value;

    expect(actual).to.equal(expected);
};
