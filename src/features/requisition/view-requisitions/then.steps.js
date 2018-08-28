import { defineSupportCode } from 'cucumber';

import '../../login/then.steps';
import '../../common/then.steps';

import ViewRequisitionsPage from '../../../pages/requisition/view.requisitions.page';
import ViewRequisitionPage from '../../../pages/requisition/view.requisition.page';

defineSupportCode(({ Then }) => {

    Then(
        /^I should be brought to the view requisition screen$/,
        () => ViewRequisitionsPage.waitForIsVisible()
    );

    Then(
        /^I should see requisition table$/,
        () => ViewRequisitionsPage.waitForTable()
    );

    Then(
        /^I should be brought to the product grid screen$/,
        () => ViewRequisitionPage.waitForIsVisible()
    );

});
