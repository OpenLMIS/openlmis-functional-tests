module.exports = (selector) => {
    browser.$(selector || '//input[@id="date"]').click();
    browser.$('//td[contains(@class, "today")]').click();
};
