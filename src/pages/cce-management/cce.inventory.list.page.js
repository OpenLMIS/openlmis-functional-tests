import Page from '../../components/page';
import waitForVisible from '../../support/action/waitForVisible';
import chooseSelectOption from '../../support/action/chooseSelectOption';
import Table from '../../components/table';
import Button from '../../components/button';
import Action from '../../components/action';

/**
 * CCE Management Page object represents the related view in OpenLMIS UI.
 */
class ColdChainEquipmentInventoryListPage extends Page {

    constructor() {
        super({
            header: 'CCE Inventory',
            uri: 'cce/inventory',
            navParent: 'CCE Management',
            navChild: 'CCE Inventory',
        });
    }

    get ColdChainEquipmentInventoryTable() {
        return new Table();
    }

    get searchButton() {
        return new Button('Search');
    }

    checkMyFacilityProgram (){

      browser.element("//table/tbody/tr[@class='ng-scope ng-isolate-scope'][2]/td[@class='ng-scope'][1]/label[@class='checkbox']").click();
    }

    /**
      * Check if button is not visible
      *
      * @param {String} button the name of the button
      */
     checkIfButtonIsHidden(button) {
           const buttonSelector = `//*[contains(@class, "button-group")]/button[contains(text(), "${button}")]`;
           waitForVisible(buttonSelector, true);
     }

    /**
     * Select the given supplying facility and click on "Search" button.
     *
     * @param {String} supplyingFacility  Supplying Facility name.
     */
    searchForSupplyingFacility(supplyingFacility) {
        new Action(() => {
            chooseSelectOption('My Facility', supplyingFacility);
        }).execute();
    }

    /**
     * Wait for the program and period to be visible in the table.
     */
    waitForOrder(program, period, hidden) {
        this.ColdChainEquipmentInventoryTable.waitFor([program, period], hidden);
    }

}

export default new ColdChainEquipmentInventoryListPage();
