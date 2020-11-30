var {Given} = require('cucumber');

import ViewRequisitionsPage from '../../../../pages/requisitions/view.requisitions.page';
import ViewRequisitionPage from '../../../../pages/requisitions/view.requisition.page';

Given(
    /^I have navigated to a requisition for "([^"]*)?" facility, "([^"]*)?" program and "([^"]*)?" period$/,
    (facility, program, period) => {
        ViewRequisitionsPage.open();
        ViewRequisitionsPage.waitForIsVisible();

        ViewRequisitionsPage.searchForFacility(facility);
        ViewRequisitionsPage.waitForTable();

        ViewRequisitionsPage.viewRequisition(program, period);
        ViewRequisitionPage.waitForIsVisible();
    }
);
