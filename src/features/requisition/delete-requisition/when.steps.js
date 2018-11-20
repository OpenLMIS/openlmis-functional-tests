import { defineSupportCode } from 'cucumber';

import '../../login/when.steps';
import '../../common/when.steps';

import ViewRequisitionPage from '../../../pages/requisition/view.requisition.page';

defineSupportCode(({ When }) => {

    When(
        /^I confirm the delete$/,
        () => ViewRequisitionPage.confirmDelete()
    );
});
