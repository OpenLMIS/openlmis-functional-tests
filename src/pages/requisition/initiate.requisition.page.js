import Page from '../page';
import waitForVisible from '../../support/action/waitForVisible';

/**
 * Initiate Requisition Page object represents the related view in OpenLMIS UI.
 */
class InitiateRequisitionPage extends Page {

    /**
     * Wait for this page to be visible.
     */
    waitForIsVisible() {
        waitForVisible('.navbar');
    }

    /**
     * Open the view requisitions page.
     */
    open() {
        browser.execute(() => $('.navbar a:contains("Requisition")').parent().find('a:contains("Create/Authorize")').click());
    }

    /**
     * Is this page visibile?
     */
    isVisible() {
        checkInURLPath(false, '#!/requisitions/initiate');
    }

    /**
     * Wait for the table to be visible.
     */
    waitForTable() {
        this.waitForLoadingModalToFade();
        waitForVisible('table tr td');
    }
}

export default new InitiateRequisitionPage();
