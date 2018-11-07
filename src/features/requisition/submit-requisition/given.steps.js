import { defineSupportCode } from 'cucumber';

import ViewRequisitionPage from '../../../pages/requisition/view.requisition.page';
import InitiateRequisitionPage from '../../../pages/requisition/initiate.requisition.page';
import clickButton from '../../../support/action/clickButton';
import waitForVisible from '../../../support/action/waitForVisible';
import chooseSelectOption from '../../../support/action/chooseSelectOption';

import '../../login/given.steps';

defineSupportCode(({ Given }) => {
    Given(
        /^I have initiated a requisition for "([^"]*)?" program$/,
        (program) => {
            InitiateRequisitionPage.open();
            InitiateRequisitionPage.waitForIsVisible();
            chooseSelectOption("Program", program);
            clickButton("Search");
            waitForVisible('modal-backdrop', true);
            InitiateRequisitionPage.waitForTable();
            clickButton("Proceed");
            ViewRequisitionPage.waitForIsVisible();
        }
    );
});