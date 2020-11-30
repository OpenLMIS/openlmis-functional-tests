var {When} = require('cucumber');

import ViewRequisitionsPage from '../../../../pages/requisitions/view.requisitions.page';
import ViewRequisitionPage from '../../../../pages/requisitions/view.requisition.page';

import getCurrentQuarterlyPeriodName from '../../../../support/lib/getCurrentQuarterlyPeriodName';

When(
    /^I proceed to requisition for "([^"]*)?" facility, "([^"]*)?" program, "([^"]*)?" period and "([^"]*)?" status$/,
    (facility, program, period, status) => {
        ViewRequisitionsPage.navigateToPage();

        ViewRequisitionsPage.waitForIsVisible();
        ViewRequisitionsPage.searchForFacility(facility);
        ViewRequisitionsPage.waitForTable();

        ViewRequisitionsPage.waitForRequisition(program, period, false);
        ViewRequisitionsPage.viewRequisitionWithStatus(program, period, status);

        ViewRequisitionPage.waitForIsVisible();
    }
)

When(
    /^I proceed to requisition for "([^"]*)?" facility, "([^"]*)?" program, current quarterly period and "([^"]*)?" status$/,
    (facility, program, status) => {
        ViewRequisitionsPage.navigateToPage();

        ViewRequisitionsPage.waitForIsVisible();
        ViewRequisitionsPage.searchForFacility(facility);
        ViewRequisitionsPage.waitForTable();

        let period = getCurrentQuarterlyPeriodName();

        ViewRequisitionsPage.waitForRequisition(program, period, false);
        ViewRequisitionsPage.viewRequisitionWithStatus(program, period, status);

        ViewRequisitionPage.waitForIsVisible();
    }
);
