import Page from './page';
import waitForVisible from '../support/action/waitForVisible';
import checkInURLPath from '../support/check/checkInURLPath';

/**
 * Home Page object which user's land on and has navigation to further
 * functionality.
 */
class HomePage extends Page {
    /**
     * Get the navigation bar.
     */
    get navbar() {
        return browser.element('.navbar');
    }

    /**
     * Get this logout button.
     */
    get logout() {
        return browser.element('//header//button[1]');
    }

    /**
     * Open the home page.
     */
    open() {
        super.open('/#!/home');
    }

    /**
     * Click to logout.
     */
    clickLogout() {
        this.logout.click();
    }

    /**
     * Wait for this page to be visible.
     */
    waitForIsVisible() {
        waitForVisible('.navbar');
    }

    /**
     * Is this page visibile?
     */
    isVisible() {
        checkInURLPath(false, '#!/home');
    }
}

export default new HomePage();
