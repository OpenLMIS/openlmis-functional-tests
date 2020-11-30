var {When} = require('cucumber');

import UserListPage from '../../../pages/administration/user.list.page';

When(
    /^I go to the user list page$/,
    () => UserListPage.open()
);

When(
    /^I navigate to user list page$/,
    () => UserListPage.navigateToPage()
);
