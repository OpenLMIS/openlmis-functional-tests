import Modal from './modal';
import waitForVisible from '../support/action/waitForVisible';

/**
 * Represents a single alert modal in the OpenLMIS System.
 */
export default class AlertModal extends Modal {

    /**
     * Waits for the alert modal to be visible.
     */
    waitForIsVisible() {
        waitForVisible('.alert-modal');
    }
}
