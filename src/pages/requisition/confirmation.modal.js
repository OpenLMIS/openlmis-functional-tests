import Page from '../page';
import waitForVisible from '../../support/action/waitForVisible';
import Action from '../../components/action';

/**
 * Confirmation Modal object represents the related modal in OpenLMIS UI.
 */
class ConfirmationModal extends Page {

    /**
     * Authorize the confirmation modal
     */
    confirmAuthorize() {
        waitForVisible('//*[normalize-space(text())="Are you sure you want to authorize this R&R?"]');
        new Action(
            () => browser.element('//*[contains(@class, "modal-footer")]/button[contains(text(), "Authorize")]').click()
        ).execute();
    }
}

export default new ConfirmationModal();
