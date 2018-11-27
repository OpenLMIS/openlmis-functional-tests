import { defineSupportCode } from 'cucumber';

import UserListPage from '../../../pages/administration/user.list.page';

defineSupportCode(({ Given }) => {

    Given(
        /^I have navigated to the user list page$/,
        () => {
            UserListPage.open();
            UserListPage.waitForIsVisible();
        }
    );

});
