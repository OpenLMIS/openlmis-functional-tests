/**
 * Disable/Enable offline mode.
 * @param  {boolean} enable  True to emulate internet disconnection.
 */

module.exports = (enable) => {

    if (enable) {
        browser.setNetworkConditions({ latency: 0, throughput: 0, offline: true });
    } else {
        browser.deleteNetworkConditions();
    }

};
