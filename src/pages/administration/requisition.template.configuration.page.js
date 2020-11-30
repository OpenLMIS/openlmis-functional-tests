import Page from '../../components/page';
import ConfirmationModal from '../../components/confirmation-modal';
import waitForDisplayed from '../../support/action/waitForDisplayed';
import getSelectDropdownSelectorInTable from '../../support/lib/getSelectDropdownSelectorInTable';
import scrollToSelector from '../../support/action/scrollToSelector';
import scroll from '../../support/action/scroll';

class RequisitionTemplateConfigurationPage extends Page {
    
    /**
     * Wait for this page to be visible.
     */
    waitForIsVisible(templateName, programName) {
        scroll('top');
        waitForDisplayed(`//h2[contains(normalize-space(text()), "Configure ${templateName} for ${programName}")]`);
    }

    /**
     * Selects an option from the dropdown inside a table
     * 
     * @param {string} letter the letter linked with the chosen table row
     * @param {string} option the chosen option in the dropdown list
     */
    selectInputType(letter, option) {
        const selector = getSelectDropdownSelectorInTable([undefined, undefined, letter], "Source") + 
            `//parent::select//option[text()="${option}"]`;
        scrollToSelector(selector);
        browser.element(selector).click();
    }

    /**
     * Get save confirmation modal.
     */
    get saveConfirmationModal() {
        return new ConfirmationModal({
            header: 'All changes to the requisition template columns and settings will only affect future initiated requisitions.',
            confirmButtonLabel: 'Save',
        });
    }

    /**
     * Get save confirmation button.
     */
    confirmSave() {
        this.saveConfirmationModal.confirm();
    }
}

export default new RequisitionTemplateConfigurationPage();
