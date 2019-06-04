import { defineSupportCode } from 'cucumber';

import ViewRequisitionPage from '../../../../pages/requisitions/view.requisition.page';
import ViewRequisitionsPage from '../../../../pages/requisitions/view.requisitions.page';
import ApproveRequisitionsPage from '../../../../pages/requisitions/approve.requisitions.page';

import waitForNotification from '../../../../support/action/waitForNotification';
import getCurrentQuarterlyPeriodName from '../../../../support/lib/getCurrentQuarterlyPeriodName';

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
        () => ApproveRequisitionsPage.navigateToPage()
    );

    When(
        /^I select requisition for "([^"]*)?" program and "([^"]*)?" period for approve requisitions$/,
        (program, period) => {
            ApproveRequisitionsPage.waitForRequisition(program, period, false);
            ApproveRequisitionsPage.viewRequisitionToApprove(program, period);
        }
    );

    When(
        /^I select requisition for "([^"]*)?" program and current quarterly period for approve requisitions$/,
        (program) => {
            period = getCurrentQuarterlyPeriodName();
            ApproveRequisitionsPage.waitForRequisition(program, period, false);
            ApproveRequisitionsPage.viewRequisitionToApprove(program, period);
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

    When(
        /^I reject the requisition$/,
        () => {
            ViewRequisitionPage.clickRejectButton();
            ViewRequisitionPage.confirmReject();
            waitForNotification('Requisition has been rejected!');
            ApproveRequisitionsPage.waitForIsVisible();
        }
    )
});
