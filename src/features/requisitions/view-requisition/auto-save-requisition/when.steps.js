import { defineSupportCode } from 'cucumber';

import ViewRequisitionPage from '../../../../pages/requisitions/view.requisition.page';
import ProductListPage from '../../../../pages/requisitions/product.list.page';


defineSupportCode(({ When }) => {

    When(
        /^I click the Add Comment button$/,
        () => ViewRequisitionPage.clickAddCommentButton()
    );

    When(
        /^I enter "([^"]*)?" as a comment$/,
        (comment) => ViewRequisitionPage.setComment(comment)
    );

    When(
        /^I navigate to the Non full supply products tab to open the add products list page$/,
        () => {
            ViewRequisitionPage.openNonFullSupplyProduct();
            ProductListPage.waitForIsVisible();
        }
    )
});