var {Given} = require('cucumber');

import SupplyPartnerListPage from '../../../pages/administration/supply.partner.list.page';

Given(
    /^I have navigated to the supply partner list page$/,
    () => {
        SupplyPartnerListPage.navigateToPage();
        SupplyPartnerListPage.waitForIsVisible();
    }
);
