import { defineSupportCode } from 'cucumber';

import getFullMonthName from '../../../../support/lib/getFullMonthName';
import RequisitionStatusMessage from '../../../../components/requisition-status-message';
import ViewRequisitionPage from '../../../../pages/requisitions/view.requisition.page';
import RequisitionHistoryModal from '../../../../pages/requisitions/requisition.history.modal';

defineSupportCode(({ Then }) => {

    Then(
        /^I should see the "([^"]*)" comment for "([^"]*)" status added today by "([^"]*)"$/,
        (comment, status, author) => {
            const today = new Date();
            const authorAndDate = author + ' on ' + getFullMonthName(today.getMonth()) + ' ' + today.getDate() + ', ' + today.getFullYear();
            new RequisitionStatusMessage(status, authorAndDate, comment);
        }
    );

    Then(
        /^I should not be able to edit saved requisition comment$/,
        () => expect(ViewRequisitionPage.checkCommentIsNotEditable())
    );

    Then(
        /^I should see the "([^"]*)?" comment for "([^"]*)?" status added today by "([^"]*)?" in the history$/,
        (comment, header, author) => RequisitionHistoryModal.checkIfCommentIsVisibleInHistory(header, author, comment)
    );

    Then(
        /^I should be able to close the modal$/,
        () => expect(RequisitionHistoryModal.closeModal())
    );    

});