import Page from '../components/page';
import waitForVisible from '../support/action/waitForVisible';
import checkInURLPath from '../support/check/checkInURLPath';
import Action from '../components/action';

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
        new Action(() => super.open('/#!/home')).execute();
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

    /**
     * Is in offline mode?
     */
    isOffline() {
        waitForVisible('.status-offline');
    }

    /**
     * Is in offline mode?
     */
    isOnline() {
        waitForVisible('.status-offline', true);
    }

    /**
     * Checks whether specific tab is not available in navigation under given parent.
     */
    checkIfScreenIsNotVisibleInNavbar(tabName, parent) {
        const parentSelector = `//a[normalize-space(text())="${parent}"]`;
        waitForVisible(parentSelector);
        browser.click(parentSelector);
        const tabSelector = `${parentSelector}/parent::*//a[normalize-space(text())="${tabName}"]`;
        waitForVisible(tabSelector, true);
    }

    /**
     * Clicks on the tab in navigation bar
     */
    clickTabInNavbar(tabName) {
        const selector = `//a[normalize-space(text())="${tabName}"]`;
        this.waitForIsVisible(selector);
        browser.click(selector);
    }
}

export default new HomePage();
