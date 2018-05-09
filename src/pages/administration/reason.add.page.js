import Page from '../page';
import waitForVisible from '../../support/action/waitForVisible';

/**
 * Reason Add Page object represents the related view in OpenLMIS UI.
 */
class ReasonAddPage extends Page {

    /**
     * Wait for this page to be visible.
     */
    waitForIsVisible() {
        waitForVisible('//*[normalize-space(text())="Add New Reason"]');
    }

    /**
     * Wait for the assignment to be added.
     */
    waitForAssignment(program, facilityType) {
        waitForVisible('//td[text()="' + program + '"]/following-sibling::td[text()="' + facilityType + '"]');
    }
}

export default new ReasonAddPage();
