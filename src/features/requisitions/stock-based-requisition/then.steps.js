import { defineSupportCode } from 'cucumber';

import ViewRequisitionPage from '../../../pages/requisitions/view.requisition.page';
import PhysicalInventoryPage from '../../../pages/stock-management/physical-inventory.page';

defineSupportCode(({ Then }) => {

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
});
