var {Then} = require('cucumber');

import UserListPage from '../../../pages/administration/user.list.page';

Then(
    /^I should be brought to the user list page$/,
    () => UserListPage.waitForIsVisible()
);

Then(
    /^I should see sorted user list by "([^"]*)?"$/,
    sortOption => UserListPage.sortedBy(sortOption)
);
