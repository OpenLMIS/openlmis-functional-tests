var {When} = require('cucumber');

import Checkbox from '../../../components/checkbox';
import InitiateRequisitionPage from '../../../pages/requisitions/initiate.requisition.page';
import ViewRequisitionPage from '../../../pages/requisitions/view.requisition.page';

When(
    /^I initiate the "([^"]*)?" requisition for "([^"]*)?" program$/,
    (label, program) => {
        InitiateRequisitionPage.navigateToPage();
        InitiateRequisitionPage.waitForIsVisible();

        new Checkbox(label).click();
        InitiateRequisitionPage.searchForProgram(program);
        InitiateRequisitionPage.waitForTable();

        InitiateRequisitionPage.clickProceedButton();
        ViewRequisitionPage.waitForIsVisible();
    }
);
