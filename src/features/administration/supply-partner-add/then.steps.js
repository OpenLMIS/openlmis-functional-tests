var {Then} = require('cucumber');

import SupplyPartnerAddModal from '../../../pages/administration/supply.partner.add.modal';
import SupplyPartnerEditPage from '../../../pages/administration/supply.partner.edit.page';

Then(
    /^I should be brought to the supply partner creation page$/,
    () => SupplyPartnerAddModal.waitForIsVisible()
);

Then(
    /^I should be brought to the supply partner edit page$/,
    () => SupplyPartnerEditPage.waitForIsVisible()
);
