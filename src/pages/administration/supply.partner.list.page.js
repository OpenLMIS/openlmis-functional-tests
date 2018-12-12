import Page from '../../components/page';
import Button from '../../components/button';
import waitForVisible from '../../support/action/waitForVisible';

/**
 * Supply Partner List Page object represents the related view in OpenLMIS UI.
 */
class SupplyPartnerListPage extends Page {

    constructor() {
        super({
            header: 'Supply Partners',
            uri: 'administration/supplyPartners',
            navParent: 'Administration',
            navChild: 'Supply Partners',
        });
    }

    /**
     * Wait for the supply partner to be visible in the table.
     */
    waitForSupplyPartner(code, name, hidden) {
        waitForVisible(
            `//td[text()="${code}"]/following-sibling::td[text()="${name}"]`,
            hidden
        );
    }

    clickEdit(code) {
        new Button(
            'Edit',
            `//td[normalize-space(text())="${code}"]/following-sibling::td/button[text()="Edit"]`
        ).click();
    }

    clickAddSupplyPartner() {
        new Button('Add Supply Partner').click();
    }
}

export default new SupplyPartnerListPage();
