import Button from './button';

/**
 * Represents a single modal button in the OpenLMIS System.
 */
export default class ModalButton extends Button {

    constructor(label) {
        super(
            label,
            `//*[contains(@class, "modal")]/button[contains(text(), ${label})]`
        );
    }
}
