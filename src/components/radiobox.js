import Input from './input';

import getRadioboxSelector from '../support/lib/getRadioboxSelector';

/**
 * Represents a single checkbox in the OpenLMIS System.
 */
export default class Radiobox extends Input {

    constructor(label, option, selector = getRadioboxSelector(label, option)) {
        super(label, selector);
    }

}
