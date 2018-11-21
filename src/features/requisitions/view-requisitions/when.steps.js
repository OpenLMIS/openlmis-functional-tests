import { defineSupportCode } from 'cucumber';

import ViewRequisitionsPage from '../../../pages/requisitions/view.requisitions.page';

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

    When(
        /^I navigate to view requisition screen$/,
        () => ViewRequisitionsPage.navigateToPage()
    );

});
