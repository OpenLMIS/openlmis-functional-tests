import { defineSupportCode } from 'cucumber';

import UserListPage from '../../../../pages/administration/user.list.page';

defineSupportCode(({ When }) => {

    When(
         /^I select to remove previous added user role$/,
          () => UserListPage.removePreviousAddedUserRole()
        );

    When(
         /^I confirm remove role modal$/,
          () => UserListPage.confirmSubmit()
        );
});
