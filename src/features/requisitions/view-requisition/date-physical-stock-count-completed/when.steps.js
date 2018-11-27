import { defineSupportCode } from 'cucumber';

import ViewRequisitionPage from '../../../../pages/requisitions/view.requisition.page';

defineSupportCode(({ When }) => {

    When(
        /^I confirm Submit Date Physical Stock Count Completed modal$/,
        () => ViewRequisitionPage.physicalDateSubmitConfirmationModal.confirm()
    );

    When(
        /^I confirm Authorize Date Physical Stock Count Completed modal$/,
        () => ViewRequisitionPage.physicalDateAuthorizeConfirmationModal.confirm()
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
});