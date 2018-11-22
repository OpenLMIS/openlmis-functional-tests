import Modal from '../../components/modal';

/**
 * Supply Partner Add Modal object represents the related view in OpenLMIS UI.
 */
class SupplyPartnerAddModal extends Modal {

    constructor() {
        super({
            header: 'Add Supply Partner',
        });
    }

}

export default new SupplyPartnerAddModal();
