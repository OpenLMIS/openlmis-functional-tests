import Action from './action';
import getButtonSelector from '../support/lib/getButtonSelector';

export default class Button {

    constructor(label, selector) {
        this.selector = selector ? selector : getButtonSelector(label);
    }

    click() {
        new Action(() => browser.element(this.selector).click()).execute();
    }
}
