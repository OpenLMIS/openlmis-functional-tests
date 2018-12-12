import Page from '../../components/page';
import Table from '../../components/table';

import fillInput from '../../support/action/fillInput';

/**
 * Supply Partner Edit Page object represents the related view in OpenLMIS UI.
 */
class SupplyPartnerEditPage extends Page {

    constructor() {
        super({
            header: 'Edit Supply Partner',
        });
    }

    get associationTable() {
        return new Table();
    }

    editAssociation(program, supervisoryNode) {
        this.associationTable.click([program, supervisoryNode], 5, 'Edit Association');
    }

    viewFaciliesFor(program, supervisoryNode) {
        this.associationTable.click([program, supervisoryNode], 3, 'View');
    }

    viewProductsFor(program, supervisoryNode) {
        this.associationTable.click([program, supervisoryNode], 4, 'View');
    }

    removeAssociation(program, supervisoryNode) {
        this.associationTable.click([program, supervisoryNode], 5, 'Remove');
    }

    waitForFacility(name) {
        fillInput('Search', name);
        new Table('//*[contains(@class, "view-items-modal")]//table').waitFor([name]);
    }

    waitForProduct(code) {
        fillInput('Search', code);
        new Table('//*[contains(@class, "view-items-modal")]//table').waitFor([code]);
    }

    waitForAssociation(program, supervisoryNode, hidden) {
        this.associationTable.waitFor([program, supervisoryNode], hidden);
    }
}

export default new SupplyPartnerEditPage();
