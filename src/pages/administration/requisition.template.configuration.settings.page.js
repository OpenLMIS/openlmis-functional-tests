
import Page from '../../components/page';
import waitForDisplayed from '../../support/action/waitForDisplayed';
import scroll from '../../support/action/scroll';
import Table from '../../components/table';
import Button from '../../components/button';
import ConfirmationModal from '../../components/confirmation-modal';
import Action from '../../components/action';
import chooseSelectOption from '../../support/action/chooseSelectOption';

class RequisitionTemplateConfigurationSettingsPage extends Page {
    constructor() {
        super({
            header: 'Configure Template Settings',
        });
    }

    /**
     * Wait for this page to be visible.
     */
    waitForIsVisible() {
        scroll('top');
        waitForDisplayed('//h2[contains(normalize-space(text()), "Configure Template Settings")]');
    }

    /**
     * Returns a table with products to add to the physical inventory.
     */
    get facilityTypesTable() {
        return new Table();
    }

    /**
     * Removes facility type from the table.
     */
    removeFacilityType(facilityTypeName) {
        this.waitForTable();
        this.facilityTypesTable.click([facilityTypeName], 'Remove', 'Action');
    }

    /**
     * Checks if facility type is present in the table.
     */
    isFacilityTypePresent(facilityTypeName) {
        return browser.$(`//td[normalize-space(text())='${facilityTypeName}']`).isDisplayed();
    }
    /**
     * Checks if facility type is present in the dropdown.
     */
    isFacilityTypePresentInDropdown(facilityTypeName) {
        return browser.$(`//li[normalize-space(text())='${facilityTypeName}']`).isDisplayed();
    }

    /**
     * Get save confirmation button.
     */
    get saveButton() {
        return new Button('Save');
    }

    /**
     * Confirm adding new requisition template.
     */
    save() {
        this.saveButton.waitForIsVisible();
        this.saveButton.click();
    }

    /**
     * Get save confirmation modal.
     */
    get saveConfirmationModal() {
        return new ConfirmationModal({
            header: 'All changes to the requisition template columns and settings will only affect future initiated requisitions.',
            confirmButtonLabel: 'Save',
        });
    }

    /**
     * Confirm saving action.
     */
    confirmSave() {
        this.saveConfirmationModal.confirm();
    }

    /**
     * Get Add Facility Type button.
     */
    get addFacilityTypeButton() {
        return new Button('Add');
    }

    /**
     * Add facility type to the table.
     */
    addFacilityType(facilityType) {
        new Action(() => {
            chooseSelectOption('Facility Type', facilityType);
        }).execute();
        this.addFacilityTypeButton.click();
    }

    /**
     * Wait for the table to be visible.
     */
    waitForTable() {
        waitForDisplayed('//table/tbody/tr/td');
    }

}

export default new RequisitionTemplateConfigurationSettingsPage();
