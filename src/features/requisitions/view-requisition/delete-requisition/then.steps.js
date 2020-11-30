var {Then} = require('cucumber');

import ViewRequisitionPage from '../../../../pages/requisitions/view.requisition.page';

Then(
    /^I should be able to proceed to a previously deleted requisition with "([^"]*)?" status$/,
    (status) => {
        ViewRequisitionPage.proceedToRequisition(status);
        ViewRequisitionPage.waitForIsVisible();
    }
);
