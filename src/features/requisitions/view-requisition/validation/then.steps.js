import { defineSupportCode } from 'cucumber';

import ViewRequisitionPage from '../../../../pages/requisitions/view.requisition.page';

defineSupportCode(({ Then }) => {

    Then(
        /^I should not be able to remove the selected facility in "([^"]*)?" dropdown$/,
        (label) => expect(ViewRequisitionPage.isDropdownDisabled(label)).to.equal(true)
    );

    Then(
        /^I should not be able to skip any products$/,
        () => expect(ViewRequisitionPage.isSkippingProductsNotPossible()).to.equal(true)
    );

});