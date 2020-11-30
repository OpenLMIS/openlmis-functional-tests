var {Then} = require('cucumber');

import ViewRequisitionsPage from '../../../../pages/requisitions/view.requisitions.page';
import ViewRequisitionPage from '../../../../pages/requisitions/view.requisition.page';

Then(
    /^I should be brought to the view requisition screen$/,
    () => ViewRequisitionsPage.waitForIsVisible()
);

Then(
    /^I should see requisition table$/,
    () => ViewRequisitionsPage.waitForTable()
);

Then(
    /^I should be brought to the product grid screen$/,
    () => ViewRequisitionPage.waitForIsVisible()
);

Then(
    /^I should be able to see the input value of "([^"]*)?" column for "([^"]*)?" product equal to "([^"]*)?"$/,
    (column, product, value) => expect(ViewRequisitionPage.getColumnForProduct(column, product)).to.equal(value)
);
