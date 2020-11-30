import Action from './action';

/**
 * Represents a single text area in the OpenLMIS System.
 */
export default class Link {

    /**
     * Creates an instance of the Link class.
     *
     * @param {string} text the label of the button
     * @param {string} selector the link selector
     * @param {boolean} waitForHide should wait for modal to close after clicking button, default true 
     */    
    constructor(text, selector = `//a[normalize-space(text())="${text}"]`, waitForHide = true) {
        this.selector = selector;
        this.waitForHide = waitForHide;
    }

    /**
     * Clicks the link. This is an Action and will handle waiting for the loading modal to fade.
     */    
    click() {
        new Action(() => browser.$(this.selector).click(), this.waitForHide).execute();
    }

}
