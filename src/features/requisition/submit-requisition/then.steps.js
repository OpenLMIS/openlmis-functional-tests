import { defineSupportCode } from 'cucumber';

import '../../login/then.steps';
import '../../common/then.steps';

import ViewRequisitionPage from '../../../pages/requisition/view.requisition.page';
import AlertModal from '../../../pages/requisition/alert.modal';
import ProductAddModal from '../../../pages/requisition/product.add.modal';
import ProductListPage from '../../../pages/requisition/product.list.page';

defineSupportCode(({ Then }) => {

    Then(
        /^I should get a requisition with "([^"]*)?" status$/,
        (status) => ViewRequisitionPage.checkStatus(status)
    );

    Then(
        /^I should get an error message$/,
        () => AlertModal.waitForIsVisible()
    );

    Then(
        /^I should not see "([^"]*)?" button$/,
        (button) => ViewRequisitionPage.checkIfButtonIsHidden(button)
    );

    Then(
        /^I should be brought to the non-full supply products list page$/,
        () => ProductListPage.waitForIsVisible()
    );

    Then(
        /^I should be brought to the add products list page$/,
        () => ProductAddModal.waitForIsVisible()
    );

    Then(
        /^I should see a product with "([^"]*)?" code and "([^"]*)?" product name inside the table$/,
        (code, product) => {
            ProductListPage.waitForAddedProducts(code, product);
        }
    );

    Then(
        /^I can set "([^"]*)?" as "([^"]*)?" for "([^"]*)?" product$/,
        (column, value, product) => {
            ViewRequisitionPage.setColumnForProduct(column, product, value);
        }
    );

    Then(
        /^I should not be able to edit the requisition$/,
        () => {
            expect(ViewRequisitionPage.checkIfIsEditable()).to.equal(false);
        }
    );
});
