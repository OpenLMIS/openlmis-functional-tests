/**
 * Sort a list with by the given option.
 *
 * @param {String} sortOption the sort option that should be selected.
 */
module.exports = (sortOption) => {
    const buttonSelector = '//p[text()="Sorted by"]/following-sibling::button';
    const optionSelector = `${buttonSelector}/following-sibling::ul/li/a[normalize-space(text())="${sortOption}"]`;

    browser.element(buttonSelector).click();
    browser.pause(500);
    browser.element(optionSelector).click();
};
