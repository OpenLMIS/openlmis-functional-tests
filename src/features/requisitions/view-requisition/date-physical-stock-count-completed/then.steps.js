var {Then} = require('cucumber');

import ViewRequisitionPage from '../../../../pages/requisitions/view.requisition.page';

Then(
    /^I should see Submit Date Physical Stock Count Completed modal$/,
    () => ViewRequisitionPage.physicalDateSubmitConfirmationModal.waitForIsVisible()
);

Then(
    /^I should see Authorize Date Physical Stock Count Completed modal$/,
    () => ViewRequisitionPage.physicalDateAuthorizeConfirmationModal.waitForIsVisible()
);

Then(
    /^I should see Today's date on requisition header$/,
    () => ViewRequisitionPage.checkDatePhysicalStockCountCompleted()
);
