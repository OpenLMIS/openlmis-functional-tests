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

    get physicalInventoryOccurredDateModal() {
        return new ConfirmationModal({
            header: 'Choose Occurred date'
        });
    }

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

    confirmPhysicalInventoryOccurredDateModal() {
        new Button(
            'Confirm',
            `//*[contains(@class, "modal")]/input[normalize-space(@value)="Confirm"]`,
            false
        ).click();
    }

    selectPhysicalInventoryOccurredDate(date) {
        return this.occurredDateDatePicker.value = date;
    }

    confirmPrintModal() {
        this.printModal.confirm();
    }

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
