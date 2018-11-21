import Page from '../../components/page';
import waitForVisible from '../../support/action/waitForVisible';

/**
 *  Products List Page object represents the related view in OpenLMIS UI.
 */
class ProductListPage extends Page {

    /**
     * Wait for this page to be visible.
     */
    waitForIsVisible() {
        waitForVisible('//button[contains(text(), "Add Product")]');
    }

    /**
     * Wait for the product to be visible in the table.
     */
    waitForAddedProducts(code, product) {
        waitForVisible(
            `//td[text()="${code}"]` +
            `/following-sibling::td[text()="${product}"]`
        );
    }
}

export default new ProductListPage();