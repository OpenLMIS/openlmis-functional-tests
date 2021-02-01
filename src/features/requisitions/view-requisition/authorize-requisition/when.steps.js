var {When} = require('cucumber');

import ViewRequisitionPage from '../../../../pages/requisitions/view.requisition.page';
import ViewRequisitionsPage from '../../../../pages/requisitions/view.requisitions.page';

When(
    /^I confirm the authorize/,
    () => {
        ViewRequisitionPage.confirmAuthorize();
    }
);

When(
    /^I have navigated to a requisition for "([^"]*)?" facility, "([^"]*)?" program and "([^"]*)?" period$/,
    (facility, program, period) => {
        ViewRequisitionsPage.navigateToPage();
        ViewRequisitionsPage.waitForIsVisible();

        ViewRequisitionsPage.searchForFacility(facility);
        ViewRequisitionsPage.waitForTable();

        ViewRequisitionsPage.viewRequisition(program, period);
        ViewRequisitionPage.waitForIsVisible();
    }
);
