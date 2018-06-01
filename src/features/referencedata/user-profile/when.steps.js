import { defineSupportCode } from 'cucumber';

import '../../login/when.steps.js';

import UserProfilePage from '../../../pages/referencedata/user.profile.page';

defineSupportCode(({ When }) => {

    When(
        /^I go to the user profile page$/,
        () => UserProfilePage.open()
    );

});
