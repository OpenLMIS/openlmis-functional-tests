import { defineSupportCode } from 'cucumber';

import UserProfilePage from '../../pages/user.profile.page';

defineSupportCode(({ When }) => {

    When(
        /^I go to the user profile page$/,
        () => UserProfilePage.open()
    );

});
