import { defineSupportCode } from 'cucumber';

import ViewRequisitionPage from '../../../../pages/requisitions/view.requisition.page';
import ViewRequisitionsPage from '../../../../pages/requisitions/view.requisitions.page';

defineSupportCode(({ Given }) => {

    Given(
        /^I select requisition initiated at "([^"]*)?" for program "([^"]*)?" and period "([^"]*)?"$/,
        (dateInitiated, program, period) => {
            ViewRequisitionsPage.waitForTable();
            ViewRequisitionsPage.scrollToBottom();
            ViewRequisitionsPage.viewRequisitionWithDateInitiated(program, period, dateInitiated);

            ViewRequisitionPage.waitForIsVisible();
        }
    )

});
