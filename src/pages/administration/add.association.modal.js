import Modal from '../../components/modal';
import ModalButton from '../../components/modal-button';
import Table from '../../components/table';
import Button from '../../components/button';
import Input from '../../components/input';

import chooseSelectOption from '../../support/action/chooseSelectOption';
import Action from '../../components/action';

/**
 * Add Association Modal object represents the related view in OpenLMIS UI.
 */
class AddAssociationModal extends Modal {

    constructor() {
        super({
            header: 'Add Association',
        });
    }

    get addFacilityButton() {
        return new Button(
            'Add',
            '//label[text()="Facilities"]/following-sibling::section[1]//child::button[text()="Add"]');
    }

    get productTable() {
        return new Table('//label[text()="Products"]//following-sibling::*//table');
    }

    addFacility(name) {
        chooseSelectOption('Facility', name, '//label[text()="Facilities"]/following-sibling::*');
        this.addFacilityButton.click();
    }

    addProduct(productCode) {
        new Button(
            'Add Products',
            '//label[text()="Products"]/following-sibling::section[1]//child::button[text()="Add Products"]')
            .click();

        new Action(() => {
            const search = new Input('Search Product');
            search.value = productCode;
        }).execute();

        browser
            .$('//*[contains(@id, "productForm")]//td[1]//input[contains(@type, "checkbox")]')
            .click();

        new Button('Add Products', '//button[contains(@form, "productForm")]').click();
    }

    removeProduct(productCode) {
        this.productTable.click([undefined, productCode], 'Remove');
    }

    confirmAddAssociation() {
        new ModalButton('Add Association').click();
    }

    confirmUpdateAssociation() {
        new ModalButton('Update Association').click();
    }
}

export default new AddAssociationModal();
