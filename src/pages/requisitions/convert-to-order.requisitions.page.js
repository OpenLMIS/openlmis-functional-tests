import Page from '../../components/page';
import waitForVisible from '../../support/action/waitForVisible';
import Table from '../../components/table';
import ConfirmationModal from '../../components/confirmation-modal';

/**
 * Convert Requisitions to Order Page object represents the related view in OpenLMIS UI.
 */
class ConvertRequisitionsPage extends Page {

    constructor() {
        super({
            header: 'Convert Requisitions to Order',
            uri: 'requisitions/convertToOrder',
            navParent: 'Requisitions',
            navChild: 'Convert to Order',
        });
    }

    get convertRequisitionsTable() {
        return new Table();
    }

    get convertRequisitionConfirmationModal() {
        return new ConfirmationModal({
            header: 'Are you sure you want to convert this R&R(s) to order(s)?',
            confirmButtonLabel: 'OK'
        })
    }

    confirmConvert() {
        this.convertRequisitionConfirmationModal.confirm();
    }

    /**
     * Check the checkbox option for a requisition with the given program and period.
     */
    selectRequisition(program, period) {
        browser.element(`//td[text()="${program}"]/following-sibling::td[text()="${period}"]/preceding-sibling::td/label/input[@type="checkbox"]`).click();
    }

    openSelectDropdown(program, period) {
        this.convertRequisitionsTable.clickSelectInput([undefined, program, undefined, undefined, period], "Supplying depot");
    }

    addSupplyingDepot(program, period, option) {
        this.convertRequisitionsTable.selectOption([undefined, program, undefined, undefined, period], option, "Supplying depot");
    }

    removeSupplyingDepot(program, period) {
        this.convertRequisitionsTable.unselectOption([undefined, program, undefined, undefined, period], "Supplying depot");
    }

    waitForSupplyingDepotOption(option) {
        waitForVisible(`//span[contains(@class, "select2-container")]//li[normalize-space(text())="${option}"]`);
    }

    /**
     * Wait for the table to be visible.
     */
    waitForTable() {
        waitForVisible('//table/tbody/tr/td');
    }
}

export default new ConvertRequisitionsPage();
