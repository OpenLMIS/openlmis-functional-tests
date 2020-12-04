var {When} = require('cucumber');

import ViewRequisitionPage from '../../../../pages/requisitions/view.requisition.page';

When(
    /^I open requisition history modal/,
    () => ViewRequisitionPage.clickRequisitionHistoryLink()
);

When(
    /^I enter view requisition screen/,
    () => ViewRequisitionPage.waitForIsVisible()
)

When(
    /^I click the Add Comment button$/,
    () => ViewRequisitionPage.clickAddCommentButton()
);

When(
    /^I enter "([^"]*)?" as a comment$/,
    (comment) => ViewRequisitionPage.setComment(comment)
);
