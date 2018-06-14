import Page from '../page';
import waitForVisible from '../../support/action/waitForVisible';
import getButtonSelector from "../../support/lib/getButtonSelector";

/**
 * User Profile Page object represents the related view in OpenLMIS UI.
 */
class UserProfilePage extends Page {

    /**
     * Open the user profile page.
     */
    open() {
        browser.execute(() => $('.user-info').find('a').click());
    }

    /**
     * Wait for this page to be visible.
     */
    waitForIsVisible() {
        waitForVisible(getButtonSelector('Update Profile'));
    }

    /*
     * Verifies that the pending verification node for the given email address exists on the screen.
     */
    verifyPendingVerificationNode(emailAddress) {
        browser.element('/*[normalize-space(text())="The email address has been changed to ' + emailAddress + ' and is pending verification"]')
    }
}

export default new UserProfilePage();
