import { defineSupportCode } from 'cucumber';

import '../../login/when.steps';
import '../../common/when.steps';

import ViewRequisitionPage from '../../../pages/requisition/view.requisition.page';
import waitForVisible from '../../../support/action/waitForVisible';

defineSupportCode(({ When }) => {

    When(
        /^I confirm the authorize/,
        () => {
            waitForVisible('//*[normalize-space(text())="Are you sure you want to authorize this R&R?"]');
            ViewRequisitionPage.confirmAuthorize();
        }
    );
});
