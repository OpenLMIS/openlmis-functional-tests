import { defineSupportCode } from 'cucumber';

import ViewRequisitionPage from '../../../../pages/requisitions/view.requisition.page';

defineSupportCode(({ Then }) => {

    Then(
        /^I should not see "([^"]*)?" line item$/,
        lineItem => ViewRequisitionPage.checkIfLineItemIsHidden(lineItem)
    );
});
