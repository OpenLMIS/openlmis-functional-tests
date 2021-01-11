var {Given} = require('cucumber');

import UserListPage from '../../../pages/administration/user.list.page';

Given(
    /^I have navigated to the user list page$/,
    () => {
        UserListPage.navigateToPage();
        UserListPage.waitForIsVisible();
    }
);
