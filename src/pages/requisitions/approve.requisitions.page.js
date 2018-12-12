import Page from '../../components/page';
import waitForVisible from '../../support/action/waitForVisible';

/**
 * Approve Requisitions Page object represents the related view in OpenLMIS UI.
 */
class ApproveRequisitionsPage extends Page {

    constructor() {
        super({
            header: 'Approve Requisitions',
            uri: 'requisitions/approvalList',
            navParent: 'Requisitions',
            navChild: 'Approve'
        });
    }

    /**
     * Click on 'View requisition' button for the given requisition.
     * 
     * @param {String} program  Program name.
     * @param {String} period  Period name.
     */
    viewRequisitionToApprove(program, programColumn, period, periodColumn) {
        const programColumnId = this.getColumnId(programColumn) + 1;
        const periodColumnId = this.getColumnId(periodColumn) + 1;
        browser.execute(function(program, programColumnId, period, periodColumnId) {
            $('table tr')
                .filter((index, element) => {
                    var that = $(element),
                        programCell = that.find(`td:nth-child(${programColumnId})`).text(),
                        periodCell = that.find(`td:nth-child(${periodColumnId})`).text();
                        
                    return program === programCell && period === periodCell;
                })
                .find('td:nth-child(11) button:nth-child(1)')
                .click();
        }, program, programColumnId, period, periodColumnId);
    }

    getColumnId(columnName) {
        return browser
            .execute(name => $(`th:contains('${name}')`).index(), columnName)
            .value;
    }

    /**
     * Wait for the table to be visible.
     */
    waitForTable() {
        waitForVisible('//table/tbody/tr/td');
    }

    /**
     * Get the Total requisition cost.
     */
    getTotalCost() {
        const selector = '//dd';
        browser.scroll(selector);
        browser.pause(1000);
        return browser.element(selector).getText();
    }
}

export default new ApproveRequisitionsPage();