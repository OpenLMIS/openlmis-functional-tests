import { defineSupportCode } from 'cucumber';

import ViewRequisitionsPage from '../../../../pages/requisitions/view.requisitions.page';
import InitiateRequisitionPage from '../../../../pages/requisitions/initiate.requisition.page';

defineSupportCode(({ Then }) => {

    Then(
        /^I should not be able to see "([^"]*)?" period inside the table$/,
        period => InitiateRequisitionPage.waitForPeriod(period, true)
    );

    Then(
        /^I should be able to see a requisition for "([^"]*)?" program, "([^"]*)?" period inside the table$/,
        (program, period) => ViewRequisitionsPage.waitForRequisition(program, period, false)
    );
});
