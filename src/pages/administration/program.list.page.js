import Page from '../../components/page';
import Button from '../../components/button';
import waitForDisplayed from '../../support/action/waitForDisplayed';

/**
 * Program List Page object represents the related view in OpenLMIS UI.
 */
class ProgramListPage extends Page {

    constructor() {
        super({
            header: 'Programs',
            uri: 'administration/programs',
            navParent: 'Administration',
            navChild: 'Programs',
        });
    }

    /**
     * Wait for program to be visible in the table.
     */
    waitForProgram(name) {
        waitForDisplayed(`//td[text()="${name}"]`);
    }

    /**
     * Click edit button for given program.
     */
    clickEditProgram(name) {
        new Button(
            'Edit',
            `//td[normalize-space(text())="${name}"]/following-sibling::td/button[text()="Edit"]`)
            .click();
    }


}

export default new ProgramListPage();
