import Page from '../../components/page';
import Table from '../../components/table';
import Input from '../../components/input';
import Action from '../../components/action';

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
        this.associationTable.click([program, supervisoryNode], 'Edit Association');
    }

    viewFaciliesFor(program, supervisoryNode) {
        this.associationTable.click([program, supervisoryNode], 'View', 'Facilities');
    }

    viewProductsFor(program, supervisoryNode) {
        this.associationTable.click([program, supervisoryNode], 'View', 'Products');
    }

    removeAssociation(program, supervisoryNode) {
        this.associationTable.click([program, supervisoryNode], 'Remove');
    }

    waitForAssociation(program, supervisoryNode, hidden) {
        this.associationTable.waitFor([program, supervisoryNode], hidden);
    }
}

export default new SupplyPartnerEditPage();
