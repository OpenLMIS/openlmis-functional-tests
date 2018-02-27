import { defineSupportCode } from 'cucumber';

import '../login/when.steps.js';
import '../common/when.steps.js';

import ViewRequisitionsPage from '../../pages/view.requisitions.page';

defineSupportCode(({ When }) => {

    When(
        /^I go to view requisition screen$/,
        () => ViewRequisitionsPage.open()
    );

    When(
        /^I search for my requisitions$/,
        () => ViewRequisitionsPage.clickSearch()
    );

    When(
        /^I select requisition for program "([^"]*)?" and period "([^"]*)?"$/,
        (program, period) => ViewRequisitionsPage.viewRequisition(program, period)
    );

});
