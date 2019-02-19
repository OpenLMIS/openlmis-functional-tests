import { defineSupportCode } from 'cucumber';

import ViewRequisitionPage from '../../../../pages/requisitions/view.requisition.page';
import ProductAddModal from '../../../../pages/requisitions/product.add.modal';

defineSupportCode(({ When }) => {

    When(
        /^I add a new product with "([^"]*)?" as code$/,
        code => {
            ViewRequisitionPage.clickAddProductButton();
            ProductAddModal.waitForIsVisible();
            ProductAddModal.selectProduct(code);
            ProductAddModal.clickAddProductsButton();
        }
    );
});
