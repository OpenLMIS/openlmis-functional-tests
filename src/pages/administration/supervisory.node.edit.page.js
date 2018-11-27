import Page from '../../components/page';
import ConfirmationModal from '../../components/confirmation-modal';
import waitForVisible from '../../support/action/waitForVisible';
import chooseSelectOption from '../../support/action/chooseSelectOption';
import Button from '../../components/button';

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
        // Workaround for an issue with rendering a list of available options for this select.
        // Without it the list is rendered below the select instead of above it. Because of that,
        // a test can not select an option based on the name.
        this.scrollToBottom();
        this.scrollToTop();
        this.scrollToBottom();

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

        this.scrollToBottom();
        chooseSelectOption('Supervisory Node', nodeName, `${prefix}::*`);
        new Button('Add', `${prefix}::section[1]//child::button[text()="Add"]`).click();
    }

    removeNode(sectionName, nodeName, buttonLabel, modal) {
        const selector = `//label[text()="${sectionName}"]` +
            '/following-sibling::*' +
            `//td[text()="${nodeName}"]` +
            '/following-sibling::td' +
            `//button[text()="${buttonLabel}"]`;

        this.scrollToBottom();
        browser.element(selector).click();

        modal.confirm();
    }

    scrollToTop() {
        browser.execute(() => $('html, body').scrollTop(0));
    }

    scrollToBottom() {
        browser.execute(() => $('html, body').scrollTop($(document).height()));
    }

    waitForNode(sectionName, nodeName, hidden) {
        waitForVisible(
            `//label[text()="${sectionName}"]/following-sibling::*//td[text()="${nodeName}"]`,
            hidden
        );
    }
}

export default new SupervisoryNodeEditPage();
