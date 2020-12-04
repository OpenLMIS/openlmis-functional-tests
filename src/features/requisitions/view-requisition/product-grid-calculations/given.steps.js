var {Given} = require('cucumber');

import RequisitionTemplatesPage from '../../../../pages/administration/requisition.templates.page';

Given(
    /^I have navigated to the requisition templates page$/,
    () => {
        RequisitionTemplatesPage.navigateToPage();
        RequisitionTemplatesPage.waitForIsVisible();
    }
);
