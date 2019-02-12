import { defineSupportCode } from 'cucumber';

import RequisitionTemplatesPage from '../../../../pages/administration/requisition.templates.page';

defineSupportCode(({ Given }) => {
    Given(
        /^I have navigated to the requisition templates page$/,
        () => {
            RequisitionTemplatesPage.navigateToPage();
            RequisitionTemplatesPage.waitForIsVisible();
        }
    );
});
