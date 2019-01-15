import Page from '../../components/page';
import Table from '../../components/table';
import ConfirmationModal from '../../components/confirmation-modal';
import waitForVisible from '../../support/action/waitForVisible';
import DatePicker from '../../components/date-picker';
import Button from '../../components/button';

/**
 * Convert Requisitions to Order Page object represents the related view in OpenLMIS UI.
 */
class PhysicalInventoryPage extends Page {

    constructor() {
        super({
            uri: 'stockmanagement/physicalInventory',
            navParent: 'Stock Management',
            navChild: 'Physical inventory',
        });
    }

    /**
     * Returns a table with programs to start a physical inventory for.
     */
    get programTable() {
        return new Table();
    }

    /**
     * Get print physical inventory modal.
     */
    get printModal() {
        return new ConfirmationModal({
            header: 'Print this physical inventory?',
            confirmButtonLabel: 'Print',
            cancelButtonLabel: 'No'
        });
    }

    /**
     * Get Physical Inventory  modal.
     */
    get physicalInventoryOccurredDateModal() {
        return new ConfirmationModal({
            header: 'Choose Occurred date'
        });
    }

    /**
     * Get Physical Inventory Occurred Date datepicker.
     */
    get occurredDateDatePicker() {
        return new DatePicker('Date');
    }

    /**
     * Click on 'Start' button for the given program.
     *
     * @param {String} program  Program name.
     */
    startNewPhysicalInventory(program) {
        this.programTable.click([program], 'Start');
    }

    /**
     * Click 'Confirm' button without waiting for loading modal to hide.
     */
    confirmPhysicalInventoryOccurredDateModal() {
        new Button(
            'Confirm',
            `//*[contains(@class, "modal")]/input[normalize-space(@value)="Confirm"]`,
            false
        ).click();
    }

    /**
     * Select Physical Inventory Occurred Date on datepicker.
     * 
     * @param {String} date  Date to be selected.
     */
    selectPhysicalInventoryOccurredDate(date) {
        return this.occurredDateDatePicker.value = date;
    }

    /**
     * Click 'Print' button to print the physical inventory.
     */
    confirmPrintModal() {
        this.printModal.confirm();
    }

    /**
     * Click 'No' button in order to avoid printing a physical inventory.
     */
    cancelPrintModal() {
        this.printModal.cancel();
    }

    waitForPrintModal() {
        waitForVisible('//*[contains(@class,"modal")]' + 
        `/*[(self::p) and normalize-space(text())= "${this.printModal.header}"]`)
    }

    waitForPhysicalInventoryOccurredDateModal() {
        this.physicalInventoryOccurredDateModal.waitForIsVisible();
    }

    waitForIsVisible() {
        waitForVisible('//h2[contains(normalize-space(text()), "D002 - Depósito Distrital Lichinga - EPI")]');
    }
}

export default new PhysicalInventoryPage();
