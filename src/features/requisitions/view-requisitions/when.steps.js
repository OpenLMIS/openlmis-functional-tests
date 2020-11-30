var {When} = require('cucumber');

import ViewRequisitionsPage from '../../../pages/requisitions/view.requisitions.page';
import getCurrentMonthlyPeriodName from '../../../support/lib/getCurrentMonthlyPeriodName';

When(
    /^I go to view requisition screen$/,
    () => ViewRequisitionsPage.open()
);

When(
    /^I search for my requisitions in "([^"]*)?" facility$/,
    facility => ViewRequisitionsPage.searchForFacility(facility)
);

When(
    /^I select requisition for program "([^"]*)?" and period "([^"]*)?"$/,
    (program, period) => ViewRequisitionsPage.viewRequisition(program, period)
);

When(
    /^I select requisition for program "([^"]*)?" and current monthly period$/,
    (program) => ViewRequisitionsPage.viewRequisition(program, getCurrentMonthlyPeriodName())
);

When(
    /^I navigate to view requisition screen$/,
    () => ViewRequisitionsPage.navigateToPage()
);