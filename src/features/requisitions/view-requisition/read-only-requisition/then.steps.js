var {Then} = require('cucumber');

import ViewRequisitionsPage from '../../../../pages/requisitions/view.requisitions.page';
import ViewRequisitionPage from '../../../../pages/requisitions/view.requisition.page';
import InitiateRequisitionPage from '../../../../pages/requisitions/initiate.requisition.page';

Then(
    /^I should not be able to see "([^"]*)?" period inside the table$/,
    period => InitiateRequisitionPage.waitForPeriod(period, true)
);

Then(
    /^I should be able to see a requisition for "([^"]*)?" program, "([^"]*)?" period inside the table$/,
    (program, period) => ViewRequisitionsPage.waitForRequisition(program, period, false)
);

Then(
    /^I should not be able to neither edit any field in the requisition, nor add any product$/,
    () => {
        expect(ViewRequisitionPage.checkIfIsEditable()).to.equal(false);
        ViewRequisitionPage.checkIfButtonIsHidden(ViewRequisitionPage.addProductButton);
    }
);
