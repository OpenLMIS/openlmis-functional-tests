import { defineSupportCode } from 'cucumber';

import ViewRequisitionsPage from '../../../../pages/requisitions/view.requisitions.page';
import ViewRequisitionPage from '../../../../pages/requisitions/view.requisition.page';

defineSupportCode(({ Then }) => {

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
        /^"([^"]*)?" column for "([^"]*)?" product should be "([^"]*)?"$/,
        (column, product, value) => expect(ViewRequisitionPage.getColumnForProduct(column, product)).to.equal(value)
    );

});
