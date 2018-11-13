import Page from '../page';
import waitForVisible from '../../support/action/waitForVisible';

/**
 * Product Add Modal object represents the related view in OpenLMIS UI.
 */
class ProductAddModal extends Page {

    /**
     * Wait for this page to be visible.
     */
    waitForIsVisible() {
        waitForVisible('//*[normalize-space(text())="Add Products"]');
    }

    /**
     * Check the checkbox option.
     */
    selectProduct(code) {
        browser.element('//td[text()="' + code + '"]/preceding-sibling::td/label/input[@type="checkbox"]').click();
    }
}

export default new ProductAddModal();
