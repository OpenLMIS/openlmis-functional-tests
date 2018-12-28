import Page from '../../components/page';
import waitForVisible from '../../support/action/waitForVisible';
import chooseSelectOption from '../../support/action/chooseSelectOption';
import Table from '../../components/table';
import Button from '../../components/button';
import Action from '../../components/action';

/**
 * Convert Requisitions to Order Page object represents the related view in OpenLMIS UI.
 */
class ViewOrdersPage extends Page {

    constructor() {
        super({
            header: 'View Orders',
            uri: 'orders/view',
            navParent: 'Orders',
            navChild: 'View Orders',
        });
    }

    get viewOrdersTable() {
        return new Table();
    }

    get searchButton() {
        return new Button('Search');
    }

    /**
     * Select the given supplying facility and click on "Search" button.
     *
     * @param {String} supplyingFacility  Supplying Facility name.
     */
    searchForSupplyingFacility(supplyingFacility) {
        new Action(() => {
            chooseSelectOption('Supplying facility', supplyingFacility);
        }).execute();
        this.searchButton.click();
    }

    /**
     * Wait for the program and period to be visible in the table.
     */
    waitForOrder(program, period, hidden) {
        this.viewOrdersTable.waitFor([program, period], hidden);
    }
}

export default new ViewOrdersPage();
