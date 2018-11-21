import { defineSupportCode } from 'cucumber';

import ViewRequisitionPage from '../../../pages/requisition/view.requisition.page';

defineSupportCode(({ When }) => {

    When(
        /^I confirm the delete$/,
        () => ViewRequisitionPage.confirmDelete()
    );
});
