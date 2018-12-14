import { defineSupportCode } from 'cucumber';

import ViewRequisitionPage from '../../../../pages/requisitions/view.requisition.page';

defineSupportCode(({ When }) => {

    When(
        /^I click the Add Comment button$/,
        () => ViewRequisitionPage.clickAddCommentButton()
    );

    When(
        /^I enter "([^"]*)?" as a comment$/,
        (comment) => ViewRequisitionPage.setComment(comment)
    );
});