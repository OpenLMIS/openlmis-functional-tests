var {Given} = require('cucumber');

import ViewRequisitionsPage from '../../../../pages/requisitions/view.requisitions.page';
import ProductGridPage from '../../../../pages/requisitions/view.requisition.page';

Given(
    /^I have navigated to the view requisition page for "([^"]*)?" facility, "([^"]*)?" program and "([^"]*)?" period$/,
    (facility, program, period) => {
        ViewRequisitionsPage.open();
        ViewRequisitionsPage.waitForIsVisible();

        ViewRequisitionsPage.searchForFacility(facility);
        ViewRequisitionsPage.waitForTable();

        ViewRequisitionsPage.scrollToBottom();
        ViewRequisitionsPage.viewRequisition(program, period);
        ProductGridPage.waitForIsVisible();
    }
);
