import { defineSupportCode } from 'cucumber';

import ViewRequisitionsPage from '../../../../pages/requisitions/view.requisitions.page';

defineSupportCode(({ When }) => {
    When(
        /^I select a "([^"]*)?" facility$/,
        facility => ViewRequisitionsPage.searchForFacility(facility)
    );
});
