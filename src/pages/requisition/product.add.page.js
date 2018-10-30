import Page from '../page';
import waitForVisible from '../../support/action/waitForVisible';
import fillInput from '../../support/action/fillInput';

/**
 * Product Add Page object represents the related view in OpenLMIS UI.
 */
class ProductAddPage extends Page {

    /**
     * Wait for this page to be visible.
     */
    waitForIsVisible() {
        waitForVisible('//*[normalize-space(text())="Add Products"]');
    }

    /**
     * Check the checkbox option.
     */
    markCheckbox(code) {
        browser.element('//td[text()="' + code + '"]/preceding-sibling::td/label/input[@type="checkbox"]').click();
    }
}

export default new ProductAddPage();
