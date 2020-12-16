import waitForDisplayed from '../support/action/waitForDisplayed';

/**
 * Represents a single modal in the OpenLMIS system.
 */
export default class Modal {

    /**
     * Creates an instance of the Modal class.
     *
     * @param {Object} config  the configuration object, provides the ability to specify header and URI that points to
     *                         the modal
     */
    constructor(config) {
        if (config) {
            this.header = config.header;
            this.uri = config.uri;
        }
    }

    /**
     * Waits for the modal to be visible. The modal is considered as loaded once the header is visible.
     */
    waitForIsVisible() {
        waitForDisplayed('//*[contains(@class,"modal")]' +
            `/*[(self::h1 or self::h4) and normalize-space(text())="${this.header}"]`);
    }

}
