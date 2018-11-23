import { defineSupportCode } from 'cucumber';

import SupplyPartnerAddModal from '../../../pages/administration/supply.partner.add.modal';

defineSupportCode(({ When }) => {

    When(
        /^I add supply partner$/,
        () => SupplyPartnerAddModal.confirm()
    );

    When(
        /^I want to add associations$/,
        () => SupplyPartnerAddModal.confirmAddAssociations()
    );

    When(
        /^I don't want to add associations$/,
        () => SupplyPartnerAddModal.cancelAddAssociations()
    );

});
