import { defineSupportCode } from 'cucumber';

import LoginPage from '../pages/login.page';
import HomePage from '../pages/home.page';

defineSupportCode(({ When }) => {
    When(
        /^I submit the form$/,
        () => LoginPage.clickSubmit()
    );

    When(
        /^I press enter in the form$/,
        () => LoginPage.pressEnterInForm()
    );

    When(
        /^I logout$/,
        () => HomePage.clickLogout()
    );
});
