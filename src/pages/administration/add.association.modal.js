import Modal from '../../components/modal';
import ModalButton from '../../components/modal-button';
import Table from '../../components/table';
import Button from '../../components/button';

import fillInput from '../../support/action/fillInput';
import chooseSelectOption from '../../support/action/chooseSelectOption';

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

    addFacility(name) {
        chooseSelectOption('Facility', name, '//label[text()="Facilities"]/following-sibling::*');
        this.addFacilityButton.click();
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
}

export default new AddAssociationModal();
