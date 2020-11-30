import Modal from './modal';
import waitForDisplayed from '../support/action/waitForDisplayed';

/**
 * Represents a single alert modal in the OpenLMIS System.
 */
export default class AlertModal extends Modal {

    /**
     * Waits for the alert modal to be visible.
     */
    waitForIsVisible() {
        waitForDisplayed('.alert-modal');
    }
}
