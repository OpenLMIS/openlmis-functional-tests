import Page from '../page';
import waitForVisible from '../../support/action/waitForVisible';
import getButtonSelector from "../../support/lib/getButtonSelector";

/**
 * User Profile Page object represents the related view in OpenLMIS UI.
 */
class ReasonListPage extends Page {

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
}

export default new ReasonListPage();
