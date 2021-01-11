var {Given} = require('cucumber');

import ViewRequisitionPage from '../../../../pages/requisitions/view.requisition.page';
import InitiateRequisitionPage from '../../../../pages/requisitions/initiate.requisition.page';

Given(
    /^I have initiated a requisition for "([^"]*)?" program$/,
    (program) => {
        InitiateRequisitionPage.navigateToPage();
        InitiateRequisitionPage.waitForIsVisible();

        InitiateRequisitionPage.searchForProgram(program);
        InitiateRequisitionPage.waitForTable();

        InitiateRequisitionPage.clickProceedButton();
        ViewRequisitionPage.waitForIsVisible();
    }
);
