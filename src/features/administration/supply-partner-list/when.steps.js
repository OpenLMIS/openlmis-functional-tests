var {When} = require('cucumber');

import SupplyPartnerListPage from '../../../pages/administration/supply.partner.list.page';

When(
    /^I go to the supply partner list page$/,
    () => SupplyPartnerListPage.open()
);

When(
    /^I navigate to the supply partner list page$/,
    () => SupplyPartnerListPage.navigateToPage()
);

When(
    /^I select "([^"]*)?" supply partner for edition$/,
    code => SupplyPartnerListPage.clickEdit(code)
);
