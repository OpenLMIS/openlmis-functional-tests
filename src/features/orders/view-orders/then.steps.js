import { defineSupportCode } from 'cucumber';

import ViewOrdersPage from '../../../pages/orders/view.orders.page';

defineSupportCode(({ Then }) => {

    Then(
        /^I should be brought to View Orders screen$/,
        () => ViewOrdersPage.waitForIsVisible()
    );

    Then(
        /^I should see requisition for "([^"]*)?" program and "([^"]*)?" period inside the table$/,
        (program, period) => ViewOrdersPage.waitForOrder(program, period, false)
    );
});
