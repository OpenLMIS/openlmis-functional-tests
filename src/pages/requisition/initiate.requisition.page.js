import Page from '../page';
import waitForVisible from '../../support/action/waitForVisible';
import chooseSelectOption from '../../support/action/chooseSelectOption';
import Button from '../../components/button';

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

    searchForProgram(program) {
        chooseSelectOption('Program', program);
        this.searchButton.click();
    }

    clickProceedButton() {
        this.proceedButton.click();
    }

    /**
     * Wait for the table to be visible.
     */
    waitForTable() {
        waitForVisible('table');
    }
}

export default new InitiateRequisitionPage();
