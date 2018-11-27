import waitForVisible from './waitForVisible';

/**
 * Selects the given option for the select with the given label.
 *
 * @param {String} label  the label of the select
 * @param {String} option the option to select. If not provided the select become blank.
 * @param {String} section the section on the page (optional)
 */
module.exports = (label, option, section) => {
    const prefix = section || '';

    if (option) {
        // Deals with selects for which options might load asynchronously.
        waitForVisible(`${prefix}//option[normalize-space(text())="${option}"]`);
        browser
            .element(`${prefix}//label[normalize-space(text())="${label}"]` +
                '/following-sibling::*//*[contains(@class, "select2-selection__arrow")]')
            .click();
        browser
            .element(`//span[contains(@class, "select2-container")]//li[normalize-space(text())="${option}"]`)
            .click();
    } else {
        browser
            .element(`${prefix}//label[normalize-space(text())="${label}"]` +
                '/following-sibling::*//*[contains(@class, "select2-selection__clear")]')
            .click();
    }
};
