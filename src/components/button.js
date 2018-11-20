import Action from './action';
import getButtonSelector from '../support/lib/getButtonSelector';

export default class Button {

    constructor(label, path) {
        this.selector = path ? path : getButtonSelector(label);
    }

    click() {
        new Action(() => browser.element(this.selector).click()).execute();
    }
}
