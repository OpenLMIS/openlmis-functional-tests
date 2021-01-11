import Page from '../components/page';
import Action from '../components/action';
import clickElement from '../support/action/clickElement';

/**
 * User Profile Page object represents the related view in OpenLMIS UI.
 */
class UserProfilePage extends Page {

    constructor() {
        super({
            header: 'User Profile',
            uri: 'profile/basicInformation',
        });
    }

    /*
     * Verifies that the pending verification node for the given email address exists on the screen.
     */
    verifyPendingVerificationNode(emailAddress) {
        browser.$(
            '/*[normalize-space(text())=' +
            `"The email address has been changed to ${emailAddress} and is pending verification"]`
        );
    }

    /**
     * Accesses the page using navigation. This is useful for testing whether page is accessible using the navigation.
     */
    navigateToPage() {
        const selector = '//*[contains(@class, "user-info")]/a';

        new Action(() => {
            clickElement('click', selector, selector);
        }).execute();
    }
}

export default new UserProfilePage();
