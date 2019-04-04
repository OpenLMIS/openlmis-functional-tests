import { defineSupportCode } from 'cucumber';

import UserListPage from '../../../../pages/administration/user.list.page';
import Button from '../../../../components/button';

defineSupportCode(({ When }) => {

    When(
         /^I remove role "([^"]*)?" for program "([^"]*)?" and supervisory node "([^"]*)?"$/,
          (role, program, supervisoryNode ) => UserListPage.removeUserRole(role, program, supervisoryNode)
        );

    When(
         /^I confirm remove role modal$/,
          () => UserListPage.confirmSubmit()
        );
});

