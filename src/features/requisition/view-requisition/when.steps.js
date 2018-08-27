import { defineSupportCode } from 'cucumber';

import '../../login/when.steps';
import '../../common/when.steps';

import ViewRequisitionPage from '../../../pages/requisition/view.requisition.page';

defineSupportCode(({ When }) => {

    When(
        /^I set "([^"]*)?" as "([^"]*)?" for "([^"]*)?" product$/,
        (column, value, product) => {
            ViewRequisitionPage.setColumnForProduct(column, product, value);
        }
    );

    When(
        /^I skip remaining products$/,
        () => {
            ViewRequisitionPage.skipAll();
        }
    );

    When(
        /^I clear the form$/,
        () => {
            ViewRequisitionPage.clearForm();
        }
    );

});
