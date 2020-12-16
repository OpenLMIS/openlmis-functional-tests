import Page from '../components/page';
import waitForDisplayed from '../support/action/waitForDisplayed';
import isVisible from '../support/check/isDisplayed';
import checkInURLPath from '../support/check/checkInURLPath';
import Action from '../components/action';
import clickElement from '../support/action/clickElement';

/**
 * Home Page object which user's land on and has navigation to further
 * functionality.
 */
class HomePage extends Page {
    /**
     * Get the navigation bar.
     */
    get navbar() {
        return browser.$('.navbar');
    }

    /**
     * Get this logout button.
     */
    get logout() {
        return browser.$('//header//button[1]');
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
        waitForDisplayed('.navbar');
    }

    /**
     * Is this page visibile?
     */
    isDisplayed() {
        checkInURLPath(false, '#!/home');
    }

    /**
     * Is in offline mode?
     */
    isOffline() {
        waitForDisplayed('.status-offline');
    }

    /**
     * Is in offline mode?
     */
    isOnline() {
        waitForDisplayed('.status-offline', true);
    }

    /**
     * Checks whether specific tab is not available in navigation under given parent.
     */
    checkIfScreenIsNotVisibleInNavbar(tabName, parent) {
        const parentSelector = `//a[normalize-space(text())="${parent}"]`;
        waitForDisplayed(parentSelector);
        clickElement('click', parentSelector, parentSelector);
        const tabSelector = `${parentSelector}/parent::*//a[normalize-space(text())="${tabName}"]`;
        isVisible(tabSelector, true);
    }

    /**
     * Clicks on the tab in navigation bar
     */
    clickTabInNavbar(tabName) {
        const selector = `//a[normalize-space(text())="${tabName}"]`;
        this.waitForIsVisible(selector);
        clickElement('click', selector, selector);
    }
}

export default new HomePage();
