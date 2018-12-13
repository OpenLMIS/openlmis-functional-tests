module.exports = (selector) => {
    browser.element(selector || '//input[@id="date"]').click();
    browser.element('//td[contains(@class, "today")]').click();
};
