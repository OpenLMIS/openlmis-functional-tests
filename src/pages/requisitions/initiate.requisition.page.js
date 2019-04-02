import Page from '../../components/page';
import waitForVisible from '../../support/action/waitForVisible';
import chooseSelectOption from '../../support/action/chooseSelectOption';
import Button from '../../components/button';
import Action from '../../components/action';
import Table from '../../components/table';

/**
 * Initiate Requisition Page object represents the related view in OpenLMIS UI.
 */
class InitiateRequisitionPage extends Page {

    constructor() {
        super({
            header: 'Initiate Report and Requisition',
            uri: 'requisitions/initiate',
        });
    }

    get searchButton() {
        return new Button('Search');
    }

    get proceedButton() {
        return new Button('Proceed');
    }

    get periodTable() {
        return new Table();
    }

    /**
     * Searches for requisitions for the given program.
     *
     * @param {string} program  the name of the program
     */
    searchForProgram(program) {
        new Action(() => {
            chooseSelectOption('Program', program);
        }).execute();
        this.searchButton.click();
    }

    /**
     * Clicks the first proceed button. Will result in opening Requisition View screen.
     */
    clickProceedButton() {
        this.proceedButton.click();
    }

    /**
     * Wait for the table to be visible.
     */
    waitForTable() {
        waitForVisible('table');
    }


    /**
     * Wait for period.
     *
     * @param {String} period  Period.
     * @param {String} hidden  True if should not be displayed.
     */    
    waitForPeriod(period, hidden) {
        this.periodTable.waitFor([period], hidden);
    }


    /**
     * Check whether select supervised facility is disabled.
     */
    isSelectSupervisedFacilityPossible() {
        const supervisedFacilitySelector = "//openlmis-facility-program-select/fieldset[contains(@class, 'form-group ng-scope')][1]//label[contains(@class, 'radio ng-binding')][2]//input[@disabled = 'disabled']";
        var isDisabled = browser.element(supervisedFacilitySelector).isExisting();
        return !isDisabled;
    }
}

export default new InitiateRequisitionPage();
