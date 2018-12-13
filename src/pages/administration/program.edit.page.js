import Page from '../../components/page';
import ConfirmationModal from '../../components/confirmation-modal';

/**
 * Program Edit Page object represents the related view in OpenLMIS UI.
 */
class ProgramEditPage extends Page {

    constructor() {
        super({
            header: 'Edit Program',
        });
    }

    /**
     * Get save confirmation modal.
     */
    get saveConfirmationModal() {
        return new ConfirmationModal({
            header: 'Do you want to save changes to the Program Settings?',
            confirmButtonLabel: 'OK',
        });
    }

    /**
     * Confirm save program action on modal.
     */
    confirmSave() {
        this.saveConfirmationModal.confirm();
    }
}

export default new ProgramEditPage();
