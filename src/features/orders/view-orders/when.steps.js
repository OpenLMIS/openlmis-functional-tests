var {When} = require('cucumber');

import ViewOrdersPage from '../../../pages/orders/view.orders.page';

When(
    /^I navigate to View Orders screen/,
    () => ViewOrdersPage.navigateToPage()
);

When(
    /^I search for "([^"]*)?" supplying facility$/,
    supplyingFacility => ViewOrdersPage.searchForSupplyingFacility(supplyingFacility)
);
