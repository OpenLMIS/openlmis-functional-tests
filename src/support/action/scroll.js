/**
 * Scroll the page to the given element
 * @param  {number}   height height on what the browser should scroll the view.
 *                    By default it scroll the view to the top. It is possible to use
 *                    alias: top or bottom.
 */
module.exports = (height) => {
    let heightValue = height || 0;

    if (height === 'top') {
        heightValue = 0;
    }

    if (height === 'bottom') {
        heightValue = browser
            .execute(() => $(document).height())
            .value;
    }

    browser.execute(height => $('html, body').scrollTop(height), heightValue);
};
