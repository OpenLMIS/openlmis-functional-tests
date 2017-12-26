import Page from './page';
import waitForVisible from '../support/action/waitForVisible';

/**
 * Login page / modal
 */
class LoginPage extends Page {
    /**
     * Get the Username input
     */
    get username() {
        return browser.element('#login-username');
    }

    /**
     * Set the username in the username field.
     * @param {String} username the user's name to set.
     */
    set username(username) {
        this.username.setValue(username);
    }

    /**
     * Get the password input field.
     */
    get password() {
        return browser.element('#login-password');
    }

    /**
     * Set the password in the password field.
     * @param {String} password the password to set.
     */
    set password(password) {
        this.password.setValue(password);
    }

    /**
     * Get the Submit button.
     */
    get submitButton() {
        return browser.element("//form//input[@type='submit']");
    }

    /**
     * Get the form.
     */
    get form() {
        return browser.element('//form');
    }

    /**
     * Click the submit button to login.
     */
    clickSubmit() {
        this.submitButton.click();
    }

    /**
     * Press the enter key on the keyboard when the login form has focus.
     */
    pressEnterInForm() {
        this.password.addValue('Enter');
    }

    /**
     * Open this page/modal.
     */
    open() {
        super.open('/#!/login');
    }

    /**
     * Wait for this page/modal to be visisble.
     */
    waitForIsVisible() {
        waitForVisible('.auth-modal');
    }
}

export default new LoginPage();
