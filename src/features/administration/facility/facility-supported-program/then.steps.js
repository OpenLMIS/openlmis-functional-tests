var {Then} = require('cucumber');

import FacilityListPage from '../../../../pages/administration/facility.list.page';

Then(
    /^I should be brought to the facility list page$/,
    () => FacilityListPage.waitForIsVisible()
);
