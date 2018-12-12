import ConfirmationModal from '../../components/confirmation-modal';

import fillInput from '../../support/action/fillInput';

/**
 * Supply Partner Add Modal object represents the related view in OpenLMIS UI.
 */
class SupplyPartnerAddModal extends ConfirmationModal {

    constructor() {
        super({
            header: 'Add Supply Partner',
            confirmButtonLabel: 'Add Supply Partner',
        });
    }

    /**
     * Get adding associations modal.
     */
    get addAssociationsModal() {
        return new ConfirmationModal({
            header: 'Supply partner created successfully. Would you like to add associations to it?',
            confirmButtonLabel: 'Yes, add association',
            cancelButtonLabel: 'No',
        });
    }

    set code(code) {
        fillInput('Code', code);
    }

    set name(name) {
        fillInput('Name', name);
    }

    /**
     * Get adding associations confirmation button.
     */
    confirmAddAssociations() {
        this.addAssociationsModal.confirm();
    }

    /**
     * Get no adding associations confirmation button.
     */
    cancelAddAssociations() {
        this.addAssociationsModal.cancel();
    }

}

export default new SupplyPartnerAddModal();
