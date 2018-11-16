import waitForVisible from '../support/action/waitForVisible';

export default class Modal {

    constructor(config) {
        if (config) {
            this.header = config.header;
            this.uri = config.uri;
        }
    }

    waitForIsVisible() {
        waitForVisible(`//*[contains(@class,"modal")]/*/h4[normalize-space(text())= "${this.header}"]`);
    }

}
