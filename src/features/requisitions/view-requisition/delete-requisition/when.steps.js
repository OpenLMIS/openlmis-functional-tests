import { defineSupportCode } from 'cucumber';

import ViewRequisitionPage from '../../../../pages/requisitions/view.requisition.page';
import InitiateRequisitionPage from '../../../../pages/requisitions/initiate.requisition.page';

defineSupportCode(({ When }) => {

    When(
        /^I confirm the delete$/,
        () => ViewRequisitionPage.confirmDelete()
    );

    When(
        /^I proceed to requisition for "([^"]*)?" program with "([^"]*)?" status$/,
        (program, status) => {
            InitiateRequisitionPage.open();
            InitiateRequisitionPage.waitForIsVisible();

            InitiateRequisitionPage.searchForProgram(program);
            InitiateRequisitionPage.waitForTable();

            ViewRequisitionPage.proceedToRequisition(status);
            ViewRequisitionPage.waitForIsVisible();
        }
    );
});
