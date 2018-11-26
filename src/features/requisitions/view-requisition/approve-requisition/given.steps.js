import { defineSupportCode } from 'cucumber';

import ViewRequisitionsPage from '../../../../pages/requisitions/view.requisitions.page';
import ViewRequisitionPage from '../../../../pages/requisitions/view.requisition.page';

defineSupportCode(({ Given }) => {
    Given(
        /^I have authorized a requisition for "([^"]*)?" facility, "([^"]*)?" program and "([^"]*)?" period/,
        (facility, program, period) => {
            ViewRequisitionsPage.open();
            ViewRequisitionsPage.waitForIsVisible();

            ViewRequisitionsPage.searchForFacility(facility);
            ViewRequisitionsPage.waitForTable();

            ViewRequisitionsPage.viewRequisition(program, period);
            ViewRequisitionPage.waitForIsVisible();

            ViewRequisitionPage.clickAuthorizeButton();
            ViewRequisitionPage.confirmAuthorize();
            waitForNotification("Requisition has been authorized!");
        }
    );
});