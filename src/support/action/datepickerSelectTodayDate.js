module.exports = (selector) => {
    browser.element(selector ? selector : '//input[@id="date"]').click();
    browser.element('//td[contains(@class, "today")]').click();
};
