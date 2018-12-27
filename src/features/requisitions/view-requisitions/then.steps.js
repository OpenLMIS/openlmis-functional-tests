import { defineSupportCode } from 'cucumber';

import ViewRequisitionsPage from '../../../pages/requisitions/view.requisitions.page';

defineSupportCode(({ Then }) => {

    Then(
        /^I should see filter popover$/,
        () => ViewRequisitionsPage.isFilterPopoverVisible()
    );
});
