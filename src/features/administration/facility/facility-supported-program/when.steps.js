import { defineSupportCode } from 'cucumber';

import FacilityListPage from '../../../../pages/administration/facility.list.page';

defineSupportCode(({ When }) => {

    When(
        /^I go to the facility list page$/,
        () => FacilityListPage.open()
    );

    When(
        /^I "([^"]*)?" program "([^"]*)?" checkbox$/,
        (value, program) =>  FacilityListPage.setProgramCheckbox(value, program)
    );
});
