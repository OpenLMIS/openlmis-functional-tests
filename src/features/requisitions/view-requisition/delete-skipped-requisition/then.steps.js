import { defineSupportCode } from 'cucumber';

import ViewRequisitionsPage from '../../../../pages/requisitions/view.requisitions.page';

defineSupportCode(({ Then }) => {

    Then(
        /^I should be able to see the requisition with "([^"]*)?" status inside the table$/,
        status => ViewRequisitionsPage.waitForRequisition(status, false)
    );
});