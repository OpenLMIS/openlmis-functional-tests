import { defineSupportCode } from 'cucumber';

import UserListPage from '../../../pages/administration/user.list.page';

defineSupportCode(({ When }) => {

    When(
        /^I go to the user list page$/,
        () => UserListPage.open()
    );

    When(
        /^I navigate to user list page$/,
        () => UserListPage.navigateToPage()
    );

});
