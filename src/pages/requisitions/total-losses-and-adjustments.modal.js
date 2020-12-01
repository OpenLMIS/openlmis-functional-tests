import waitForDisplayed from '../../support/action/waitForDisplayed';
import Modal from '../../components/modal';
import Link from '../../components/link';
import Select from '../../components/select';

/**
 * Total Losses and Adjustments Modal object represents the related view in OpenLMIS UI.
 */
class TotalLossesAndAdjustmentsModal extends Modal {

    constructor() {
        super({
            header: 'Losses and adjustments',
        });
    }

    /**
     * Opens Total losses and adjustments modal
     * 
     * @param {string} product the name of the product
     */
    clickIcon(product) {
        const selector = `//td[normalize-space(text())="${product}"]` +
            '//following-sibling::td//a[contains(@class, "icon-link")]';

        return new Link('', selector).click();
    }

    /**
     * Wait for the assignment to be added.
     */
    waitForAssignment(reason, quantity) {
        waitForDisplayed(
            `//td[text()="${reason}"]` +
            `/following-sibling::td//parent::div` +
            `//child::input[normalize-space(text()="${quantity}")]`
        );
    }

    /**
     * Get the Total value.
     */
    getTotalValue() {
        const selector = `//div[contains(@class, 'modal-body')]//dl//dd`;
        browser.scroll(selector);
        browser.pause(1000);
        return browser.$(selector).getText();
    }

    openSelectDropdown(label) {
        Select.openSelectDropdownInsideModal(label);
    }

    /**
     * Checks if the select option is visible on the dropdown list.
     */
    isOptionInsideDropdown(option) {
        const selector = `//option[contains(@label, '${option}')]`;
        let element = browser.$(selector);
        return element.isDisplayed();
    }
}

export default new TotalLossesAndAdjustmentsModal();
