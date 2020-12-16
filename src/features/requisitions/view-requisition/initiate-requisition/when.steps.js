var {When} = require('cucumber');

import InitiateRequisitionPage from '../../../../pages/requisitions/initiate.requisition.page';

When(
    /^I go to initiate requisition screen$/,
    () => InitiateRequisitionPage.open()
);

When(
    /^I search for periods$/,
    () => InitiateRequisitionPage.clickSearch()
);