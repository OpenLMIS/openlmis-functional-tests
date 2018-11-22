import Page from '../../components/page';
import waitForVisible from '../../support/action/waitForVisible';

/**
 * Supply Partner List Page object represents the related view in OpenLMIS UI.
 */
class SupplyPartnerListPage extends Page {

    constructor() {
        super({
            header: 'Supply Partners',
            uri: 'administration/supplyPartners',
        });
    }

    /**
     * Wait for the supply partner to be visible in the table.
     */
    waitForSupplyPartner(code, name) {
        waitForVisible(
            `//td[text()="${code}"]/following-sibling::td[text()="${name}"]`
        );
    }
}

export default new SupplyPartnerListPage();
