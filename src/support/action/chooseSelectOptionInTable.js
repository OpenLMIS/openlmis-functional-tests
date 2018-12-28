import scroll from './scroll';

/**
 * Selects the given option for the select inside a table.
 * 
 * @param {String} section the section on the page
 * @param {String} option  the option to select. If not provided the select become blank.
 */
module.exports = (section = '', option) => {
    // Workaround for an issue with rendering a list of available options for this select.
    // Without it the list is rendered below the select instead of above it. Because of that,
    // a test can not select an option based on the name.
    scroll('bottom');
    scroll('top');
    scroll('bottom');

    if (option) {
        // Deals with selects for which options might load asynchronously.
        browser
            .element(`${section}` +
                '/following-sibling::span[contains(@class, "select2-selection__arrow")]')
            .click();
        browser
            .element(`//span[contains(@class, "select2-container")]//li[normalize-space(text())="${option}"]`)
            .click();
    } else {
        browser
            .element(`${section}` +
                '/child::*//*[contains(@class, "select2-selection__clear")]')
            .click();
    }
};