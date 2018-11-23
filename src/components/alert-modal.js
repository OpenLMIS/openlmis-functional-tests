import Modal from './modal';
import ModalButton from './modal-button';
import waitForVisible from '../support/action/waitForVisible';

/**
 * Represents a single alert modal in the OpenLMIS System.
 */
export default class AlertModal extends Modal {

    constructor(config) {
        super(config);

        if (config) {
            this.closeButtonLabel = config.closeButtonLabel || 'Close';
        }
    }

    /**
     * Get this close button.
     */
    get closeButton() {
        return new ModalButton(this.closeButtonLabel);
    }

    /**
     * Close the alert modal.
     */
    close() {
        this.closeButton.click();
    }

    /**
     * Waits for the alert modal to be visible.
     */
    waitForIsVisible() {
        waitForVisible('.alert-modal');
    }
}
