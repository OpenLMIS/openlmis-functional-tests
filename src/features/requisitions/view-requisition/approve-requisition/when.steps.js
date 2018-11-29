import { defineSupportCode } from 'cucumber';

import ViewRequisitionPage from '../../../../pages/requisitions/view.requisition.page';
import approveRequisitionsPage from '../../../../pages/requisitions/approve.requisitions.page';

defineSupportCode(({ When }) => {

    When(
        /^I confirm the approval/,
        () => ViewRequisitionPage.confirmApproval()
    );

    When(
        /^I confirm the reject/,
        () => ViewRequisitionPage.confirmReject()
    );
    
    When(
        /^I navigate to approve requisitions screen/,
        () => approveRequisitionsPage.navigateToPage()
    );

});