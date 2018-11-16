import waitForVisible from '../../support/action/waitForVisible';
import Modal from '../../components/modal';

/**
 * Reason Add Page object represents the related view in OpenLMIS UI.
 */
class ReasonAddPage extends Modal {

    constructor() {
        super({
            header: 'Add New Reason',
        });
    }

    /**
     * Wait for the assignment to be added.
     */
    waitForAssignment(program, facilityType) {
        waitForVisible(
            `//td[text()="${program}"]` +
            `/following-sibling::td[text()="${facilityType}"]`
        );
    }
}

export default new ReasonAddPage();
