import { defineSupportCode } from 'cucumber';

import ViewRequisitionsPage from '../../../../pages/requisitions/view.requisitions.page';

defineSupportCode(({ When }) => {

    When(
        /^I proceed to requisition for "([^"]*)?" program, "([^"]*)?" period and "([^"]*)?" status$/,
        (program, period, status) => {
            ViewRequisitionsPage.viewRequisitionWithStatus(program, period, status);
        }
    );

    When(
        /^I search for "([^"]*)?" facility$/,
        (facility) => {
            ViewRequisitionsPage.waitForIsVisible();
            ViewRequisitionsPage.searchForFacility(facility);
            ViewRequisitionsPage.waitForTable();
        }
    );
});