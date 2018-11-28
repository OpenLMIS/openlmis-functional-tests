module.exports = (selector, numberOfDays) => {
    var tomorrow = new Date();
    tomorrow.setDate(new Date().getDate() + numberOfDays ? numberOfDays : 1);

    browser.element(selector ? selector : '//input[@id="date"]').setValue([tomorrow.getDate(), tomorrow.getMonth() + 1, tomorrow.getFullYear()].join("/"));
};
