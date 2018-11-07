import { defineSupportCode } from 'cucumber';

import ViewRequisitionPage from '../../../pages/requisition/view.requisition.page';
import InitiateRequisitionPage from '../../../pages/requisition/initiate.requisition.page';
import clickButton from '../../../support/action/clickButton';
import chooseSelectOption from '../../../support/action/chooseSelectOption';

import '../../login/given.steps';

defineSupportCode(({ Given }) => {
    Given(
        /^I have initiated a requisition for "([^"]*)?" program and "([^"]*)?" period$/,
        (program, period) => {
            InitiateRequisitionPage.open();
            InitiateRequisitionPage.waitForIsVisible();
            chooseSelectOption("Program", program);
            clickButton("Search");
            setTimeout(() => {
                browser.saveScreenshot("./screenshot5.png");
            }, 20000);
            InitiateRequisitionPage.waitForTable();
            clickButton("Proceed");
            ViewRequisitionPage.waitForIsVisible();
        }
    );
});