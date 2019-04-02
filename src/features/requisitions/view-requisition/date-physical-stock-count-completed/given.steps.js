import { defineSupportCode } from 'cucumber';

import Button from '../../../../components/button';
import Checkbox from '../../../../components/checkbox';

import ProgramListPage from '../../../../pages/administration/program.list.page';
import ProgramEditPage from '../../../../pages/administration/program.edit.page';
import InitiateRequisitionPage from '../../../../pages/requisitions/initiate.requisition.page';
import ViewRequisitionPage from '../../../../pages/requisitions/view.requisition.page';
import switchToPage from '../../../../support/action/switchToPage';

defineSupportCode(({ Given }) => {

    Given(
        /^I have enabled Date Physical Stock Count Completed for "([^"]*)?" program$/,
        (program) => {
            ProgramListPage.open();
            ProgramListPage.waitForIsVisible();
            ProgramListPage.clickEditProgram(program);
            ProgramEditPage.waitForIsVisible();
            const enableStockDateLabel = 'Enable field for Date Physical Stock Count Completed';
            const enableStockDateCheckbox = new Checkbox(enableStockDateLabel);

            if (!enableStockDateCheckbox.selected) {
                enableStockDateCheckbox.click();
            }

            new Button('Save').click();
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
            switchToPage('2');
            ViewRequisitionPage.clearForm();
            switchToPage('1');

            ViewRequisitionPage.setColumnForProduct('Total received quantity', 'Levora', '21');
            ViewRequisitionPage.setColumnForProduct('Beginning balance', 'Levora', '26');
            ViewRequisitionPage.setColumnForProduct('Total consumed quantity', 'Levora', '4');
            ViewRequisitionPage.setColumnForProduct('Total stockout days', 'Levora', '4');
            ViewRequisitionPage.setColumnForProduct('Requested quantity', 'Levora', '20');
            ViewRequisitionPage.setColumnForProduct('Requested quantity explanation', 'Levora', '2');

            ViewRequisitionPage.setColumnForProduct('Total received quantity', 'Male Condom', '21');
            ViewRequisitionPage.setColumnForProduct('Beginning balance', 'Male Condom', '26');
            ViewRequisitionPage.setColumnForProduct('Total consumed quantity', 'Male Condom', '4');
            ViewRequisitionPage.setColumnForProduct('Total stockout days', 'Male Condom', '4');
            ViewRequisitionPage.setColumnForProduct('Requested quantity', 'Male Condom', '20');
            ViewRequisitionPage.setColumnForProduct('Requested quantity explanation', 'Male Condom', '2');

            ViewRequisitionPage.skipAll();
            ViewRequisitionPage.clickSubmitButton();
            ViewRequisitionPage.confirmSubmit();
        }
    );
});
