import waitForDisplayed from '../support/action/waitForDisplayed';
import Action from './action';

/**
 * Base Page Object.
 */
export default class Page {
    /**
     * Construct an new Page, with a default title.
     *
     * @param {Object} config  the configuration object, provides the ability to specify header and URI that points to
     *                         the page
     */
    constructor(config) {
        if (config) {
            this.header = config.header;
            this.uri = config.uri;
            this.navParent = config.navParent;
            this.navChild = config.navChild;
        }
    }

    /**
     * Accesses the page using given URI.
     */
    open() {
        new Action(() => {
            browser.url(`/#!/${this.uri}`);
            browser.pause(1000);
        }).execute();
    }

    /**
     * Waits for the page to be visible. The page is considered as loaded once the header is visible.
     */
    waitForIsVisible() {
        waitForDisplayed(`//h2[normalize-space(text())="${this.header}"]`);
    }

    /**
     * Accesses the page using navigation. This is useful for testing whether page is accessible using the navigation.
     */
    navigateToPage() {
        new Action(() => {
            browser.element(`//*[contains(@class, 'navbar')]//a[normalize-space(text())='${this.navParent}']`).click();
            browser.element(`//*[contains(@class, 'dropdown')]//a[normalize-space(text())='${this.navChild}']`).click();
        }).execute();
    }
}
