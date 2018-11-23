import { defineSupportCode } from 'cucumber';

import SupplyPartnerListPage from '../../../pages/administration/supply.partner.list.page';

defineSupportCode(({ Then }) => {

    Then(
        /^I should be brought to the supply partner list page$/,
        () => SupplyPartnerListPage.waitForIsVisible()
    );

    Then(
        /^I should see a supply partner with "([^"]*)?" code, "([^"]*)?" name inside the table$/,
        (code, name) => SupplyPartnerListPage.waitForSupplyPartner(code, name)
    );

});