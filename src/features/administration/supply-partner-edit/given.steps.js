import { defineSupportCode } from 'cucumber';

import SupplyPartnerListPage from '../../../pages/administration/supply.partner.list.page';
import SupplyPartnerAddModal from '../../../pages/administration/supply.partner.add.modal';

defineSupportCode(({ Given }) => {

    Given(
        /^I created supply partner with code "([^"]*)?", name "([^"]*)?", and without associations$/,
        (code, name) => {
            SupplyPartnerListPage.open();
            SupplyPartnerListPage.waitForIsVisible();
            SupplyPartnerListPage.clickAddSupplyPartner();

            SupplyPartnerAddModal.code = code;
            SupplyPartnerAddModal.name = name;

            SupplyPartnerAddModal.confirm();
            SupplyPartnerAddModal.cancelAddAssociations();
        }
    );

});
