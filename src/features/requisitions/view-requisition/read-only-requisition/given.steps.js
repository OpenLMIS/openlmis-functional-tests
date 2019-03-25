import { defineSupportCode } from 'cucumber';

import ViewRequisitionPage from '../../../../pages/requisitions/view.requisition.page';
import ApproveRequisitionsPage from '../../../../pages/requisitions/approve.requisitions.page';
import waitForNotification from '../../../../support/action/waitForNotification';

defineSupportCode(({ Given }) => {
    Given(
        /^I have approved a requisition for "([^"]*)?" facility, "([^"]*)?" program and "([^"]*)?" period/,
        (facility, program, period) => {
            ApproveRequisitionsPage.navigateToPage();
            ApproveRequisitionsPage.waitForIsVisible();

            ApproveRequisitionsPage.waitForRequisition(program, period, false);
            ApproveRequisitionsPage.viewRequisitionToApprove(program, period);

            ViewRequisitionPage.waitForIsVisible();

            ViewRequisitionPage.clickApproveButton();
            ViewRequisitionPage.confirmApproval();
            waitForNotification('Requisition has been approved!');
        }
    );
});
