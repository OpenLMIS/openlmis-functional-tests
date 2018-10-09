import { defineSupportCode } from 'cucumber';

import '../../login/when.steps';
import '../../common/when.steps';

import InitiateRequisitionPage from '../../../pages/requisition/initiate.requisition.page';

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
