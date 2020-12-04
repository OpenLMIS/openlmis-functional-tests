var {Then} = require('cucumber');

import getFullMonthName from '../../../../support/lib/getFullMonthName';
import RequisitionStatusMessage from '../../../../components/requisition-status-message';
import ViewRequisitionPage from '../../../../pages/requisitions/view.requisition.page';
import RequisitionHistoryModal from '../../../../pages/requisitions/requisition.history.modal';

Then(
    /^I should see the "([^"]*)" comment for "([^"]*)" status added today by "([^"]*)"$/,
    (comment, status, author) => {
        const today = new Date();
        const authorAndDate = author + ' on ' + getFullMonthName(today.getMonth()) + ' ' + today.getDate() + ', ' + today.getFullYear();
        new RequisitionStatusMessage(status, authorAndDate, comment);
    }
);

Then(
    /^I should not be able to edit any saved requisition comment$/,
    () => expect(ViewRequisitionPage.checkCommentsAreNotEditable())
);

Then(
    /^I should see the "([^"]*)?" comment for "([^"]*)?" status added today by "([^"]*)?" in the history$/,
    (comment, header, author) => RequisitionHistoryModal.checkIfCommentIsVisibleInHistory(header, author, comment)
);

Then(
    /^I should be able to close the modal$/,
    () => expect(RequisitionHistoryModal.closeModal())
);

Then(
    /^I should see the text area to enter the requisition comment$/,
    () => ViewRequisitionPage.commentTextArea.waitForIsVisible()
);

Then(
    /^I should see the auto-saving spinner$/,
    () => ViewRequisitionPage.checkAutoSavingSpinner()
);
