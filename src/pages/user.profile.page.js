import Page from '../components/page';

/**
 * User Profile Page object represents the related view in OpenLMIS UI.
 */
class UserProfilePage extends Page {

    constructor() {
        super({
            header: 'Basic Information',
            uri: 'profile/basicInformation',
        });
    }

    /*
     * Verifies that the pending verification node for the given email address exists on the screen.
     */
    verifyPendingVerificationNode(emailAddress) {
        browser.element(
            '/*[normalize-space(text())=' +
                `"The email address has been changed to ${emailAddress} and is pending verification"]`
        );
    }
}

export default new UserProfilePage();
