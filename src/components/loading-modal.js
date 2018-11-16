import waitForVisible from '../support/action/waitForVisible';

class LoadingModal {

    waitForHide() {
        browser.pause(700);
        waitForVisible('.loading-modal', true);
    }

}

export default new LoadingModal();
