var {When} = require('cucumber');

import ViewRequisitionPage from '../../../../pages/requisitions/view.requisition.page';
import InitiateRequisitionPage from '../../../../pages/requisitions/initiate.requisition.page';

When(
    /^I confirm the delete$/,
    () => ViewRequisitionPage.confirmDelete()
);

When(
    /^I proceed to requisition for "([^"]*)?" program with "([^"]*)?" status$/,
    (program, status) => {
        InitiateRequisitionPage.navigateToPage();
        InitiateRequisitionPage.waitForIsVisible();

        InitiateRequisitionPage.searchForProgram(program);
        InitiateRequisitionPage.waitForTable();

        ViewRequisitionPage.proceedToRequisition(status);
        ViewRequisitionPage.waitForIsVisible();
    }
);
