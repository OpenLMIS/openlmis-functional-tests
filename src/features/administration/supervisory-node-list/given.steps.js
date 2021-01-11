var {Given} = require('cucumber');

import SupervisoryNodeListPage from '../../../pages/administration/supervisory.node.list.page';

Given(
    /^I have navigated to the supervisory node list page$/,
    () => {
        SupervisoryNodeListPage.navigateToPage();
        SupervisoryNodeListPage.waitForIsVisible();
    }
);
