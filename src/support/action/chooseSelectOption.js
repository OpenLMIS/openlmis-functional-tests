import waitForVisible from './waitForVisible';

/**
 * Selects the given option for the select with the given label.
 *
 * @param {String} label  the label of the select
 * @param {String} option the option to select
 */
module.exports = (label, option) => {
    browser.element('//label[normalize-space(text())="' + label + '"]/following-sibling::*//*[contains(@class, "select2-selection__arrow")]').click();
    waitForVisible('.select2-container');
    browser.element('//span[contains(@class, "select2-container")]//li[normalize-space(text())="' + option + '"]').click();
};
