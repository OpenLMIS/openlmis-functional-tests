/**
 * Scroll the window to the table
 *
 * @param  {number}   width width of the table to which the browser should scroll the view.
 *                    By default it scrolls the view to the left. It is possible to use
 *                    alias: left or right.
 */
module.exports = (width) => {
    let widthValue = width || 0;

    if (width === 'left') {
        widthValue = 0;
    }

    if (width === 'right') {
        widthValue = browser
            .execute(() => $('.openlmis-flex-table').width());
    }

    browser.execute(width => $('.openlmis-flex-table').scrollLeft(width), widthValue);
};
