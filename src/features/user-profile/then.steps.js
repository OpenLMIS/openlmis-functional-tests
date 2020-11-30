var {Then} = require('cucumber');

import UserProfilePage from '../../pages/user.profile.page';

Then(
    /^I should be brought to the user profile page$/,
    () => UserProfilePage.waitForIsVisible()
);

Then(
    /^There should be the pending verification note for "([^"]*)"$/,
    value => UserProfilePage.verifyPendingVerificationNode(value)
);
