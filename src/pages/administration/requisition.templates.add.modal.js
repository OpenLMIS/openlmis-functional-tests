import Modal from '../../components/modal';
import Table from '../../components/table';
import Button from '../../components/button';
import chooseSelectOption from '../../support/action/chooseSelectOption';
import getSelectDropdownSelector from '../../support/lib/getSelectDropdownSelector';
import Action from '../../components/action';

/**
 * Requisition Template Add Modal object represents the related view in OpenLMIS UI.
 */
class RequisitionTemplateAddModal extends Modal {

    constructor() {
        super({
            header: 'Add Requisition Template',
            confirmButtonLabel: 'Create Template'
        });
    }

    /**
     * Get Add Facility Type button.
     */
    get addFacilityTypeButton() {
        return new Button('Add Facility Type');
    }

    /**
     * Get Create button.
     */
    get confirmationButton() {
        return new Button('Create');
    }

    /**
     * Get facility types table.
     */
    get facilityTypesTable() {
        return new Table('//*[contains(@class, "modal-body")]//table');
    }
    
    /**
     * Adds facility type to the table.
     */
    addFacilityType(facilityType) {
        new Action(() => {
            chooseSelectOption('Facility Type', facilityType);
        }).execute();
        this.addFacilityTypeButton.click();
    }

    /**
     * Removes facility type from the table.
     */
    removeFacilityType(facilityTypeName) {
        this.facilityTypesTable.click([facilityTypeName], 'Remove');
    }

    /**
     * Confirm adding new requisition template.
     */
    confirm() {
        this.confirmationButton.waitForIsVisible();
        this.confirmationButton.click();
    }

    /**
     * Checks if facility type is present in the table.
     */
    isFacilityTypePresent(facilityTypeName) {
        return browser.element(`//*[contains(@class, "modal-body")]//table/tbody/*/td[normalize-space(text())='${facilityTypeName}']`).isVisible();
    }

    /**
     * Check whether the given dropdown is enabled.
     */
    isDropdownEnabled(label) {
        const selector = getSelectDropdownSelector(label);
        return browser.element(selector).isEnabled();
    }

    /**
     * Checks if form in modal contains 'is-invalid' class.
     */
    isFieldInvalid(label) {
        const className = browser.element(`//label[normalize-space(text())='${label}']/following-sibling::div`).getAttribute('class');
        return className.includes('is-invalid');
    }
}

export default new RequisitionTemplateAddModal();
