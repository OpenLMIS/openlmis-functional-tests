/**
 * Scroll the page to the given selector
 * @param  {string}   target selector pointing to the position where the browser should scroll to.
 */
module.exports = (target) => {

    browser.selectorExecute(target, (elements) => {
        const element = $(elements[0]).parents('td')[0];
        element.focus();
    });
};
