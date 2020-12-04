var {Then} = require('cucumber');

import ViewRequisitionPage from '../../../pages/requisitions/view.requisition.page';
import PhysicalInventoryPage from '../../../pages/stock-management/physical-inventory.page';

Then(
    /^I should be able to see the value of "([^"]*)?" column for "([^"]*)?" product equal to "([^"]*)?"$/,
    (column, product, value) => expect(ViewRequisitionPage.getColumnTableDataForProduct(column, product)).to.equal(value)
);

Then(
    /^I should be brought to the Physical Inventory grid screen$/,
    () => PhysicalInventoryPage.waitForIsVisible()
);

Then(
    /^I should see print modal$/,
    () => PhysicalInventoryPage.waitForPrintModal()
);

Then(
    /^I should see Choose Occurred date modal$/,
    () => PhysicalInventoryPage.waitForPhysicalInventoryOccurredDateModal()
);

Then(
    /^I should be able to see the input value for "([^"]*)?" column for "([^"]*)?" product equal to "([^"]*)?" column$/,
    (inputColumn, product, column) => {
        ViewRequisitionPage.scrollToTheRightOfTable();
        expect(ViewRequisitionPage.getColumnForProduct(inputColumn, product)).to.equal(
           ViewRequisitionPage.getColumnTableDataForProduct(column, product));
    }
);

Then(
    /^I should be able to see the value for "([^"]*)?" equal to a difference between "([^"]*)?" and "([^"]*)?" columns for "([^"]*)?" product$/,
    (column1, column2, column3, product) => {
        expect(ViewRequisitionPage.getColumnTableDataForProduct(column1, product)).to.equal(
            ViewRequisitionPage.getDifferenceBetweenTwoValues(column2, column3, product));
    }
);
