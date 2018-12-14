import waitForVisible from './waitForVisible';
import scroll from './scroll';

/**
 * Selects the given option for the select with the given label.
 *
 * @param {String} label   the label of the select
 * @param {String} option  the option to select. If not provided the select become blank.
 * @param {String} section the section on the page (optional)
 */
module.exports = (label, option, section = '') => {
    // Workaround for an issue with rendering a list of available options for this select.
    // Without it the list is rendered below the select instead of above it. Because of that,
    // a test can not select an option based on the name.
    scroll('bottom');
    scroll('top');
    scroll('bottom');

    if (option) {
        // Deals with selects for which options might load asynchronously.
        waitForVisible(`${section}//option[normalize-space(text())="${option}"]`);
        browser
            .element(`${section}//label[normalize-space(text())="${label}"]` +
                '/following-sibling::*//*[contains(@class, "select2-selection__arrow")]')
            .click();
        browser
            .element(`//span[contains(@class, "select2-container")]//li[normalize-space(text())="${option}"]`)
            .click();
    } else {
        browser
            .element(`${section}//label[normalize-space(text())="${label}"]` +
                '/following-sibling::*//*[contains(@class, "select2-selection__clear")]')
            .click();
    }
};
