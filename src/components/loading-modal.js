import waitForVisible from '../support/action/waitForVisible';

class LoadingModal {

    waitForHide() {
        browser.pause(700);
        waitForVisible('.loading-modal', true);
        browser.pause(100);
        waitForVisible('.fade', true);
    }

}

export default new LoadingModal();
