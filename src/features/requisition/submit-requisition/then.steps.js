import { defineSupportCode } from 'cucumber';

import '../../login/then.steps';
import '../../common/then.steps';

import SubmitRequisitionPage from '../../../pages/requisition/submit.requisition.page';
import ViewRequisitionPage from '../../../pages/requisition/view.requisition.page';
import ErrorRequisitionPage from '../../../pages/requisition/error.requisition.page';
import ProductAddPage from '../../../pages/requisition/product.add.page';
import ProductListPage from '../../../pages/requisition/product.list.page';

defineSupportCode(({ Then }) => {

    Then(
        /^I should get a requisition with "([^"]*)?" status$/,
        (status) => SubmitRequisitionPage.checkStatus(status)
    );

    Then(
        /^I should get an error message$/,
        () => ErrorRequisitionPage.waitForIsVisible()
    );

    Then(
        /^I should not see "([^"]*)?" button$/,
        (button) => SubmitRequisitionPage.checkIfButtonIsNotVisible(button)
    );

    Then(
        /^I should be brought to the non-full supply products list page$/,
        () => ProductListPage.waitForIsVisible()
    );

    Then(
        /^I should be brought to the add products list page$/,
        () => ProductAddPage.waitForIsVisible()
    );

    Then(
        /^I should see a product with "([^"]*)?" code and "([^"]*)?" product name inside the table$/,
        (code, product) => {
            ProductListPage.waitForAddedProducts(code, product);
            browser.saveScreenshot('./screenshot13.png');
        }
    );

    Then(
        /^I can set "([^"]*)?" as "([^"]*)?" for "([^"]*)?" product$/,
        (column, value, product) => {
            ViewRequisitionPage.setColumnForProduct(column, product, value);
            browser.saveScreenshot('./screenshot15.png');
        }
    );

    Then(
        /^I should see a notification saying "([^"]*)?"$/,
        (message) => {
            setTimeout(() => {
                waitForNotification(message)
            }, 100000);
        }
    );

    Then(
        /^I should not be able to edit the requisition$/,
        () => {
            expect(ViewRequisitionPage.checkIfIsEditable()).to.equal(false);
            browser.saveScreenshot('./screenshot21.png');
        }
    );
});
