import { defineSupportCode } from 'cucumber';

import ViewRequisitionPage from '../../../../pages/requisitions/view.requisition.page';
import InitiateRequisitionPage from '../../../../pages/requisitions/initiate.requisition.page';

defineSupportCode(({ Given }) => {
    Given(
        /^I have initiated a requisition for "([^"]*)?" program$/,
        (program) => {
            InitiateRequisitionPage.open();
            InitiateRequisitionPage.waitForIsVisible();

            InitiateRequisitionPage.searchForProgram(program);
            InitiateRequisitionPage.waitForTable();

            InitiateRequisitionPage.clickProceedButton();
            ViewRequisitionPage.waitForIsVisible();
        }
    );
});
