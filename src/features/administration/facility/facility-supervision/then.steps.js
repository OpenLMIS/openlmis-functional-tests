import { defineSupportCode } from 'cucumber';

import InitiateRequisitionPage from '../../../../pages/requisitions/initiate.requisition.page';
import UserListPage from '../../../../pages/administration/user.list.page';
import waitForVisible from '../../../../support/action/waitForVisible';
import Checkbox from '../../../../components/checkbox';

defineSupportCode(({ Then }) => {

    Then(
           /^I should not be able to select "([^"]*)?" checkbox$/,
            (label) => expect(InitiateRequisitionPage.isSelectedOptionEnableOrDisable(label)).to.equal(false)
     );
    Then(
        /^I should be brought to the user edit roles page$/,
         () => UserListPage.waitForTable()
    );

    Then(
        /^I should be brought to the user edit page$/,
         () =>  UserListPage.waitForTable()
    );

});
