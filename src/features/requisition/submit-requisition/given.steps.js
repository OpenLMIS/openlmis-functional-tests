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
            browser.saveScreenshot("./screenshot4.png");
            setTimeout(() => {
                browser.saveScreenshot("./screenshot5.png");
            }, 20000);
            waitForVisible('table tr td');
            browser.saveScreenshot("./screenshot6.png");
            clickButton("Proceed");
            browser.saveScreenshot("./screenshot7.png");
            ViewRequisitionPage.waitForIsVisible();
        }
    );
});