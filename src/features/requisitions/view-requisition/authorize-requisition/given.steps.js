import { defineSupportCode } from 'cucumber';

import ViewRequisitionsPage from '../../../../pages/requisitions/view.requisitions.page';
import ViewRequisitionPage from '../../../../pages/requisitions/view.requisition.page';

defineSupportCode(({ Given }) => {
    Given(
        /^I have navigated to a requisition for "([^"]*)?" facility, "([^"]*)?" program, "([^"]*)?" period and "([^"]*)?" status$/,
        (facility, program, period, status) => {
            ViewRequisitionsPage.navigateToPage();
            ViewRequisitionsPage.waitForIsVisible();

            ViewRequisitionsPage.searchForFacility(facility);
            ViewRequisitionsPage.waitForTable();

            ViewRequisitionsPage.viewRequisitionWithStatus(program, period, status);
            ViewRequisitionPage.waitForIsVisible();
        }
    );
});
