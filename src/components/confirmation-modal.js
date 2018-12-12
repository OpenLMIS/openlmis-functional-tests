import Modal from './modal';
import ModalButton from './modal-button';

/**
 * Confirmation Modal object represents the related modal in OpenLMIS UI.
 */
export default class ConfirmationModal extends Modal {

    constructor(config) {
        super(config);

        if (config) {
            this.confirmButtonLabel = config.confirmButtonLabel;
            this.cancelButtonLabel = config.cancelButtonLabel || 'Cancel';
        }
    }

    /**
     * Get this confirmation button.
     */
    get confirmationButton() {
        return new ModalButton(this.confirmButtonLabel);
    }

    /**
     * Get this cancel button.
     */
    get cancelButton() {
        return new ModalButton(this.cancelButtonLabel);
    }

    /**
     * Confirm the confirmation modal.
     */
    confirm() {
        this.confirmationButton.click();
    }

    /**
     * Cancel the confirmation modal.
     */
    cancel() {
        this.cancelButton.click();
    }
}
