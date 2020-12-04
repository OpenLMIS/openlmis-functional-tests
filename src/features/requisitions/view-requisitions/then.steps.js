var {Then} = require('cucumber');

import ViewRequisitionsPage from '../../../pages/requisitions/view.requisitions.page';

Then(
    /^I should see filter popover$/,
    () => ViewRequisitionsPage.isFilterPopoverVisible()
);
