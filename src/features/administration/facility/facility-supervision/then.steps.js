import { defineSupportCode } from 'cucumber';

import InitiateRequisitionPage from '../../../../pages/requisitions/initiate.requisition.page';
import UserListPage from '../../../../pages/administration/user.list.page';

defineSupportCode(({ Then }) => {

    Then(
        /^I should not be able to select Supervised Facility checkbox$/,
         () => expect(InitiateRequisitionPage.isSelectSupervisedFacilityPossible()).to.equal(false)
    );

    Then(
        /^I should be brought to the user edit roles page$/,
         () => UserListPage.waitForForm()
    );

    Then(
        /^I should be brought to the user edit page$/,
         () => UserListPage.waitForEditUserPage()
    );

});
