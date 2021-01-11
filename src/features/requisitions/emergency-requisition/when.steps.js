var {When} = require('cucumber');

import Checkbox from '../../../components/checkbox';
import InitiateRequisitionPage from '../../../pages/requisitions/initiate.requisition.page';
import ViewRequisitionPage from '../../../pages/requisitions/view.requisition.page';

When(
    /^I proceed to "([^"]*)?" requisition for "([^"]*)?" program with "([^"]*)?" status$/,
    (label, program, status) => {
        InitiateRequisitionPage.navigateToPage();
        InitiateRequisitionPage.waitForIsVisible();

        new Checkbox(label).click();
        InitiateRequisitionPage.searchForProgram(program);
        InitiateRequisitionPage.waitForTable();

        ViewRequisitionPage.proceedToRequisition(status);
        ViewRequisitionPage.waitForIsVisible();
    }
);
