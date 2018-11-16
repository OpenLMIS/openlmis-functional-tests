import { defineSupportCode } from 'cucumber';

import ViewRequisitionPage from '../../../pages/requisition/view.requisition.page';
import InitiateRequisitionPage from '../../../pages/requisition/initiate.requisition.page';
import chooseSelectOption from '../../../support/action/chooseSelectOption';

import '../../login/given.steps';
import Button from '../../../components/button';

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