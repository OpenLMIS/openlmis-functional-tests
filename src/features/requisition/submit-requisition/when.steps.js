import { defineSupportCode } from 'cucumber';

import '../../login/when.steps';
import '../../common/when.steps';

import ViewRequisitionPage from '../../../pages/requisition/view.requisition.page';
import ProductAddModal from '../../../pages/requisition/product.add.modal';
import waitForVisible from '../../../support/action/waitForVisible';

defineSupportCode(({ When }) => {

    When(
        /^I navigate to the Non full supply products tab$/,
        () => ViewRequisitionPage.openNonFullSupplyProduct()
    );

    When(
        /^I navigate to the Full supply products tab$/,
        () => ViewRequisitionPage.openFullSupplyProduct()
    );

    When(
        /^I wait for the Submit confirmation modal$/,
        () => waitForVisible('//*[normalize-space(text())="Are you sure you want to submit this R&R?"]')
    );

    When(
        /^I confirm the submit$/,
        () => ViewRequisitionPage.confirmSubmit()
    );

    When(
        /^I check a product with "([^"]*)?" as code$/,
        code => ProductAddModal.selectProduct(code)
    );

    When(
        /^I go to the "([^"]*)?" page$/,
        pageNumber => ViewRequisitionPage.switchToPage(pageNumber)
    );

    When(
        /^I proceed to the requisition with "([^"]*)?" status$/,
        status => ViewRequisitionPage.proceedToRequisition(status)
    );
});
