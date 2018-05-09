import { defineSupportCode } from 'cucumber';

import waitForNotification from "../../support/action/waitForNotification";

import HomePage from '../../pages/home.page';

defineSupportCode(({ Then }) => {
    Then(
        /^the offline mode should be enabled$/,
        () => HomePage.isOffline()
    );

    Then(
        /^the offline mode should be disabled$/,
        () => HomePage.isOnline()
    );

    Then(
        /^I should see a successful notification saying "([^"]*)?"$/,
        (message) => waitForNotification(message)
    );

});
