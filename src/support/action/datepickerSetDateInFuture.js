module.exports = (selector, numberOfDays) => {
    const tomorrow = new Date();
    tomorrow.setDate(new Date().getDate() + numberOfDays ? numberOfDays : 1);

    browser
        .element(selector || '//input[@id="date"]')
        .setValue([tomorrow.getDate(), tomorrow.getMonth() + 1, tomorrow.getFullYear()].join('/'));
};
