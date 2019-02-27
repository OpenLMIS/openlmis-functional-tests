import { defineSupportCode } from 'cucumber';

import HomePage from '../../pages/home.page';
import LoginPage from '../../pages/login.page';
import ViewRequisitionPage from '../../pages/requisitions/view.requisition.page';

defineSupportCode(({ Then }) => {
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
            ViewRequisitionPage.scrollToTop();
            HomePage.clickLogout();
            LoginPage.waitForIsVisible();
        }
    );
});
