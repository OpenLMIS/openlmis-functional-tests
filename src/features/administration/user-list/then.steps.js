import { defineSupportCode } from 'cucumber';

import UserListPage from '../../../pages/administration/user.list.page';

defineSupportCode(({ Then }) => {

    Then(
        /^I should be brought to the user list page$/,
        () => UserListPage.waitForIsVisible()
    );

});
