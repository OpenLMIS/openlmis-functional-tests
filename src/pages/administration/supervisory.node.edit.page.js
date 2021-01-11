import Page from '../../components/page';
import ConfirmationModal from '../../components/confirmation-modal';
import waitForDisplayed from '../../support/action/waitForDisplayed';
import chooseSelectOption from '../../support/action/chooseSelectOption';
import Button from '../../components/button';
import scroll from '../../support/action/scroll';

/**
 * Supervisory Node Edit Page object represents the related view in OpenLMIS UI.
 */
class SupervisoryNodeEditPage extends Page {

    constructor() {
        super({
            header: 'Edit Supervisory Node',
        });
    }

    get removeChildNodeModal() {
        return new ConfirmationModal({
            confirmButtonLabel: 'Remove Child Node',
        });
    }

    get removePartnerNodeModal() {
        return new ConfirmationModal({
            confirmButtonLabel: 'Remove Partner Node',
        });
    }

    addChildNode(name) {
        this.addNode('Child Nodes', name);
    }

    removeChildNode(name) {
        this.removeNode('Child Nodes', name, 'Remove Child Node', this.removeChildNodeModal);
    }

    waitForChildNode(name, hidden) {
        this.waitForNode('Child Nodes', name, hidden);
    }

    addPartnerNode(name) {
        this.addNode('Partner Nodes', name);
    }

    removePartnerNode(name) {
        this.removeNode('Partner Nodes', name, 'Remove Partner Node', this.removePartnerNodeModal);
    }

    waitForPartnerNode(name, hidden) {
        this.waitForNode('Partner Nodes', name, hidden);
    }

    addNode(sectionName, nodeName) {
        const prefix = `//label[text()="${sectionName}"]/following-sibling`;

        chooseSelectOption('Supervisory Node', nodeName, `${prefix}::*`);
        scroll('bottom');
        new Button('Add', `${prefix}::section[1]//child::button[text()="Add"]`).click();
    }

    removeNode(sectionName, nodeName, buttonLabel, modal) {
        const selector = `//label[text()="${sectionName}"]` +
            '/following-sibling::*' +
            `//td[text()="${nodeName}"]` +
            '/following-sibling::td' +
            `//button[text()="${buttonLabel}"]`;

        scroll('bottom');
        new Button(buttonLabel, selector).click();

        modal.confirm();
    }

    waitForNode(sectionName, nodeName, hidden) {
        waitForDisplayed(
            `//label[text()="${sectionName}"]/following-sibling::*//td[text()="${nodeName}"]`,
            hidden
        );
    }
}

export default new SupervisoryNodeEditPage();
