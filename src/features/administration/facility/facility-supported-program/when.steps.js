var {When} = require('cucumber');

import FacilityListPage from '../../../../pages/administration/facility.list.page';

When(
    /^I go to the facility list page$/,
    () => FacilityListPage.open()
);

When(
    /^I "([^"]*)?" program "([^"]*)?" checkbox$/,
    (value, program) =>  FacilityListPage.setProgramCheckbox(value, program)
);
