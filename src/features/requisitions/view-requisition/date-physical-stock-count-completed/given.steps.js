import { defineSupportCode } from 'cucumber';

import ProgramListPage from '../../../../pages/administration/program.list.page';
import ProgramEditPage from '../../../../pages/administration/program.edit.page';
import clickCheckboxInput from '../../../../support/action/clickCheckboxInput';
import checkCheckboxValue from '../../../../support/check/checkCheckboxValue';
import switchToPage from '../../../../support/action/switchToPage';
import Button from '../../../../components/button';
import InitiateRequisitionPage from '../../../../pages/requisitions/initiate.requisition.page';
import ViewRequisitionPage from '../../../../pages/requisitions/view.requisition.page';


defineSupportCode(({ Given }) => {

    Given(
        /^I have enabled Date Physical Stock Count Completed for "([^"]*)?" program$/,
        (program) => {
            ProgramListPage.open();
            ProgramListPage.waitForIsVisible();
            ProgramListPage.clickEditProgram(program);
            ProgramEditPage.waitForIsVisible();
            var enableStockDateLabel = 'Enable field for Date Physical Stock Count Completed';
            if (!checkCheckboxValue(enableStockDateLabel)) {
                clickCheckboxInput(enableStockDateLabel);
            }
            new Button("Save").click();
            ProgramEditPage.confirmSave();
            ProgramListPage.waitForIsVisible();
        }
    );

    Given(
        /^I have submitted a requisition for "([^"]*)?" program for date stock count completed$/,
        (program) => {
            InitiateRequisitionPage.open();
            InitiateRequisitionPage.waitForIsVisible();

            InitiateRequisitionPage.searchForProgram(program);
            InitiateRequisitionPage.waitForTable();

            InitiateRequisitionPage.clickProceedButton();
            ViewRequisitionPage.waitForIsVisible();

            ViewRequisitionPage.clearForm();

            ViewRequisitionPage.setColumnForProduct("Total received quantity", "Levora", "21");
            ViewRequisitionPage.setColumnForProduct("Beginning balance", "Levora", "26");
            ViewRequisitionPage.setColumnForProduct("Total consumed quantity", "Levora", "4");
            ViewRequisitionPage.setColumnForProduct("Total stockout days", "Levora", "4");
            ViewRequisitionPage.setColumnForProduct("Requested quantity", "Levora", "20");
            ViewRequisitionPage.setColumnForProduct("Requested quantity explanation", "Levora", "2");

            ViewRequisitionPage.setColumnForProduct("Total received quantity", "Male Condom", "21");
            ViewRequisitionPage.setColumnForProduct("Beginning balance", "Male Condom", "26");
            ViewRequisitionPage.setColumnForProduct("Total consumed quantity", "Male Condom", "4");
            ViewRequisitionPage.setColumnForProduct("Total stockout days", "Male Condom", "4");
            ViewRequisitionPage.setColumnForProduct("Requested quantity", "Male Condom", "20");
            ViewRequisitionPage.setColumnForProduct("Requested quantity explanation", "Male Condom", "2");

            ViewRequisitionPage.skipAll();
            ViewRequisitionPage.clickSubmitButton();
            ViewRequisitionPage.confirmSubmit();
        }
    );
});
