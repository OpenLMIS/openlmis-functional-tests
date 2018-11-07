import { defineSupportCode } from 'cucumber';

import '../../login/when.steps';
import '../../common/when.steps';

import SubmitRequisitionPage from '../../../pages/requisition/submit.requisition.page';
import ProductAddPage from '../../../pages/requisition/product.add.page';
import waitForVisible from '../../../support/action/waitForVisible';

defineSupportCode(({ When }) => {

    When(
        /^I navigate to the Non full supply products tab$/,
        () => {
            SubmitRequisitionPage.openNonFullSupplyProduct()
        }
    );

    When(
        /^I navigate to the Full supply products tab$/,
        () => {
            SubmitRequisitionPage.openFullSupplyProduct();
        }
    );

    When(
        /^I wait for the Submit confirmation modal$/,
        () => {
            waitForVisible('//*[normalize-space(text())="Are you sure you want to submit this R&R?"]');
        }
    );

    When(
        /^I confirm the submit$/,
        () => {
            SubmitRequisitionPage.confirmSubmit();
        }
    );

    When(
        /^I check a product with "([^"]*)?" as code$/,
        (code) => {
            ProductAddPage.markCheckbox(code);
        }
    );

    When(
        /^I go to the "([^"]*)?" page$/,
        (pageNumber) => {
            SubmitRequisitionPage.switchToPage(pageNumber);
        }
    );

    When(
        /^I proceed to the requisition with "([^"]*)?" status$/,
        (status) => {
            SubmitRequisitionPage.proceedToRequisition(status);
        }
    );
});
