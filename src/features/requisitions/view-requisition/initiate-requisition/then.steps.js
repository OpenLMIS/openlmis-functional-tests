import { defineSupportCode } from 'cucumber';

import InitiateRequisitionPage from '../../../../pages/requisitions/initiate.requisition.page';
import viewRequisitionPage from '../../../../pages/requisitions/view.requisition.page';

defineSupportCode(({ Then }) => {

    Then(
        /^I should be brought to the initiate requisition screen$/,
        () => InitiateRequisitionPage.waitForIsVisible()
    );

    Then(
        /^I should see periods table$/,
        () => InitiateRequisitionPage.waitForTable()
    );

    Then(
        /^I should be redirected to requisition view screen$/,
        () => viewRequisitionPage.waitForIsVisible()
    );
});