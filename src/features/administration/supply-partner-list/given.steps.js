import { defineSupportCode } from 'cucumber';

import SupplyPartnerListPage from '../../../pages/administration/supply.partner.list.page';

defineSupportCode(({ Given }) => {

    Given(
        /^I have navigated to the supply partner list page$/,
        () => {
            SupplyPartnerListPage.open();
            SupplyPartnerListPage.waitForIsVisible();
        }
    );

});
