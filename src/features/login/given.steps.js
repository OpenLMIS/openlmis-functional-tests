import { defineSupportCode } from 'cucumber';

import LoginPage from '../../pages/login.page';
import HomePage from '../../pages/home.page';

defineSupportCode(({ Given }) => {
    Given(
        /^I navigate to the login page$/,
        LoginPage.open
    );
    Given(
        /^I enter the username "([^"]*)?"$/,
        (username) => {
            LoginPage.username = username;
        }
    );

    Given(
        /^I enter the password "([^"]*)?"$/,
        (password) => {
            LoginPage.password = password;
        }
    );

    Given(
        /^I am on the home page$/,
        () => HomePage.isVisible()
    );

    Given(
      /^I have logged with username "([^"]*)?" and password "([^"]*)?"$/,
      (username, password) => {
        LoginPage.open();

        LoginPage.username = username;
        LoginPage.password = password;

        LoginPage.clickSubmit();
        HomePage.waitForIsVisible();
        HomePage.isVisible();
      }
    );

});
