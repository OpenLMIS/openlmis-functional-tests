import waitForVisible from '../support/action/waitForVisible';
import Action from '../components/action';

/**
 * Base Page Object.
 */
export default class Page {
    /**
     * Construct an new Page, with a default title.
     */
    constructor(config) {
        if (config) {
            this.header = config.header;
            this.uri = config.uri;
        }
    }

    /**
     * Opens the URL for this path, relative links work fine.
     */
    open() {
        new Action(() => browser.url(`/#!/${this.uri}`)).execute();
    }

    waitForIsVisible() {
        waitForVisible(`//h2[normalize-space(text())="${this.header}"]`);
    }
}
