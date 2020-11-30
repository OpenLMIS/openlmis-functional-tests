import waitForDisplayed from '../support/action/waitForDisplayed';

/**
 * Represents a loading modal in the OpenLMIS system.
 */
class LoadingModal {

    /**
     * Waits for the loading modal to fade. Takes the slight delay possible when opening loading modal (0.5s) into
     * consideration and deals with waiting for the fade animation to finish.
     */
    waitForHide() {
        browser.pause(700);
        waitForDisplayed('.loading-modal', true);
        browser.pause(100);
        waitForDisplayed('//div[contains(@class, "fade")]/div[contains(@class, "loading")]', true);
    }

}

export default new LoadingModal();
