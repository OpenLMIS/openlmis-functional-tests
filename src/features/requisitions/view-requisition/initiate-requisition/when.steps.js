import { defineSupportCode } from 'cucumber';

import InitiateRequisitionPage from '../../../../pages/requisitions/initiate.requisition.page';

defineSupportCode(({ When }) => {

    When(
        /^I go to initiate requisition screen$/,
        () => InitiateRequisitionPage.open()
    );

    When(
        /^I search for periods$/,
        () => InitiateRequisitionPage.clickSearch()
    );
});
