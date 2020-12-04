var {When} = require('cucumber');

import ViewRequisitionPage from '../../../pages/requisitions/view.requisition.page';
import ViewRequisitionsPage from '../../../pages/requisitions/view.requisitions.page';
import InitiateRequisitionPage from '../../../pages/requisitions/initiate.requisition.page';
import PhysicalInventoryPage from '../../../pages/stock-management/physical-inventory.page';
import PhysicalInventoryProductAddModal from '../../../pages/stock-management/physical-inventory-product.add.modal';

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
    () => PhysicalInventoryPage.navigateToPage()
);

When(
    /^I start a new Physical Inventory for "([^"]*)?" program$/,
    program => PhysicalInventoryPage.startNewPhysicalInventory(program)
);

When(
    /^I confirm Submit Physical Inventory modal$/,
    () => PhysicalInventoryPage.confirmPhysicalInventoryOccurredDateModal()
);

When(
    /^I set "([^"]*)?" as "([^"]*)?" for "([^"]*)?" product code inside a modal$/,
    (column, value, code) => PhysicalInventoryProductAddModal.setColumnForProduct(column, value, code)
);

When(
    /^I set "([^"]*)" date on physical inventory datepicker$/,
    date => PhysicalInventoryPage.selectPhysicalInventoryOccurredDate(date)
);

When(
    /^I skip printing the physical inventory$/,
    () => PhysicalInventoryPage.cancelPrintModal()
);

When(
    /^I select a "([^"]*)?" facility$/,
    facility => ViewRequisitionsPage.searchForFacility(facility)
);
