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
    viewRequisition(program, period) {
        browser.execute(function(program, period) {
            $('table tr')
                .filter((index, element) => {
                    var that = $(element),
                        programCell = that.find('td:nth-child(1)').text(),
                        periodCell = that.find('td:nth-child(3)').text();

                    return program === programCell && period === periodCell;
                })
                .find('td:nth-child(10) button:nth-child(1)')
                .click();
        }, program, period);
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