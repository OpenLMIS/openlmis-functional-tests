import { defineSupportCode } from 'cucumber';

import ViewRequisitionPage from '../../../../pages/requisitions/view.requisition.page';

defineSupportCode(({ Then }) => {

    Then(
        /^I should be able to proceed to a previously deleted requisition with "([^"]*)?" status$/,
        (status) => {
            ViewRequisitionPage.proceedToRequisition(status);
            ViewRequisitionPage.waitForIsVisible();
        }
    );
});
