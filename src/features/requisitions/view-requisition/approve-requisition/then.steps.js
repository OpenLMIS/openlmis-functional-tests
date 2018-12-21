import { defineSupportCode } from 'cucumber';

import approveRequisitionsPage from '../../../../pages/requisitions/approve.requisitions.page';
import ViewRequisitionPage from '../../../../pages/requisitions/view.requisition.page';
import waitForNotification from '../../../../support/action/waitForNotification';

defineSupportCode(({ Then }) => {

    Then(
        /^I should be redirected to approve requisitions screen$/,
        () => approveRequisitionsPage.waitForIsVisible()
    );

    Then(
        /^I should be able to see the Total requisition cost updated to "([^"]*)?"$/,
        cost => expect(approveRequisitionsPage.getTotalCost()).to.equal(cost)
    );

    Then(
        /^I should see a requisition for "([^"]*)?" program, "([^"]*)?" period inside the table$/,
        (program, period) => approveRequisitionsPage.waitForRequisition(program, period, false)
    );

    Then(
        /^I delete the requisition$/,
        () => {
            ViewRequisitionPage.clickDeleteButton();
            ViewRequisitionPage.confirmDelete();
            waitForNotification('Requisition has been deleted!');
        }
    );

});
