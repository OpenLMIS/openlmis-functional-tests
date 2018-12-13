import Modal from '../../components/modal';

/**
 * Product Add Modal object represents the related view in OpenLMIS UI.
 */
class ProductAddModal extends Modal {

    constructor() {
        super({
            header: 'Add Products',
        });
    }

    /**
     * Check the checkbox option for a product with the given code.
     */
    selectProduct(code) {
        browser.element(`//td[text()="${code}"]/preceding-sibling::td/label/input[@type="checkbox"]`).click();
    }
}

export default new ProductAddModal();
