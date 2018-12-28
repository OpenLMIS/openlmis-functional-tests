import { defineSupportCode } from 'cucumber';

import ViewOrdersPage from '../../../pages/orders/view.orders.page';

defineSupportCode(({ When }) => {

    When(
        /^I navigate to View Orders screen/,
        () => ViewOrdersPage.navigateToPage()
    );

    When(
        /^I search for "([^"]*)?" supplying facility$/,
        supplyingFacility => ViewOrdersPage.searchForSupplyingFacility(supplyingFacility)
    );
});
