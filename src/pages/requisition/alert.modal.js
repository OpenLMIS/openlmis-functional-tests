import Page from '../page';
import waitForVisible from '../../support/action/waitForVisible';

/**
 * Submit Requisition Page object represents the related view in OpenLMIS UI.
 */
class AlertModal extends Page {
    
    /**
     * Wait for this page to be visible.
     */
    waitForIsVisible() {
        waitForVisible('.alert-modal');
    }
}

export default new AlertModal();