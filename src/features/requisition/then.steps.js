import { defineSupportCode } from 'cucumber';

import '../login/then.steps.js';
import '../common/then.steps.js';

import ViewRequisitionsPage from '../../pages/view.requisitions.page';
import ProductGridPage from '../../pages/product.grid.page';

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
        () => ProductGridPage.waitForIsVisible()
    );

});
