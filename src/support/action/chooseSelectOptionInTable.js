
/**
 * Selects the given option for the select inside a table.
 * 
 * @param {String} section the section on the page
 * @param {String} option  the option to select. If not provided the select become blank.
 */
module.exports = (section = '', option) => {

    if (option) {
        browser
            .$(`${section}` +
                '/following-sibling::span[contains(@class, "select2-selection__arrow")]')
            .click();
        browser
            .$(`//span[contains(@class, "select2-container")]//li[normalize-space(text())="${option}"]`)
            .click();
    } else {
        browser
            .$(`${section}` +
                '/child::*//*[contains(@class, "select2-selection__clear")]')
            .click();
    }
};