var {Then} = require('cucumber');

import ViewRequisitionsPage from '../../../pages/requisitions/view.requisitions.page';
import ViewRequisitionPage from '../../../pages/requisitions/view.requisition.page';

import getCurrentMonthlyPeriodName from '../../../support/lib/getCurrentMonthlyPeriodName';

Then(
    /^I should be able to see check icon for "([^"]*)?" program and "([^"]*)?" period in the "([^"]*)?" column$/,
    (program, period, columnName) => ViewRequisitionsPage.isOfflineCheckboxVisible(program, period, columnName)
);

Then(
    /^I should be able to see check icon for "([^"]*)?" program and current monthly period in the "([^"]*)?" column$/,
    (program, columnName) => ViewRequisitionsPage.isOfflineCheckboxVisible(program, getCurrentMonthlyPeriodName(), columnName)
);

Then(
    /^I should be able to see "([^"]*)?" button$/,
    button => ViewRequisitionPage.checkIfButtonIsVisible(button)
);

Then(
    /^I should not be able to click on the "([^"]*)?" button$/,
    button => expect(ViewRequisitionPage.checkIfButtonIsEnabledOrNot(button)).to.equal(false)
);

Then(
    /^I should be able to click on the "([^"]*)?" button$/,
    button => expect(ViewRequisitionPage.checkIfButtonIsEnabledOrNot(button)).to.equal(true)
);
