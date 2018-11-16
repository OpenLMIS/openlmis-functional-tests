import Action from './action';
import getButtonSelector from '../support/lib/getButtonSelector';

export default class Button {

    constructor(label) {
        this.label = label;
    }

    click() {
        new Action(() => browser.element(getButtonSelector(this.label)).click()).execute();
    }
}
