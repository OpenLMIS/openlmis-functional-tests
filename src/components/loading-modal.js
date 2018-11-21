import waitForVisible from '../support/action/waitForVisible';

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
        waitForVisible('.loading-modal', true);
        browser.pause(100);
        waitForVisible('.fade', true);
    }

}

export default new LoadingModal();
