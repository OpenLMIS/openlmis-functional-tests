import Action from './action';
import getButtonSelector from '../support/lib/getButtonSelector';

/**
 * Represents a single button in the OpenLMIS system.
 */
export default class Button {

    /**
     * Creates an instance of the Button class.
     *
     * @param {string} label     the label of the button
     * @param {string} selector  (optional) the custom selector for the button, it should be used when there is are
     *                           multiple buttons with the same label visible at a time
     */
    constructor(label, selector = getButtonSelector(label)) {
        this.selector = selector;
    }

    /**
     * Clicks the button. This is an Action and will handle waiting for the loading modal to fade.
     */
    click() {
        new Action(() => browser.element(this.selector).click()).execute();
    }
}
