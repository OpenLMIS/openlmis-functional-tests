import Page from '../../components/page';
import waitForVisible from '../../support/action/waitForVisible';
import Button from '../../components/button';

class RequisitionTemplatesPage extends Page {
    constructor() {
        super({
            header: 'Requisition Templates',
            uri: 'administration/templates',
            navParent: 'Administration',
            navChild: 'Requisition Templates',
        });
    }

    /**
     * Wait for program to be visible in the table.
     */
    waitForProgram(name) {
        waitForVisible(`//td[text()="${name}"]`);
    }

    /**
     * Click configure button for given program.
     */
    clickConfigureProgram(name) {
        const selector = `//td[normalize-space(text())="${name}"]/following-sibling::td/button[text()="Configure"]`;
        browser.scroll(selector);
        new Button(
            'Configure',
            selector).click();
    }
}

export default new RequisitionTemplatesPage();