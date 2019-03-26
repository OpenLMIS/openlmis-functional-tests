import { defineSupportCode } from 'cucumber';

import ViewRequisitionPage from '../../../../pages/requisitions/view.requisition.page';
import ViewRequisitionsPage from '../../../../pages/requisitions/view.requisitions.page';
import ApproveRequisitionsPage from '../../../../pages/requisitions/approve.requisitions.page';
import waitForNotification from '../../../../support/action/waitForNotification';

defineSupportCode(({ Given }) => {
    Given(
        /^I have approved a requisition for "([^"]*)?" program and "([^"]*)?" period/,
        (program, period) => {
            ApproveRequisitionsPage.navigateToPage();
            ApproveRequisitionsPage.waitForIsVisible();

            ViewRequisitionsPage.scrollToBottom();
            ApproveRequisitionsPage.waitForRequisition(program, period, false);
            ApproveRequisitionsPage.viewRequisitionToApprove(program, period);

            ViewRequisitionPage.waitForIsVisible();

            ViewRequisitionPage.setColumnForProduct('Approved quantity', 'Levonorgestrel', '21');
            ViewRequisitionPage.openNonFullSupplyProduct();
            ViewRequisitionPage.setColumnForProduct('Approved quantity', 'Depo-Estradiol', '21');

            ViewRequisitionPage.clickApproveButton();
            ViewRequisitionPage.confirmApproval();
            waitForNotification('Requisition has been approved!');
        }
    );
});
