var {When} = require('cucumber');

import ViewRequisitionPage from '../../../../pages/requisitions/view.requisition.page';

When(
    /^I confirm Submit Date Physical Stock Count Completed modal$/,
    () => ViewRequisitionPage.confirmPhysicalDateSubmitConfirmationModal()
);

When(
    /^I confirm Authorize Date Physical Stock Count Completed modal$/,
    () => ViewRequisitionPage.confirmPhysicalDateAuthorizeConfirmationModal()
);

When(
    /^I select Today's date on Date Physical Stock Count Completed modal$/,
    () => ViewRequisitionPage.selectDatePhysicalStockCountCompleted()
);

When(
    /^I select date in the future on Date Physical Stock Count Completed modal$/,
    () => ViewRequisitionPage.selectDatePhysicalStockCountCompletedInFuture()
);

When(
    /^I scroll to Proceed button$/,
    () => browser.scroll('//h2[contains(text(), "Initiate Report and Requisition")]')
);
