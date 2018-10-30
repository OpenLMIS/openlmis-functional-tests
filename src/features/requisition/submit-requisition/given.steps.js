import { defineSupportCode } from 'cucumber';

import ViewRequisitionsPage from '../../../pages/requisition/view.requisitions.page';
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
            browser.saveScreenshot("./screenshot1.png");
            InitiateRequisitionPage.waitForIsVisible();
            browser.saveScreenshot("./screenshot2.png");
            chooseSelectOption("Program", program);
            browser.saveScreenshot("./screenshot3.png");
            clickButton("Search");
            browser.saveScreenshot("./screenshot4.png");
            setTimeout(() => {
                browser.saveScreenshot("./screenshot5.png");
            }, 20000);
            InitiateRequisitionPage.waitForTable();
            browser.saveScreenshot("./screenshot6.png");
            clickButton("Proceed");
            browser.saveScreenshot("./screenshot7.png");
            ViewRequisitionPage.waitForIsVisible();
            browser.saveScreenshot("./screenshot8.png");
        }
    );
});