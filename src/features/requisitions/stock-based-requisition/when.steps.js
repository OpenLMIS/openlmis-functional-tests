import { defineSupportCode } from 'cucumber';

import ViewRequisitionPage from '../../../pages/requisitions/view.requisition.page';
import InitiateRequisitionPage from '../../../pages/requisitions/initiate.requisition.page';
import physicalInventoryPage from '../../../pages/stock-management/physical-inventory.page';
import PhysicalInventoryProductAddModal from '../../../pages/stock-management/physical-inventory-product.add.modal';

defineSupportCode(({ When }) => {
    When(
        /^I initiate a requisition for "([^"]*)?" program$/,
        (program) => {
            InitiateRequisitionPage.open();
            InitiateRequisitionPage.waitForIsVisible();

            InitiateRequisitionPage.searchForProgram(program);
            InitiateRequisitionPage.waitForTable();

            InitiateRequisitionPage.clickProceedButton();
            ViewRequisitionPage.waitForIsVisible();
        }
    );

    When(
        /^I navigate to Physical Inventory page$/,
        () => physicalInventoryPage.navigateToPage()
    );

    When(
        /^I start a new Physical Inventory for "([^"]*)?" program$/,
        program => physicalInventoryPage.startNewPhysicalInventory(program)
    );

    When(
        /^I confirm Submit Physical Inventory modal$/,
        () => physicalInventoryPage.confirmPhysicalInventoryOccurredDateModal()
    );

    When(
        /^I set "([^"]*)?" as "([^"]*)?" for "([^"]*)?" product code inside a modal$/,
        (column, value, code) => PhysicalInventoryProductAddModal.setColumnForProduct(column, value, code)
    );

    When(
        /^I set "([^"]*)" date on physical inventory datepicker$/,
        date => physicalInventoryPage.selectPhysicalInventoryOccurredDate(date)
    );

    When(
        /^I skip printing the physical inventory$/,
        () => physicalInventoryPage.cancelPrintModal()
    );
});
