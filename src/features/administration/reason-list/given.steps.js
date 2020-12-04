var {Given} = require('cucumber');

import ReasonListPage from '../../../pages/administration/reason.list.page';

Given(
    /^I have navigated to the reason list page$/,
    () => {
        ReasonListPage.open();
        ReasonListPage.waitForIsVisible();
    }
);