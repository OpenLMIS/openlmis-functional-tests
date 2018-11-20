import Modal from './modal';
import Button from './button';

/**
 * Confirmation Modal object represents the related modal in OpenLMIS UI.
 */
class ConfirmationModal extends Modal {

    constructor(header, button) {
        super({
            header: header,
        });
        this.button = button;
    }

    /**
     * Get this confirmation button.
     */
    get confirmationButton() {
        return new Button(this.button, '//*[contains(@class, "modal-footer")]/button[contains(text(), ' + this.button + ')]');
    }

    /**
     * Confirm the confirmation modal.
     */
    confirm() {
        this.confirmationButton.click();
    }
}

export default new ConfirmationModal();
