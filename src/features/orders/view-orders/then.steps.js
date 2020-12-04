var {Then} = require('cucumber');

import ViewOrdersPage from '../../../pages/orders/view.orders.page';

Then(
    /^I should be brought to View Orders screen$/,
    () => ViewOrdersPage.waitForIsVisible()
);

Then(
    /^I should see order for "([^"]*)?" program and "([^"]*)?" period inside the table$/,
    (program, period) => ViewOrdersPage.waitForOrder(program, period, false)
);
