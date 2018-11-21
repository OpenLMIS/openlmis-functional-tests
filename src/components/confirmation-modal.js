import Modal from './modal';
import Button from './button';

/**
 * Confirmation Modal object represents the related modal in OpenLMIS UI.
 */
export default class ConfirmationModal extends Modal {

    constructor(header, buttonLabel) {
        super({
            header: header,
        });
        this.buttonLabel = buttonLabel;
    }

    /**
     * Get this confirmation button.
     */
    get confirmationButton() {
        return new Button(this.buttonLabel, '//*[contains(@class, "modal-footer")]/button[contains(text(), ' + this.buttonLabel + ')]');
    }

    /**
     * Confirm the confirmation modal.
     */
    confirm() {
        this.confirmationButton.click();
    }
}
