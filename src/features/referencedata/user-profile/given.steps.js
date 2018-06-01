import { defineSupportCode } from 'cucumber';

import '../../login/given.steps.js';

import UserProfilePage from '../../../pages/referencedata/user.profile.page';

defineSupportCode(({ Given }) => {

    Given(
        /^I have navigated to the user profile page$/,
        () => {
            UserProfilePage.open();
            UserProfilePage.waitForIsVisible();
        }
    );

});
