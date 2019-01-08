import { defineSupportCode } from 'cucumber';

import ViewRequisitionPage from '../../../../pages/requisitions/view.requisition.page';

defineSupportCode(({ When }) => {

    When(
        /^I click delete button for requisition line item with "([^"]*)?" code$/,
        (product) => ViewRequisitionPage.clickHideLineItemButton(product)
    );

});
