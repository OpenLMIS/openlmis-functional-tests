import Button from '../../components/button';
import Modal from '../../components/modal';
import getFullMonthName from '../../support/lib/getFullMonthName';
import RequisitionStatusMessage from '../../components/requisition-status-message';
import getRequisitionStatusMessageSelector from '../../support/lib/getRequisitionStatusMessageSelector';

/**
 * Requisition History Modal object represents the related view in OpenLMIS UI.
 */
class RequisitionHistoryModal extends Modal {

    constructor() {
        super({
            header: 'Requisition History',
        });
    }

    /**
     * Returns requisition history modal close button.
     */
    get closeModalButton(){
        return new Button(null, `//*[contains(@class, "modal")]/button[contains(@class, "close")]`);
    }

    /**
     * Closes requisition history modal.
     */
    closeModal() {
        this.closeModalButton.click();
    }

    /**
     * Check if comment is visible in the history.
     *
     * @param {string} header the comment header
     * @param {string} author the comment author
     * @param {string} comment the comment text
     */
    checkIfCommentIsVisibleInHistory(header, author, comment){
        const today = new Date();
        const authorAndDate = author + ' on ' + getFullMonthName(today.getMonth()) + ' ' + today.getDate() + ', ' + today.getFullYear();
        new RequisitionStatusMessage(
            header,
            authorAndDate,
            "//div[contains(@class, 'modal-content')]//*" + getRequisitionStatusMessageSelector(header, authorAndDate, comment)
        );
    }

}

export default new RequisitionHistoryModal();
