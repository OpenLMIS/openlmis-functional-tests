import { defineSupportCode } from 'cucumber';

import ViewRequisitionPage from '../../../pages/requisitions/view.requisition.page';
import PhysicalInventoryPage from '../../../pages/stock-management/physical-inventory.page';

defineSupportCode(({ Then }) => {

    Then(
        /^value of "([^"]*)?" column for "([^"]*)?" product should be "([^"]*)?"$/,
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
