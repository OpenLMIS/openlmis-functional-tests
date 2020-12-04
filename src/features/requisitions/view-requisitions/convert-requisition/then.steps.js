var {Then} = require('cucumber');

import ConvertToOrderRequisitionsPage from '../../../../pages/requisitions/convert-to-order.requisitions.page';

Then(
    /^I should be brought to Convert Requisitions to Order screen$/,
    () => ConvertToOrderRequisitionsPage.waitForIsVisible()
);

Then(
    /^I should see only "([^"]*)?" supplying depot on the dropdown list$/,
    supplyingDepot => ConvertToOrderRequisitionsPage.waitForSupplyingDepotOption(supplyingDepot)
);