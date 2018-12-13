/**
 * Disable/Enable offline mode.
 * @param  {boolean} enable  True to emulate internet disconnection.
 */

module.exports = (enable) => {

    if (enable) {
        browser.cdp('Network', 'enable');
        browser.cdp('Network', 'emulateNetworkConditions', {
            offline: true,
            latency: 0,
            downloadThroughput: 0,
            uploadThroughput: 0,
            connectionType: 'none',
        });
    } else {
        browser.cdp('Network', 'disable');
    }

};
