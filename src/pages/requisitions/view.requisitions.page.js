import Page from '../../components/page';
import waitForDisplayed from '../../support/action/waitForDisplayed';
import Button from '../../components/button';
import chooseSelectOption from '../../support/action/chooseSelectOption';
import Table from '../../components/table';
import Action from '../../components/action';
import scroll from '../../support/action/scroll';
import tableHorizontalScroll from '../../support/action/tableHorizontalScroll';
import getCheckIconSelectorInsideTable from '../../support/lib/getCheckIconSelectorInsideTable';

/**
 * View Requisitions Page object represents the related view in OpenLMIS UI.
 */
class ViewRequisitionsPage extends Page {

    constructor() {
        super({
            header: 'View Requisitions',
            uri: 'requisitions/view',
            navParent: 'Requisitions',
            navChild: 'View',
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
     * Select the given facility and click on "Search" button.
     *
     * @param {String} facility  Facility name.
     */
    searchForFacility(facility) {
        new Action(() => {
            chooseSelectOption('Facility', facility);
        }).execute();
        this.searchButton.click();
    }

    get viewRequisitionsTable() {
        return new Table();
    }

    /**
     * Click on 'View requisition' button for the given requisition.
     *
     * @param {String} program  Program name.
     * @param {String} period  Period name.
     * @param {String} status  Status name.
     */
    viewRequisitionWithStatus(program, period, status) {
        this.viewRequisitionsTable.click([program, undefined, period, undefined, undefined, undefined, status], 'View Requisition');
    }

    /**
     * Click on 'View requisition' button for the requisition with the given values.
     *
     * @param {String} program  Program name.
     * @param {String} period  Period name.
     * @param {String} dateInitiated  Date initiated.
     */
    viewRequisitionWithDateInitiated(program, period, dateInitiated) {
        this.viewRequisitionsTable.click([program, undefined, period, undefined, undefined, dateInitiated], 'View Requisition', 'Actions', false);
    }

    /**
     * Click on 'View requisition' button for the requisition with given status.
     *
     * @param {String} program  Program name.
     * @param {String} period  Period name.
     */
    viewRequisition(program, period) {
        this.viewRequisitionsTable.click([program, undefined, period], 'View Requisition');
    }

    /**
     * Checks if there is check icon in Offline column
     *
     * @param {String} program  Program name.
     * @param {String} period  Period name.
     * @param {String} columnName  Column name.
     */
    isOfflineCheckboxVisible(program, period, columnName) {
        const selector = getCheckIconSelectorInsideTable([program, period], columnName);
        this.scrollToTheRightOfTable();
        waitForDisplayed(selector, false);
    }

    waitForRequisition(program, period, hidden) {
        this.viewRequisitionsTable.waitFor([program, undefined, period], hidden);
    }

    /**
     * Wait for the table to be visible.
     */
    waitForTable() {
        waitForDisplayed('//table/tbody/tr/td');
    }

    isFilterPopoverVisible() {
        waitForDisplayed(`//div[contains(@class, 'popover')]//legend[normalize-space(text())='Date initiated']`);
    }

    scrollToTheRightOfTable() {
        tableHorizontalScroll('right');
    }

    scrollToBottom() {
        scroll('bottom');
    }
}

export default new ViewRequisitionsPage();