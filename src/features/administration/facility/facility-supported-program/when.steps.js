import { defineSupportCode } from 'cucumber';

import FacilityListPage from '../../../../pages/administration/facility.list.page';

defineSupportCode(({ When }) => {

    When(
        /^I go to the facility list page$/,
        () => FacilityListPage.open()
    );

    When(
        /^I uncheck Essential Med checkbox$/,
        () => FacilityListPage.uncheckEssentialMedProgram()
    );

    When(
        /^I check Essential Med checkbox$/,
        () => FacilityListPage.checkEssentialMedProgram()
    );
});
