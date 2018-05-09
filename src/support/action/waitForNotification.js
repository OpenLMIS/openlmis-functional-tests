import waitForVisible from './waitForVisible';

/**
 * Wait for the notification with the given message to become visible.
 *
 * @param {String} message the message to wait for
 */
module.exports = (message) => {
    browser.waitForVisible('//div[contains(@class, "notification") and contains(@class, "is-success") and normalize-space(text())="' + message + '"]');
};
