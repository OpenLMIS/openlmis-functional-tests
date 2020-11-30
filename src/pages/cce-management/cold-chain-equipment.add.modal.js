import Modal from '../../components/modal';
import Button from '../../components/button';
/**
 * Cold Chain Equipment Add Modal object represents the related view in OpenLMIS UI.
 */
class ColdChainEquipmentAddModal extends Modal {

    constructor() {
        super({
            header: 'Add New Cold Chain Equipment',
        });
    }

    /**
     * Check the checkbox option for a product with the given code.
     */
    selectProduct(code) {
        browser.$(`//td[text()="${code}"]/preceding-sibling::td/label/input[@type="checkbox"]`).click();
    }

    addProdButton(label,option) {
       browser.$(`//input[normalize-space(@value)="${label}"] | //button[normalize-space(text())="${option}"]`).click();

    }


 checkMyFacilityProgram (){

      browser.$("//table/tbody/tr[@class='ng-scope ng-isolate-scope'][2]/td[@class='ng-scope'][1]/label[@class='checkbox']").click();
    }
    /**
     * Closes modal to add new cold chain equipment.
     */
    clickAddProductsButton(label) {
        openSelectDropdownInsideModal(label);
    }

     /**
         * Opens Select Dropdown inside a modal
         */
    openSelectDropdownInsideModal(label) {
            const selector = getSelectDropdownSelector(label);
            browser.$(selector).click();
    }
}

export default new ColdChainEquipmentAddModal();
