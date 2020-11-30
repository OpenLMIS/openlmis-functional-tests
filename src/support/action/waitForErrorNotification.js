import waitForDisplayed from './waitForDisplayed';

/**
 * Wait for the notification with the given message to become visible.
 *
 * @param {String} message the message to wait for
 */
module.exports = (message) => {
    const selector = '//div[contains(@class, "notification") and contains(@class, "is-error") and ' +
        `normalize-space(text())="${message}"]`;

    waitForDisplayed(selector);
    waitForDisplayed(selector, true);
};
