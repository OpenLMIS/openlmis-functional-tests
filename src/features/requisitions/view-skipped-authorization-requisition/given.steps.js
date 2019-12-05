import { defineSupportCode } from 'cucumber';

import ViewRequisitionPage from '../../../pages/requisitions/view.requisition.page';
import switchToPage from '../../../support/action/switchToPage';
import pause from '../../../../support/action/pause';

defineSupportCode(({ Given }) => {
    Given(
        /^I have completed all required fields of the requisition$/,
        () => {     
            ViewRequisitionPage.clearForm();
            switchToPage('2');
            pause(4000);
            ViewRequisitionPage.clearForm();
            switchToPage('1');
            pause(4000);

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
        }
    );
});
