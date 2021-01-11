var {Given} = require('cucumber');

import UserProfilePage from '../../pages/user.profile.page';

Given(
    /^I have navigated to the user profile page$/,
    () => {
        UserProfilePage.navigateToPage();
        UserProfilePage.waitForIsVisible();
    }
);
