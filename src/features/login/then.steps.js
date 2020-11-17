const { Then } = require('cucumber');
import HomePage from '../../pages/home.page';
import LoginPage from '../../pages/login.page';

Then(
    /^I should be brought to the home page$/,
    () => HomePage.waitForIsVisible()
);

Then(
    /^I should be brought to the login page$/,
    () => LoginPage.waitForIsVisible()
);

Then(
    /^I log out$/,
    () => {
        HomePage.clickLogout();
        LoginPage.waitForIsVisible();
    }
);

