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

    addChildNode(name) {
        this.addNode('Child Nodes', name);
    }

    removeChildNode(name) {
        this.removeNode('Child Nodes', name, 'Remove Child Node', this.removeChildNodeModal);
    }

    waitForChildNode(name, hidden) {
        this.waitForNode('Child Nodes', name, hidden);
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
