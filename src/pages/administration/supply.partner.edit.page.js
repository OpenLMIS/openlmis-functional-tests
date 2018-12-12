import Page from '../../components/page';
import ModalButton from '../../components/modal-button';
import Table from '../../components/table';
import Button from '../../components/button';

import fillInput from '../../support/action/fillInput';
import chooseSelectOption from '../../support/action/chooseSelectOption';

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
        return new Table('//table');
    }

    addFacility(name) {
        const prefix = '//label[text()="Facilities"]/following-sibling';

        chooseSelectOption('Facility', name, `${prefix}::*`);
        new Button('Add', `${prefix}::section[1]//child::button[text()="Add"]`).click();
    }

    addProduct(code) {
        new Button(
            'Add Products',
            '//label[text()="Products"]/following-sibling::section[1]//child::button[text()="Add Products"]')
            .click();

        fillInput('Search Product', code);

        browser
            .element('//*[contains(@id, "productForm")]//td[1]//input[contains(@type, "checkbox")]')
            .click();

        new Button('Add Products', '//button[contains(@form, "productForm")]').click();
    }

    removeProduct(code) {
        new Table('//label[text()="Products"]//following-sibling::*//table').click([undefined, code], 3, 'Remove');
    }

    confirmAddAssociation() {
        new ModalButton('Add Association').click();
    }

    confirmUpdateAssociation() {
        new ModalButton('Update Association').click();
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
