import { defineSupportCode } from 'cucumber';

import ViewRequisitionsPage from '../../../../pages/requisitions/view.requisitions.page';
import ProductGridPage from '../../../../pages/requisitions/view.requisition.page';

defineSupportCode(({ Given }) => {
    Given(
        /^I have navigated to the view requisition page for "([^"]*)?" program and "([^"]*)?" period$/,
        (program, period) => {
            ViewRequisitionsPage.open();
            ViewRequisitionsPage.waitForIsVisible();

            ViewRequisitionsPage.clickSearch();
            ViewRequisitionsPage.waitForTable();

            ViewRequisitionsPage.viewRequisition(program, period);
            ProductGridPage.waitForIsVisible();
        }
    );
});
