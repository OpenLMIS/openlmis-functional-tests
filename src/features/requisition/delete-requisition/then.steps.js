import { defineSupportCode } from 'cucumber';

import ViewRequisitionPage from '../../../pages/requisition/view.requisition.page';

defineSupportCode(({ Then }) => {

    Then(
        /^I should be able to proceed to a previously deleted requisition for "([^"]*)?" period and "([^"]*)?" status$/,
        (period, status) => {
            ViewRequisitionPage.proceedToRequisition(status);
        }
    );
});