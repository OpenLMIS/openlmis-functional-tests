import Page from '../../components/page';
import waitForDisplayed from '../../support/action/waitForDisplayed';

/**
 *  Products List Page object represents the related view in OpenLMIS UI.
 */
class ProductListPage extends Page {

    /**
     * Wait for this page to be visible.
     */
    waitForIsVisible() {
        waitForDisplayed('//button[contains(text(), "Add Product")]');
    }

    /**
     * Wait for the product to be visible in the table.
     */
    waitForAddedProducts(code, product) {
        waitForDisplayed(
            `//td[text()="${code}"]` +
            `/following-sibling::td[text()="${product}"]`
        );
    }
}

export default new ProductListPage();
