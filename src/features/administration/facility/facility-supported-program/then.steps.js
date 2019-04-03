import { defineSupportCode } from 'cucumber';

import FacilityListPage from '../../../../pages/administration/facility.list.page';

defineSupportCode(({ Then }) => {

    Then(
        /^I should be brought to the facility list page$/,
        () => FacilityListPage.waitForIsVisible()
    );

});
