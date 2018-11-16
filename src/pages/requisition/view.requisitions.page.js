import Page from '../page';
import waitForVisible from '../../support/action/waitForVisible';
import Button from '../../components/button';

/**
 * View Requisitions Page object represents the related view in OpenLMIS UI.
 */
class ViewRequisitionsPage extends Page {

    constructor() {
        super({
            header: 'View Requisitions',
            uri: 'requisitions/view'
        });
    }

    /**
     * Get this search button.
     */
    get searchButton() {
        return new Button('Search');
    }

    /**
     * Click to search.
     */
    clickSearch() {
        this.searchButton.click();
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
}

export default new ViewRequisitionsPage();