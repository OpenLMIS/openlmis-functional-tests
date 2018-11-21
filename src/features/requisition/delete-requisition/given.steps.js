import { defineSupportCode } from 'cucumber';

import InitiateRequisitionPage from '../../../pages/requisition/initiate.requisition.page';
import ViewRequisitionPage from '../../../pages/requisition/view.requisition.page';
import HomePage from '../../../pages/home.page';
import LoginPage from '../../../pages/login.page';

import '../../login/given.steps';
import waitForNotification from '../../../support/action/waitForNotification';

defineSupportCode(({ Given }) => {
    Given(
        /^I have navigated to Initiate Report and Requisition screen for "([^"]*)?" program$/,
        (program) => {
            InitiateRequisitionPage.open();
            InitiateRequisitionPage.waitForIsVisible();

            InitiateRequisitionPage.searchForProgram(program);
            InitiateRequisitionPage.waitForTable();
        }
    );

    Given(
        /^I have logged out$/,
        () => {          
            HomePage.clickLogout();
            LoginPage.waitForIsVisible();
        }
    );

    Given(
        /^I have proceeded to requisition for "([^"]*)?" program with "([^"]*)?" status$/,
        (program, status) => {
            InitiateRequisitionPage.open();
            InitiateRequisitionPage.waitForIsVisible();

            InitiateRequisitionPage.searchForProgram(program);
            InitiateRequisitionPage.waitForTable();

            ViewRequisitionPage.proceedToRequisition(status);
            ViewRequisitionPage.waitForIsVisible();
        }
    );

    Given(
        /^I have submitted a requisition for "([^"]*)?" program$/,
        (program) => {
            InitiateRequisitionPage.open();
            InitiateRequisitionPage.waitForIsVisible();

            InitiateRequisitionPage.searchForProgram(program);
            InitiateRequisitionPage.waitForTable();
            
            InitiateRequisitionPage.clickProceedButton();
            ViewRequisitionPage.waitForIsVisible();
    
            ViewRequisitionPage.clearForm();
            ViewRequisitionPage.switchToPage("2");
            ViewRequisitionPage.clearForm();
            ViewRequisitionPage.switchToPage("1");
    
            ViewRequisitionPage.setColumnForProduct("Total received quantity", "Levora", "21");
            ViewRequisitionPage.setColumnForProduct("Beginning balance", "Levora", "26");
            ViewRequisitionPage.setColumnForProduct("Total consumed quantity", "Levora", "4");
            ViewRequisitionPage.setColumnForProduct("Total stockout days", "Levora", "4");
            ViewRequisitionPage.setColumnForProduct("Requested quantity", "Levora", "20");
            ViewRequisitionPage.setColumnForProduct("Requested quantity explanation", "Levora", "2");
    
            ViewRequisitionPage.skipAll();
            ViewRequisitionPage.clickSubmitButton();
            ViewRequisitionPage.confirmSubmit();
            waitForNotification("Requisition has been submitted!");
        }
    );
});