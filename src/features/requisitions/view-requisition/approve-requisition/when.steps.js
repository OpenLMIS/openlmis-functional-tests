import { defineSupportCode } from 'cucumber';

import ViewRequisitionPage from '../../../../pages/requisitions/view.requisition.page';
import ViewRequisitionsPage from '../../../../pages/requisitions/view.requisitions.page';
import approveRequisitionsPage from '../../../../pages/requisitions/approve.requisitions.page';

defineSupportCode(({ When }) => {

    When(
        /^I confirm the approval/,
        () => ViewRequisitionPage.confirmApproval()
    );

    When(
        /^I confirm the reject/,
        () => ViewRequisitionPage.confirmReject()
    );

    When(
        /^I navigate to approve requisitions screen/,
        () => approveRequisitionsPage.navigateToPage()
    );

    When(
        /^I select requisition for "([^"]*)?" program and "([^"]*)?" period for approve requisitions$/,
        (program, period) => {
            approveRequisitionsPage.waitForRequisition(program, period, false);
            approveRequisitionsPage.viewRequisitionToApprove(program, period);
        }
    );

    When(
        /^I proceed to requisition for "([^"]*)?" facility, "([^"]*)?" program and "([^"]*)?" period$/,
        (facility, program, period) => {
            ViewRequisitionsPage.open();
            ViewRequisitionsPage.waitForIsVisible();

            ViewRequisitionsPage.searchForFacility(facility);
            ViewRequisitionsPage.waitForTable();

            ViewRequisitionsPage.viewRequisition(program, period);
            ViewRequisitionPage.waitForIsVisible();
        }
    );
});
