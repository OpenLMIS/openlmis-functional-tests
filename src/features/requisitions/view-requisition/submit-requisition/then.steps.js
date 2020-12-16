var {Then} = require('cucumber');

import ViewRequisitionPage from '../../../../pages/requisitions/view.requisition.page';
import ProductAddModal from '../../../../pages/requisitions/product.add.modal';
import ProductListPage from '../../../../pages/requisitions/product.list.page';

Then(
    /^I should not see "([^"]*)?" button$/,
    button => ViewRequisitionPage.checkIfButtonIsHidden(button)
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
        ViewRequisitionPage.waitForIsVisible();
        ViewRequisitionPage.setColumnForProduct(column, product, value);
    }
);

Then(
    /^I can set "([^"]*)?" as empty for "([^"]*)?" product$/,
    (column, product) => {
        ViewRequisitionPage.clearColumnForProduct(column, product);
    }
);

Then(
    /^I can skip all remaining products$/,
    () => {
        ViewRequisitionPage.skipAll();
    }
);

Then(
    /^I should not be able to edit the requisition$/,
    () => expect(ViewRequisitionPage.checkIfIsEditable()).to.equal(false)
);

Then(
    /^I should not see "([^"]*)?" line item$/,
    lineItem => ViewRequisitionPage.checkIfLineItemIsHidden(lineItem)
);
