import { defineSupportCode } from 'cucumber';

import ViewRequisitionPage from '../../../../pages/requisitions/view.requisition.page';

defineSupportCode(({ Then }) => {

    Then(
        /^I should see the text area to enter the requisition comment$/,
        () => ViewRequisitionPage.commentTextArea.waitForIsVisible()
    );

    Then(
        /^I should see the auto-saving spinner$/,
        () => ViewRequisitionPage.checkAutoSavingSpinner()
    );
});
