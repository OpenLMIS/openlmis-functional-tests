var {When} = require('cucumber');

import UserProfilePage from '../../pages/user.profile.page';

When(
    /^I go to the user profile page$/,
    () => UserProfilePage.open()
);