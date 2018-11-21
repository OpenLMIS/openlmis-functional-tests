import { defineSupportCode } from 'cucumber';

import UserProfilePage from '../../pages/user.profile.page';

defineSupportCode(({ Given }) => {

    Given(
        /^I have navigated to the user profile page$/,
        () => {
            UserProfilePage.open();
            UserProfilePage.waitForIsVisible();
        }
    );

});
