var {When} = require('cucumber');

import ViewRequisitionPage from '../../../../pages/requisitions/view.requisition.page';

When(
    /^I confirm the authorize/,
    () => {
        ViewRequisitionPage.confirmAuthorize();
    }
);
