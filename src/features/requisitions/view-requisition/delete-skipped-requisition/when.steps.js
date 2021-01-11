var {When} = require('cucumber');

import InitiateRequisitionPage from '../../../../pages/requisitions/initiate.requisition.page';
import ViewRequisitionPage from '../../../../pages/requisitions/view.requisition.page';
import ViewRequisitionsPage from '../../../../pages/requisitions/view.requisitions.page';

When(
    /^I confirm the requisition skip$/,
    () => ViewRequisitionPage.confirmSkip()
);

When(
    /^I go to Initiate Report and Requisition screen for "([^"]*)?" program$/,
    (program) => {
        InitiateRequisitionPage.navigateToPage();
        InitiateRequisitionPage.waitForIsVisible();

        InitiateRequisitionPage.searchForProgram(program);
        InitiateRequisitionPage.waitForTable();
    }
);

When(
    /^I proceed to requisition with "([^"]*)?" status$/,
    (status) => {
        ViewRequisitionsPage.waitForRequisition(status, false);
        ViewRequisitionsPage.viewRequisitionWithStatus(undefined, undefined, status);

        ViewRequisitionPage.waitForIsVisible();
    }
);
