var {Then} = require('cucumber');

import ReasonListPage from '../../../pages/administration/reason.list.page';

Then(
    /^I should be brought to the reason list page$/,
    () => ReasonListPage.waitForIsVisible()
);

Then(
    /^I should see a reason with "([^"]*)?" name, "([^"]*)?" category and "([^"]*)?" type inside the table$/,
    (name, category, type) => ReasonListPage.waitForReason(name, category, type)
);