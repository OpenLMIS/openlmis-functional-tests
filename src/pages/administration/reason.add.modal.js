import waitForDisplayed from '../../support/action/waitForDisplayed';
import Modal from '../../components/modal';

/**
 * Reason Add Modal object represents the related view in OpenLMIS UI.
 */
class ReasonAddModal extends Modal {

    constructor() {
        super({
            header: 'Add New Reason',
        });
    }

    /**
     * Wait for the assignment to be added.
     */
    waitForAssignment(program, facilityType) {
        waitForDisplayed(
            `//td[text()="${program}"]` +
            `/following-sibling::td[text()="${facilityType}"]`
        );
    }
}

export default new ReasonAddModal();
