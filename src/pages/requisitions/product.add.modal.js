import Modal from '../../components/modal';
import Button from '../../components/button';

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
        browser.$(`//td[text()="${code}"]/preceding-sibling::td/label/input[@type="checkbox"]`).click();
    }

    get addProductsButton() {
        return new Button('Add Products');
    }

    /**
     * Closes modal to add new product.
     */
    clickAddProductsButton() {
        this.addProductsButton.click();
    }
}

export default new ProductAddModal();
