import { defineSupportCode } from 'cucumber';

import SupplyPartnerListPage from '../../../pages/administration/supply.partner.list.page';

defineSupportCode(({ When }) => {

    When(
        /^I go to the supply partner list page$/,
        () => SupplyPartnerListPage.open()
    );

    When(
        /^I navigate to the supply partner list page$/,
        () => SupplyPartnerListPage.navigateToPage()
    );

});
