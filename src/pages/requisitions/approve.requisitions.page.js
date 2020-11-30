import Page from '../../components/page';
import waitForDisplayed from '../../support/action/waitForDisplayed';
import Table from '../../components/table';

/**
 * Approve Requisitions Page object represents the related view in OpenLMIS UI.
 */
class ApproveRequisitionsPage extends Page {

    constructor() {
        super({
            header: 'Approve Requisitions',
            uri: 'requisitions/approvalList',
            navParent: 'Requisitions',
            navChild: 'Approve',
        });
    }

    get approveRequisitionsTable() {
        return new Table();
    }

    /**
     * Click on 'View requisition' button for the given requisition.
     *
     * @param {String} program  Program name.
     * @param {String} period  Period name.
     */
    viewRequisitionToApprove(program, period) {
        this.approveRequisitionsTable.click([program, undefined, period], 'View Requisition');
    }

    /**
     * Wait for the program and period to be visible in the table.
     */
    waitForRequisition(program, period, hidden) {
        this.approveRequisitionsTable.waitFor([program, period], hidden);
    }

    /**
     * Wait for the table to be visible.
     */
    waitForTable() {
        waitForDisplayed('//table/tbody/tr/td');
    }

    /**
     * Get the Total requisition cost.
     */
    getTotalCost() {
        const selector = '//dd';
        browser.scroll(selector);
        browser.pause(1000);
        return browser.$(selector).getText();
    }
}

export default new ApproveRequisitionsPage();
