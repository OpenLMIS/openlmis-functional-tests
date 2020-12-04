import Action from './action';
import getButtonSelector from '../support/lib/getButtonSelector';
import waitForDisplayed from '../support/action/waitForDisplayed';
import clickElement from '../support/action/clickElement';

/**
 * Represents a single button in the OpenLMIS system.
 */
export default class Button {

    /**
     * Creates an instance of the Button class.
     *
     * @param {string}  label       the label of the button
     * @param {string}  selector    (optional) the custom selector for the button, it should be used when there is are
     *                              multiple buttons with the same label visible at a time
     * @param {boolean} waitForHide (optional) should wait for modal to close after clicking button, default true 
     */
    constructor(label, selector = getButtonSelector(label), waitForHide = true) {
        this.selector = selector;
        this.waitForHide = waitForHide;
    }

    /**
     * Clicks the button. This is an Action and will handle waiting for the loading modal to fade.
     */
    click() {
        new Action(() => browser.$(this.selector).click(), this.waitForHide).execute();
    }

    /**
     * Waits for the button to be visible.
     */
    waitForIsVisible() {
        waitForDisplayed(this.selector);
    }
}
