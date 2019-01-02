import Page from '../../components/page';
import waitForVisible from '../../support/action/waitForVisible';
import chooseSelectOption from '../../support/action/chooseSelectOption';
import Button from '../../components/button';
import Action from '../../components/action';

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
}

export default new InitiateRequisitionPage();
