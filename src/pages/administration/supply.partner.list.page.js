import Page from '../../components/page';
import Button from '../../components/button';
import Table from '../../components/table';

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

    get table() {
        return new Table();
    }

    get addSupplyPartnerButton() {
        return new Button('Add Supply Partner');
    }

    /**
     * Wait for the supply partner to be visible in the table.
     */
    waitForSupplyPartner(code, name, hidden) {
        this.table.waitFor([code, name], hidden);
    }

    clickEdit(code) {
        this.table.click([code], 'Edit');
    }

    clickAddSupplyPartner() {
        this.addSupplyPartnerButton.click();
    }
}

export default new SupplyPartnerListPage();
