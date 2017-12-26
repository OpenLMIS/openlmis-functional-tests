/**
 * Base Page Object.
 */
export default class Page {
    /**
     * Construct an new Page, with a default title.
     */
    constructor() {
        this.title = 'Default Page';
    }

    /**
     * Opens the URL for this path, relative links work fine.
     * @param {String} path relative path to this page.
     */
    open(path) {
        browser.url(path);
    }
}
