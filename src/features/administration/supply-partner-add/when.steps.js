var {When} = require('cucumber');

import SupplyPartnerAddModal from '../../../pages/administration/supply.partner.add.modal';

When(
    /^I add supply partner$/,
    () => SupplyPartnerAddModal.confirm()
);

When(
    /^I don't add supply partner$/,
    () => SupplyPartnerAddModal.cancel()
);

When(
    /^I want to add associations$/,
    () => SupplyPartnerAddModal.confirmAddAssociations()
);

When(
    /^I don't want to add associations$/,
    () => SupplyPartnerAddModal.cancelAddAssociations()
);
