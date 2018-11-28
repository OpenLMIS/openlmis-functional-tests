module.exports = (label) => {
    return browser.element(`//label[contains(text()[normalize-space()], "${label}")]/child::input`).isSelected();
};
