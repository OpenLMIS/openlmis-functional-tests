import { defineSupportCode } from 'cucumber';

import '../../login/then.steps';
import '../../common/then.steps';

import InitiateRequisitionPage from '../../../pages/requisition/initiate.requisition.page';
import viewRequisitionPage from '../../../pages/requisition/view.requisition.page';

defineSupportCode(({ Then }) => {

    Then(
        /^I should be brought to the initiate requisition screen$/,
        () => InitiateRequisitionPage.waitForIsVisible()
    );

    Then(
        /^I should see periods table$/,
        () => {
            InitiateRequisitionPage.waitForTable()
        }
    );

    Then(
        /^I should be redirected to requisition view screen$/,
        () => viewRequisitionPage.waitForIsVisible()
    );
});
