import Page from '../components/page';
import waitForDisplayed from '../support/action/waitForDisplayed';
import Action from '../components/action';
import Button from '../components/button';

/**
 * Login page / modal
 */
class LoginPage extends Page {

    constructor() {
        super({
            uri: 'login',
        });
    }

    get submitButton() {
        return new Button('Sign In');
    }

    /**
     * Get the Username input
     */
    get username() {
        return browser.$('#login-username');
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
        return browser.$('#login-password');
    }

    /**
     * Set the password in the password field.
     * @param {String} password the password to set.
     */
    set password(password) {
        this.password.setValue(password);
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
        new Action(() => this.password.addValue('Enter')).execute();
    }

    /**
     * Wait for this page/modal to be visible.
     */
    waitForIsVisible() {
        waitForDisplayed('.auth-modal');
    }
}

export default new LoginPage();
